// function loadHTML() {
//     
// }

// loadHTML()

function reddenPage() {
    const body = document.querySelector('body')
    let iFrame = document.createElement('iframe')
    iFrame.src = chrome.runtime.getURL('/index.html')
    iFrame.style.zIndex = '99999999999999999999999',
    iFrame.style.position = 'fixed',
    iFrame.style.top = '0',
    iFrame.style.right = '0',
    iFrame.style.width = '500px',
    iFrame.style.height = '100vh',
    iFrame.style.border = 'none',
    document.body.append(iFrame, document.body.firstChild)

}

chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes("chrome://")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: reddenPage
        });
    }
});