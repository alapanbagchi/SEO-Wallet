//Function for sending message to background.js
const sendMessages = (msg) => {
    try {
        chrome.runtime.sendMessage(msg)
    } catch (e) {
        console.log(e)
    }
}

//Function for receiving message from background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch(request.message) {
        case 'wordCount':
            wordCount(request)
            break
        case 'altImage': 
            altImage(request)
            break
        case 'searchDOMManipulation':
            searchDOMManipulation(request)
            break
        case 'ranking':
            ranking(request)
            break
        case 'searchIndex':
            searchIndex(request)
            break
        case 'headingOptimization':
            headingOptimization(request)
            break
        case 'linkChecker':
            linkChecker(request)
            break
        case 'linkCheckerData':
            console.log("HERE")
            linkCheckerData(request)
        default:
            break
    }
})



const wordCountListener = () => {
    document.addEventListener('selectionchange', () => {
        const selection = window.getSelection()
        console.log(selection)
        const text = selection.toString()
        const wordCount = text.split(' ').length
        return wordCount
    })
}