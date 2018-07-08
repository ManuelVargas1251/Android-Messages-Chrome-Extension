:: This script compresses all needed files to upload to chrome store
echo off
 title Android Messages Chrome Extension Compressor
 echo starting compression...
 7z a -tzip Android-Messages-Chrome-Extension "background.js" "manifest.json" "messenger_96dp.png" "messenger_128dp.png"
 echo compression complete!
