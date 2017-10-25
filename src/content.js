/*
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("savetabs").addEventListener("click", function () {

        console.log('are we here?');

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

            chrome.tabs.sendMessage(tabs[0].id, {greeting: 'hello'}, function() {

                console.log('were gettings somewhere... but where?');
                console.log('lets try to get a farewell from background..');
                chrome.extension.sendMessage({ action: "hellofriend"});
            });
        });
    });


});*/





    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("savetabs").addEventListener("click", function () {
            var filename = document.getElementById("filename").value;
            //alert('second ' + filename)
            chrome.extension.sendMessage({action: "saveme", data: filename});
        });


        document.getElementById("loadtabs").addEventListener("click", function () {
            var filename = document.getElementById("filename").value;
            chrome.extension.sendMessage({action: "loadme", data: filename});

        });
    });

/*
chrome.extension.sendMessage({ action: "WhatYouWant"});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
    if(request.action){

    }

});*/