// When the page is loaded, get the stored selected text and display it.
chrome.storage.local.get('selectedText', (result) => {
    const selectedTextDiv = document.getElementById('selectedText');
    selectedTextDiv.textContent = result.selectedText;
  });
  