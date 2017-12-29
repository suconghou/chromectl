chrome.webRequest.onBeforeRequest.addListener(function(detail) {
	console.info("onBeforeRequest", detail);
}, {
	urls: ["*://*/*"]
}, ["blocking", "requestBody"]);

chrome.debugger.onEvent.addListener(function(source, method, params) {
	console.info("debugger.onEvent", source, method, params);
});