const sendMessages = (msg) => {
    try {
        chrome.runtime.sendMessage(msg)
    } catch (e) {
        console.log(e)
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'searchIntentDOMManipulation') {
        const { data, link } = request.data
        console.log(link)
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        const title = doc.querySelector('title').innerText
        const h1 = [...doc.querySelectorAll('h1')]
        const h2 = [...doc.querySelectorAll('h2')]
        const h3 = [...doc.querySelectorAll('h3')]
        const h4 = [...doc.querySelectorAll('h4')]
        const h5 = [...doc.querySelectorAll('h5')]
        const h6 = [...doc.querySelectorAll('h6')]
        console.log(title, h1, h2, h3, h4, h5, h6)
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