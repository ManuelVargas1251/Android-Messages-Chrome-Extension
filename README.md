![Programming language](https://img.shields.io/badge/Language-Javascript-blue.svg)  
![Version](https://img.shields.io/badge/Version-0.1.4.1-brightgreen.svg)
# Android Messages - Open in New Tab - Chrome Extension 🌎

This chrome extension adds a google messages icon to your chrome extensions bar. When clicked, a new tab is loaded to messages.google.com from your browser!

You can now view your text messages from the Messages app from Google on your chrome browser! 


## [Download from Chrome Web Store](https://chrome.google.com/webstore/detail/odhjnjgngaofbpdfdmcmdfenohncgopl)

Please submit issues for any bugs/features.

I have no association with Google or any other related entity.

[![](images/ChromeWebStore_Badge_v2.png)](https://chrome.google.com/webstore/detail/odhjnjgngaofbpdfdmcmdfenohncgopl)

![](images/screenshot-1.png)

## Development

chrome dev ref: https://developer.chrome.com/docs/extensions/mv3/getstarted/

Code opens a new page to google messages

```js
let newURL = "https://messages.google.com/web"
try {
    chrome.browserAction.onClicked.addListener(function (activeTab) {
        chrome.tabs.create({ url: newURL })
    })
} catch (err) {
    console.error(err.message)
}
```


### Bundle
To upload your own version to the store, bundle using the included `PackExtension.bat` file. 7zip PATH required.

```bat
echo off
 title Android Messages Chrome Extension Compressor
 echo starting compression...
 7z a -tzip Android-Messages-Chrome-Extension "background.js" "manifest.json" "images/messenger_96dp.png" "images/messenger_128dp.png"
 echo compression complete!
```
