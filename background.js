chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'hash-tools',
        title: '📁 Hash Intel',
        contexts: ['selection'],
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'hash-tools') {
        const hash = info.selectionText.trim().toLowerCase();

        const isValidHash = /^[a-f0-9]{32}$|^[a-f0-9]{40}$|^[a-f0-9]{64}$/.test(
            hash
        ); // MD5, SHA-1, SHA-256

        if (isValidHash) {
            const encoded = encodeURIComponent(hash);
            const urls = [
                `https://www.virustotal.com/gui/file/${encoded}/details`,
                `https://urlhaus.abuse.ch/browse.php?search=${encoded}`,
            ];

            urls.forEach((url) => chrome.tabs.create({ url, active: false }));

            chrome.tabs.executeScript(tab.id, {
                code: `navigator.clipboard.writeText(${JSON.stringify(hash)});`,
            });
        } else {
            chrome.tabs.executeScript(tab.id, {
                code: `alert("Selected text is not a valid MD5, SHA-1, or SHA-256 hash.");`,
            });
        }
    }
});
