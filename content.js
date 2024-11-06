// Variable globale pour stocker l'état de l'option
let shouldTranslateSimilar = false;
let isProcessing = false;
let pendingUpdate = false;

// Charge l'état initial
browser.storage.local.get('translateSimilar').then(result => {
    shouldTranslateSimilar = result.translateSimilar || false;
});

function isAlreadyTranslated(text) {
    return text.includes("🇫🇷");
}

function shouldTranslatePokemon(englishName, frenchName) {
    if (shouldTranslateSimilar) {
        return true;
    }
    return englishName !== frenchName;
}

// Fonction throttle pour limiter la fréquence d'exécution
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function findAndTranslatePokemonNames() {
    const start = performance.now();
    
    if (isProcessing) {
        pendingUpdate = true;
        return;
    }
    
    isProcessing = true;
    
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function(node) {
                // Ignore les noeuds de script et de style
                const parent = node.parentNode;
                if (parent && (
                    parent.nodeName === 'SCRIPT' ||
                    parent.nodeName === 'STYLE' ||
                    parent.nodeName === 'NOSCRIPT' ||
                    isAlreadyTranslated(node.textContent)
                )) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        },
        false
    );

    const nodesToUpdate = [];
    let node;
    
    // Collecte d'abord tous les nœuds à modifier
    while (node = walker.nextNode()) {
        let text = node.textContent;
        let modified = false;
        
        for (const [englishName, frenchName] of Object.entries(pokemonTranslations)) {
            const regex = new RegExp(`\\b${englishName}\\b`, 'g');
            
            if (regex.test(text) && shouldTranslatePokemon(englishName, frenchName)) {
                text = text.replace(regex, `${englishName} (${frenchName} 🇫🇷)`);
                modified = true;
            }
        }
        
        if (modified) {
            nodesToUpdate.push([node, text]);
        }
    }
    
    // Puis applique toutes les modifications en une fois
    if (nodesToUpdate.length > 0) {
        requestAnimationFrame(() => {
            nodesToUpdate.forEach(([node, text]) => {
                node.textContent = text;
            });
        });
    }
    
    isProcessing = false;
    
    if (pendingUpdate) {
        pendingUpdate = false;
        findAndTranslatePokemonNames();
    }
    
    const end = performance.now();
    console.log(`Durée d'exécution : ${end - start}ms`);
}

// Version debounced de findAndTranslatePokemonNames
const debouncedTranslate = debounce(findAndTranslatePokemonNames, 250);

// Écoute les messages du popup
browser.runtime.onMessage.addListener((message) => {
    if (message.type === 'optionChanged') {
        shouldTranslateSimilar = message.translateSimilar;
        debouncedTranslate();
    }
});

// Lance la traduction quand la page est chargée
document.addEventListener('DOMContentLoaded', debouncedTranslate);

// Relance la traduction lors des modifications dynamiques du DOM
const observer = new MutationObserver((mutations) => {
    // Vérifie rapidement s'il y a des modifications pertinentes
    const hasRelevantChanges = mutations.some(mutation => {
        return Array.from(mutation.addedNodes).some(node => {
            return node.nodeType === Node.TEXT_NODE || 
                   (node.nodeType === Node.ELEMENT_NODE && 
                    !['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.nodeName));
        });
    });
    
    if (hasRelevantChanges) {
        debouncedTranslate();
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: false // On n'observe pas les changements de texte
});
