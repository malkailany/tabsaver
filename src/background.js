chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action) {
        var tabarray = new Array();

        function getUrl() {
            chrome.windows.getAll({
                populate: true
            }, function (windows) {
                windows.forEach(function (window) {
                    window.tabs.forEach(function (tab) {
                        //collect all of the urls here, I will just log them instead
                        tabarray.push(tab.url)
                    });

                });
                console.log("tabarray should have populated with urls")
                saveUrl()
            });
        }

        function saveUrl() {
            console.log("array length: " + tabarray.length)
            var name = request.data
            var obj = {};
            obj[name] = tabarray;

            chrome.storage.sync.set(obj, function () {
                // Notify that we saved.
                console.log('Settings saved as ' + obj[name]);

            });
        }

        function loadUrl() {
            arrayName = request.data;
            chrome.storage.sync.get(arrayName, function (items) {
                console.log('sync: ' + arrayName);
                console.log(arrayName, items);
            });
        }


        if (request.action == 'saveme') {
            console.log("You have pressed the save button! Filename is '" + request.data + "'");
            getUrl()
        }
        if (request.action == 'loadme') {
            console.log("You have pressed the load button! Filename is '" + request.data + "'");
            loadUrl(request.data);
        }
    }
});