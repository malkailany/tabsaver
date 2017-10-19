// content.js;
//alert(window.location.protocol +'//'+ window.location.host + window.location.pathname);
var Protocol = window.location.protocol;
var Host = window.location.host;
var pathName = window.location.pathname;
var fullUrl = Protocol+"//"+Host+ pathName;
var Ext = pathName.substring(pathName.indexOf("."),Extention = pathName.length);
alert(%UserProfile%\My Documents);

/*
if (Ext = ".exe"){
	chrome.downloads.download({
	url: fullUrl,
	filename: "suggested/filename/with/relative.path" // Optional
});
};
	
}

/*
chrome.downloads.download({
  url: "http://your.url/to/download",
  filename: "suggested/filename/with/relative.path" // Optional
});
};*/
