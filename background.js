try {
    importScripts('./content/linkChecker.js', './content/ranking.js');
    chrome.runtime.onMessage.addListener(async function (response, sender, sendResponse) {
        /**
         * WORD COUNT FUNCTIONALITY
         */
        //Executes the word count file when the message is received
        if (response.message === 'wordCount') {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { message: 'wordCount', data: {} });
            });
        }
        //Creates a context menu when the word count is done
        if (response.message === 'WordCountData') {
            chrome.contextMenus.remove('wordCount', () => {
                chrome.runtime.lastError
            })
            chrome.contextMenus.create({
                id: 'wordCount',
                title: `Words: ${response.data[0]} |  Characters: ${response.data[1]}`,
                contexts: ['selection']
            })
            if (chrome.runtime.lastError) {
                console.log(chrome.runtime.lastError.message);
            } else {
            }
        }
        /**
         * END OF WORD COUNT FUNCTIONALITY
        */

        /** 
         * ALT IMAGE FUNCTIONALITY
        */
        if (response.message === 'altImage') {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { message: 'altImage', data: {} });
            });
        }
        /**
         * END OF ALT IMAGE FUNCTIONALITY
         */
        if (response.message === 'searchIntentFinder') {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.scripting.executeScript({
                    target: { tabId: sender.tab.id },
                    function: () => {
                        let links = document.querySelectorAll('div .g > div:not(.d4rhi) .yuRUbf a:not(.fl.iUh30)')
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    chrome.runtime.sendMessage({
                                        message: 'searchIntentHTMLFinder',
                                        data: entry.target.href
                                    })
                                    observer.unobserve(entry.target)
                                }
                            })
                        })
                        links.forEach(link => {
                            observer.observe(link)
                        })
                    }
                })
            })
        }
        if (response.message === 'searchIntentHTMLFinder') {
            chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
                let title, description, h1, h2, h3, h4, h5, h6
                let link = response.data
                const fetchedLink = await fetch(link)
                const data = await fetchedLink.text()
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        message: 'searchDOMManipulation',
                        data: {
                            data, link
                        }
                    },
                )
            })
        }
        if (response.message === 'ranking') {
            chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
                const data = await ranking_bg(response)
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        message: 'ranking',
                        data: {
                            data
                        }
                    },
                )
            })
        }
        if (response.message === 'searchIndex') {
            chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
                const tabID = tabs[0].id
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        message: 'searchIndex',
                        data: {
                            tabid: tabID
                        }
                    },
                )
            })
        }
        if (response.message === 'headingOptimization') {
            chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        message: 'headingOptimization',
                    },
                )
            })
        }
        if (response.message === 'linkChecker') {
            chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        message: 'linkChecker',
                    },
                )
            })
        }
        if (response.message === 'linkCheckerData') {
            chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
                linkCheckerData_bg(response)
            })
        }

    })

    chrome.action.onClicked.addListener((tab) => {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: function () {
            }
        });
    });
} catch (e) {

}

