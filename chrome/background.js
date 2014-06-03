$(document).ready(function() {
    console.log("background.js loaded");
    
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        console.log("picture taken, executing function");

        // create POST data
        var id = localStorage.getItem("userid");
        var image = request;
        var d = new Date();
        var date = d.toJSON();
        var tag;
        // console.log("variables created");

        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            // get current tab url
            var url = tabs[0].url;
            // console.log(url);
            if (url === undefined || url === null) {
                url = "internet";
            }

            // get tag
            if (url.indexOf("facebook") !== -1) {
                tag = "facebook";
            } else if (url.indexOf("twitter") !== -1) {
                tag = "twitter";
            } else if (url.indexOf("reddit") !== -1) {
                tag = "reddit";
            } else if (url.indexOf("tumblr") !== -1) {
                tag = "tumblr";
            } else if (url.indexOf("pinterest") !== -1) {
                tag = "pinterest";
            } else if (url.indexOf("google") !== -1) {
                tag = "google";
            } else if (url.indexOf("instagram") !== -1) {
                tag = "instagram";
            } else if (url.indexOf("youtube") !== -1) {
                tag = "youtube";
            } else if (url.indexOf("buzzfeed") !== -1) {
                tag = "buzzfeed";
            } else {
                tag = "internet";
            };

            // create object to post
            var postdata = {"id": id, "date": date, "tag": tag, "image": image};
            console.log(JSON.stringify(postdata));
            console.log("The above can be posted to any server as a JSON with $.post(postdata)")
        });
    });
});