let isProcessing = false;
let pendingUpdate = false;

function isAlreadyTranslated(text) {
    // check si deja traduit
    return /\(.*?🇫🇷\)/.test(text);
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
                const parent = node.parentNode;
                if (parent && (
                    parent.nodeName === 'SCRIPT' ||
                    parent.nodeName === 'STYLE' ||
                    parent.nodeName === 'NOSCRIPT' ||
                    isAlreadyTranslated(node.textContent) ||
                    parent.nodeName === 'INPUT' ||
                    parent.nodeName === 'TEXTAREA' ||
                    parent.isContentEditable 
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
        
        for (const [englishName, frenchName] of pokemonTranslations.entries()) {
            const regex = new RegExp(`\\b${englishName}(?! \\(.*?🇫🇷\\))\\b`, 'gi');
            
            if (regex.test(text)) {
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

// Lance la traduction quand la page est chargée
document.addEventListener('DOMContentLoaded', debouncedTranslate);

// Relance la traduction lors des modifications dynamiques du DOM
const observer = new MutationObserver((mutations) => {
    const nodesToProcess = [];

    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                nodesToProcess.push(node);
            } else if (node.nodeType === Node.ELEMENT_NODE && 
                       !['SCRIPT', 'STYLE', 'NOSCRIPT', 'INPUT', 'TEXTAREA'].includes(node.nodeName) && 
                       !node.isContentEditable) {
                const walker = document.createTreeWalker(
                    node,
                    NodeFilter.SHOW_TEXT,
                    {
                        acceptNode: function(subNode) {
                            if (isAlreadyTranslated(subNode.textContent)) {
                                return NodeFilter.FILTER_REJECT;
                            }
                            return NodeFilter.FILTER_ACCEPT;
                        }
                    }
                );

                let textNode;
                while (textNode = walker.nextNode()) {
                    nodesToProcess.push(textNode);
                }
            }
        });
    });

    if (nodesToProcess.length > 0) {
        requestAnimationFrame(() => {
            nodesToProcess.forEach(node => {
                let text = node.textContent;
                let modified = false;

                for (const [englishName, frenchName] of pokemonTranslations.entries()) {
                    const regex = new RegExp(`\\b${englishName}(?! \\(.*?🇫🇷\\))\\b`, 'gi');
                    if (regex.test(text)) {
                        text = text.replace(regex, `${englishName} (${frenchName} 🇫🇷)`);
                        modified = true;
                    }
                }

                if (modified) {
                    node.textContent = text;
                }
            });
        });
    }
});

// Demarre l'observer sur les changements pertinents
observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    characterDataOldValue: false
});
