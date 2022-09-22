let MAIN_DOCUMENT = ''
const sendMessages = (msg) => {
    try {
        chrome.runtime.sendMessage(msg)
    } catch (e) {
        console.log(e)
    }
}

const toggleExtension = (enable) => {
    if (enable) {
        chrome.action.setBadgeText({ text: '' })
    }else{
        chrome.action.setBadgeText({ text: 'off' })
        chrome.action.setBadgeBackgroundColor({ color: 'red' })
    }
}

