chrome.extension.onMessageExternal.addListener(
	function(request, sender, sendResponse){
		console.log(request, sender, sendResponse);
	}
);