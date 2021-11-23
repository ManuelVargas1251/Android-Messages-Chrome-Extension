try {
    chrome.browserAction.onClicked.addListener(function (activeTab) {
        let newURL = "https://messages.google.com/web";
        chrome.tabs.create({ url: newURL });
    });
} catch (e) {
    console.error(e);
}