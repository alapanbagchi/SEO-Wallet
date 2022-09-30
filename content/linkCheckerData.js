const linkCheckerData = async (response) => {
    const links = [...response.data.internalLinks, ...response.data.externalLinks]
    const brokenLinks = []
    const successLinks = []
    const unverifiedLinks = []
    for (let i = 0; i < links.length; i++) {
        try {
            if (links[i].includes('tel:') || links[i].includes('mailto:') || links[i].includes('javascript:') || links[i].includes('#')) {
                continue
            }
            const fetched = await fetch(links[i], {
                credentials: 'omit'
            })
            if (fetched.ok) {
                successLinks.push(links[i])
            } else {
                unverifiedLinks.push(links[i])
            }
        } catch (e) {
            brokenLinks.push(links[i])
        }
    }
    console.log("INTERNAL LINKS")
    console.table(response.data.internalLinks)
    console.log("EXTERNAL LINKS")
    console.table(response.data.externalLinks)
    console.log("DO FOLLOW LINKS")
    console.table(response.data.doFollowLinks)
    console.log("NO FOLLOW LINKS")
    console.table(response.data.noFollowLinks)
    console.log("BROKEN LINKS")
    console.table(brokenLinks)
    console.log("UNVERIFIED LINKS")
    console.table(unverifiedLinks)
    console.log("SUCCESS LINKS")
    console.table(successLinks)
}