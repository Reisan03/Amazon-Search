chrome.contextMenus.create({
    "title": "Amazon.co.jpで検索する",
    "type": "normal",
    "contexts": ["selection"],
    onclick: function(info, tab) {
        var selection = window.getSelection().toString();
        console.log(selection);
        var url = "https://www.amazon.co.jp/s?k=" + selection;
        console.log();
        chrome.tabs.create({index:tab.index+1, url : url,selected:true});
    }
});