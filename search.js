chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "amazon",
        type: "normal",
        title: "Amazonで検索する"
    });
});

chrome.contextMenus.onClicked.addListener(function(item){
    console.log("出来た");
    const select = selectionText();
    chrome.tabs.executeScript({
        code: "document.body.style.backgroundColor = '" + item.menuItemId + "'"
    });
});