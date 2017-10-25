/*
chrome.extension.onMessage.addListener(function(request, sender, sendResponse)
{

    if(request.action)
    {
        chrome.windows.getAll({populate:true},function(windows){
            windows.forEach(function(window){
                window.tabs.forEach(function(tab){
                    //collect all of the urls here, I will just log them instead
                    //console.log(tab.url);
                    allUrl = tab.url;

                        // Get a value saved in a form.
                        var theValue = allUrl;
                        // Check that there's some code there.
                        if (!theValue) {
                            message('Error: No value specified');
                            return;
                        }
                        // Save it using the Chrome extension storage API.
                        chrome.storage.sync.set({'value': theValue}, function() {
                            // Notify that we saved.
                            console.log('Settings saved');
                            chrome.storage.sync.get('value', function (obj) {
                                console.log('value', obj);
                        });


                    chrome.extension.sendMessage({ action: tab.url});

                });
            });
        });

        });
    }
});
*/
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action) {
        var tabarray = new Array();

        function getUrl() {

            chrome.windows.getAll({
                populate: true
            }, function(windows) {
                windows.forEach(function(window) {
                    window.tabs.forEach(function(tab) {
                        //collect all of the urls here, I will just log them instead
                        tabarray.push(tab.url)
                        console.log('pusheD?' + tab.url);
                    });
                    saveUrl(request.data)
                });
            });



        }

        function saveUrl(name) {
            console.log(tabarray.length)
            chrome.storage.sync.set({name: tabarray}, function() {
                // Notify that we saved.
                console.log('Settings saved');

            });
            console.log('beep boop saved as '+ name);
        }
        function loadUrl(name) {
            chrome.storage.sync.get(null, function(items) {
                var allKeys = Object.keys(items);
                console.log(allKeys);
            });
            chrome.storage.sync.get(name.string, function(items) {

                console.log(items.name);
            });

            console.log('beep boop load');
        }

        if (request.action == 'saveme') {
            getUrl()
            console.log(request.data)
            console.log('YOU HAVE SAVED ME');
        }
        if (request.action == 'loadme') {
            loadUrl(request.data);
            console.log(request.data)
            console.log('YOU HAVE loaded ME');
        }
    }
});