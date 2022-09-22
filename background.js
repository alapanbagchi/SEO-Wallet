try {
    chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
        console.log("Background", response, response === 'COLLAPSE_MENU')
        if (response.message === 'COLLAPSE_MENU') {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.scripting.executeScript({
                    function() {
                        document.querySelector('body').style.marginRight = '0'
                        document.querySelector('body').style.transition = 'all 0.3s linear '
                        setTimeout(() => {
                            document.querySelector('body').style.marginRight = '88px'
                            document.querySelector('body').style.transition = 'all 0.3s linear '
                        }, 300)
                        const iframe = document.querySelector('.seo_wallet_extension_iframe')
                        iframe.style.width = '0'
                        iframe.style.transition = 'all 0.3s linear'
                        setTimeout(() => {
                            iframe.style.width = '88px'
                            iframe.style.transition = 'all 0.3s linear'
                        }, 300)
                    },
                    target: { tabId: tabs[0].id }
                })
            })
        }
        else if (response.message === 'EXPAND_MENU') {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.scripting.executeScript({
                    function() {
                        document.querySelector('body').style.marginRight = '411px'
                        document.querySelector('body').style.transition = 'all 0.3s linear'
                        const iframe = document.querySelector('.seo_wallet_extension_iframe')
                        iframe.style.width = '411px'
                    },
                    target: { tabId: tabs[0].id }
                })
            })
        }
        else if (response.message === 'CLOSE_MENU') {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.scripting.executeScript({
                    function() {
                        document.querySelector('body').style.marginRight = '0'
                        document.querySelector('body').style.transition = 'all 0.3s linear'
                        const iframe = document.querySelector('.seo_wallet_extension_iframe')
                        iframe.style.width = '0'
                    },
                    target: { tabId: tabs[0].id }
                })
            })
        }
        else if (response.message === 'OPEN_MENU') {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.scripting.executeScript({
                    function() {
                        document.querySelector('body').style.marginRight = '411px'
                        document.querySelector('body').style.transition = 'all 0.3s linear'
                        const iframe = document.querySelector('.seo_wallet_extension_iframe')
                        iframe.style.width = '411px'
                    },
                    target: { tabId: tabs[0].id }
                })
            })
        }
        else if (response.message === 'COLLAPSED_MENU_HIDE') {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.scripting.executeScript({
                    function() {
                        document.querySelector('body').style.marginRight = '40px'
                        document.querySelector('body').style.transition = 'all 0.3s linear'
                        const iframe = document.querySelector('.seo_wallet_extension_iframe')
                        iframe.style.width = '40px'
                    },
                    target: { tabId: tabs[0].id }
                })
            })
        }
        else if (response.message === 'COLLAPSED_MENU_SHOW') {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.scripting.executeScript({
                    function() {
                        document.querySelector('body').style.marginRight = '88px'
                        document.querySelector('body').style.transition = 'all 0.3s linear'
                        const iframe = document.querySelector('.seo_wallet_extension_iframe')
                        iframe.style.width = '88px'
                    },
                    target: { tabId: tabs[0].id }
                })
            })
        }
    })
    chrome.action.onClicked.addListener((tab) => {
        if(tab.url.includes('chrome://')) return
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => {
                const iframe = document.createElement('iframe');
                const body = document.querySelector('body')
                console.log(document.querySelector('.seo_wallet_extension_iframe'))
                if (document.querySelector('.seo_wallet_extension_iframe') != null) {
                    const marginRight = document.querySelector('.seo_wallet_extension_iframe').style.width
                    //If the width is 0, then the menu is closed, so we open it
                    if (marginRight === '0px') {
                        document.querySelector('body').style.marginRight = '411px'
                        document.querySelector('body').style.transition = 'all 0.3s linear'
                        const iframe = document.querySelector('.seo_wallet_extension_iframe')
                        iframe.style.width = '411px'
                        return 
                    }
                    return 
                }
                body.style.position = 'relative';
                body.style.marginRight = '0';
                body.style.width = 'auto'


                //Make an iframe 
                iframe.classList.add('seo_wallet_extension_iframe')

                iframe.style.transform = 'translateX(411px)'

                iframe.style.position = 'fixed';
                iframe.style.top = '0';
                iframe.style.right = '0';
                iframe.style.width = '0';
                iframe.style.zIndex = '9999999999999';
                iframe.style.height = '100vh';
                iframe.style.outline = 'none';
                iframe.style.border = 'none';
                iframe.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.2)';
                iframe.style.position = 'translateX(0)'
                body.insertAdjacentElement("afterend", iframe)
                body.style.marginRight = '411px';
                body.style.transition = 'all 0.3s linear'
                iframe.style.width = '411px';

                iframe.src = chrome.runtime.getURL('index.html')
                iframe.style.transform = 'translateX(0)'
                iframe.style.transition = 'all 0.3s linear'
            }
        });
    });
} catch (e) {
    console.log(e)
}

