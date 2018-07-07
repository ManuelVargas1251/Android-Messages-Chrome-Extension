chrome.browserAction.onClicked.addListener(function (activeTab) {
    let newURL = "https://messages.android.com/";
    chrome.tabs.create({ url: newURL });
    //console.log(newURL);
});