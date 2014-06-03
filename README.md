#selfie
=======

![preview](https://github.com/adityadalal924/selfie/raw/master/selfie.png)

A chrome extension and API to store and retrieve selfies.  
The extension allows you to take selfies while browsing the web.  
~~The website/API allows you to review and share the pictures.~~ (Source will be added once I clean it up)  


Features
--------
 - Chrome extension that lives in your browser bar
 - Uses your webcam and opens up an inline preview for effective selfie taking
 - Automatically saves the taken photo
 - Each user has a persitent userID (for integration with a server)
 - Tags each picture with the website you were on at the time (ie. facebook, reddit, etc.)
 - Well-formatted JSON output, ready for use in an API

Development
-----------
 - Load the unpacked extension inside the /chrome folder, or install the crx
 - Open up the options page once to allow camera access
 - "Inspect views: background page" for JS debugging and to view JSON output
 - Example output of JSON below  

'''
{"id":"ufa7eng66r","date":"2014-06-03T22:40:35.523Z","tag":"facebook","image":"data:image/png;base64,{base64-encodeddata}"}
'''


