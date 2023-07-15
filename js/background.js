
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
  // Store the selected text using the chrome.storage API.
  chrome.storage.local.set({ 'selectedText': item.selectionText }, function() {
    // After the selected text is stored, create a new window with new_message.html.
    chrome.windows.create({ url: '../html/new_message.html', width: 500, height: 600, type: 'popup' });
  });
});
