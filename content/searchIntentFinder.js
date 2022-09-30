const searchDOMManipulation = (request) => {
    const { data, link } = request.data
    console.log(link)
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    let title = doc.querySelector('title')
    if (title) {
        title = title.innerText
    }
    let description = doc.querySelector('meta[name="description"]')
    if (description) {
        description = description.content
    }
    const h1 = [...doc.querySelectorAll('h1')]
    const h2 = [...doc.querySelectorAll('h2')]
    const h3 = [...doc.querySelectorAll('h3')]
    const h4 = [...doc.querySelectorAll('h4')]
    const h5 = [...doc.querySelectorAll('h5')]
    const h6 = [...doc.querySelectorAll('h6')]
    console.log(title, description, h1, h2, h3, h4, h5, h6)
}