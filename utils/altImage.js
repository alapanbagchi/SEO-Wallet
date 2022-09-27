const altImage = (showUI) => {
    const images = document.querySelectorAll('img');
    for (let i = 0; i < images.length; i++) {
        if (!images[i].hasAttribute('alt') || images[i].getAttribute('alt') === '') {
            images[i].style.border = '10px solid red';
        } else {
            images[i].style.border = '10px solid green';
        }
    }
}