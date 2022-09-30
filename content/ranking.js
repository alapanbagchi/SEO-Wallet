const ranking = (request) => {
    const { data } = request.data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    const links = [...doc.querySelectorAll('div .g > div:not(.d4rhi) .yuRUbf a:not(.fl.iUh30)')]
    const url = window.location.href
    let ranking = -1
    links.forEach((link, index) => {
        if (link.href === url) {
            ranking = index + 1
        }
    })
    //Display ranking in red and font size 25px console log
    console.log(`%c Ranking : ${ranking}`, 'color: red; font-size: 25px')
}

const ranking_bg = async (response) => {
    const searchTermFormatted = response.data.searchTerm.replace(/ /g, '+')
    const fetched = await fetch(`https://www.google.com/search?q=${searchTermFormatted}&num=100`)
    const data = await fetched.text()
    return data
}