chrome.browserAction.onClicked.addListener(function (activeTab) {
    var newURL = "https://messages.android.com/";
    chrome.tabs.create({ url: newURL });
    console.log(newURL)
});