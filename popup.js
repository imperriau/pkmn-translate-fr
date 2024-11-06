// Charge l'état actuel au chargement du popup
document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('translateSimilar');
    
    // Récupère la valeur actuelle
    browser.storage.local.get('translateSimilar').then(result => {
        checkbox.checked = result.translateSimilar || false;
    });
    
    // Écoute les changements
    checkbox.addEventListener('change', (e) => {
        browser.storage.local.set({
            translateSimilar: e.target.checked
        });
        
        // Notifie le content script du changement
        browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
            browser.tabs.sendMessage(tabs[0].id, {
                type: 'optionChanged',
                translateSimilar: e.target.checked
            });
        });
    });
});
