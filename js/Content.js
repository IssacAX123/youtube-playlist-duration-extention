if (location.href.indexOf('list=') !== -1) {
    onUrlChange();
}


let lastUrl = location.href;
let url;
new MutationObserver(() => {
    url = location.href;
    if (url !== lastUrl) {
        if (url.indexOf('list=') !== -1) {
            lastUrl = url;
            window.location.reload(true);
            onUrlChange();
        }
    }
}).observe(document, {subtree: true, childList: true});


function onUrlChange(){
    setTimeout(() => {  run(); }, 5000);
}
function run(){
    var node = document.getElementsByTagName('body')[0];
    var script= document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', chrome.extension.getURL('js/script.js'))
    node.appendChild(script);
}

