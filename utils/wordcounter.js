//Word Count logic
const wordCount = (text) => {
    document.addEventListener('selectionchange', () => {
        const words = document.getSelection().toString().split(' ').length;
        const characters = document.getSelection().toString().length;
        //Send the message to the background script
        chrome.runtime.sendMessage({
            message: 'WordCountData',
            data: [words, characters]
        });
    })
}
