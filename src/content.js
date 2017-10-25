
chrome.storage.sync.get(null, function(items) {
    var allKeys = Object.keys(items);
    var select = document.getElementById("loaditem");
    for(var i = 0; i < allKeys.length; i++) {
        var opt = allKeys[i]
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    console.log(allKeys.length)
   /* var select = document.getElementById("loaditem");
    for(var i = 0; i < allKeys.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }​*/
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("savetabs").addEventListener("click", function () {
        var filename = document.getElementById("filename").value;
        //alert('second ' + filename)
        chrome.extension.sendMessage({action: "saveme", data: filename});
    });
    document.getElementById("loadtabs").addEventListener("click", function () {
        var e = document.getElementById("loaditem");
        var filename = e.options[e.selectedIndex].text
        alert(filename);
        chrome.extension.sendMessage({action: "loadme", data: filename});

    });
});
