var ContextMenus = function () {
    var items = this.items = {};

    chrome.contextMenus.onClicked.addListener(function (info, tab) {
        items[info.menuItemId].onclick(info, tab);
    });
};

ContextMenus.prototype = {
    create: function (properties) {
        this.items[properties.id] = {
            onclick: properties.onclick
        };

        properties.onclick = null;
        chrome.contextMenus.create(properties);
    }
};

chrome.runtime.onInstalled.addListener(function() {
    var contextMenus = new ContextMenus();

    contextMenus.create({
        type: "normal",
        id: "Hello",
        title: "Amazonで検索する",
        onclick: sayHello
    });
});

function sayHello() {
    alert("HEllo");
}