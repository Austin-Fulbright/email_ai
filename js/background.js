

let tldLocales = {
    'com.au': 'create email',

  };

  chrome.runtime.onInstalled.addListener(async () => {
    for (const [tld, locale] of Object.entries(tldLocales)) {
      chrome.contextMenus.create({
        id: tld,
        title: locale,
        type: 'normal',
        contexts: ['selection']
      });
    }
});

chrome.contextMenus.onClicked.addListener((item, tab) => {
    console.log(item.selectionText)
});
