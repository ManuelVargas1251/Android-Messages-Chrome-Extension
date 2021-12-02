let newURL = "https://messages.google.com/web"
try {
    chrome.browserAction.onClicked.addListener(function (activeTab) {
        chrome.tabs.create({ url: newURL })
    });
} catch (err) {console.error(err.message)}