const headingOptimization = () => {
    const doc = document.querySelector('body')
    console.log(doc)
    const h1 = [...doc.querySelectorAll('h1')]
    const h2 = [...doc.querySelectorAll('h2')]
    const h3 = [...doc.querySelectorAll('h3')]
    const h4 = [...doc.querySelectorAll('h4')]
    const h5 = [...doc.querySelectorAll('h5')]
    const h6 = [...doc.querySelectorAll('h6')]
    h1.forEach((h) => {
        let span = document.createElement('span')
        span.innerText = 'H1'
        span.style.color = 'white'
        span.style.backgroundColor = 'black'
        span.style.padding = '5px'
        span.style.borderRadius = '5px'
        span.style.marginRight = '5px'
        h.prepend(span)
        h.style.border = '2px solid red'
    })
    h2.forEach((h) => {
        //Append a span with the text "H2" to the h2 element
        let span = document.createElement('span')
        span.innerText = 'H2'
        span.style.color = 'white'
        span.style.backgroundColor = 'black'
        span.style.padding = '5px'
        span.style.borderRadius = '5px'
        span.style.marginRight = '5px'
        h.prepend(span)
        h.style.border = '2px solid blue'
    })
    h3.forEach((h) => {
        let span = document.createElement('span')
        span.innerText = 'H3'
        span.style.color = 'white'
        span.style.backgroundColor = 'black'
        span.style.padding = '5px'
        span.style.borderRadius = '5px'
        span.style.marginRight = '5px'
        h.prepend(span)
        h.style.border = '2px solid green'
    })
    h4.forEach((h) => {
        let span = document.createElement('span')
        span.innerText = 'H4'
        span.style.color = 'white'
        span.style.backgroundColor = 'black'
        span.style.padding = '5px'
        span.style.borderRadius = '5px'
        span.style.marginRight = '5px'
        h.prepend(span)
        h.style.border = '2px solid yellow'
    })
    h5.forEach((h) => {
        let span = document.createElement('span')
        span.innerText = 'H5'
        span.style.color = 'white'
        span.style.backgroundColor = 'black'
        span.style.padding = '5px'
        span.style.borderRadius = '5px'
        span.style.marginRight = '5px'
        h.prepend(span)
        h.style.border = '2px solid orange'
    })
    h6.forEach((h) => {
        let span = document.createElement('span')
        span.innerText = 'H6'
        span.style.color = 'white'
        span.style.backgroundColor = 'black'
        span.style.padding = '5px'
        span.style.borderRadius = '5px'
        span.style.marginRight = '5px'
        h.prepend(span)
        h.style.border = '2px solid purple'
    })
}