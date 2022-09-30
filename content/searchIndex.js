const searchIndex = (request) => {
    let results = document.querySelectorAll('.v7W49e > .MjjYud, .v7W49e .hlcw0c') /* main */
        var resultStats = document.querySelector('#result-stats');
        console.log(resultStats)
        if (resultStats !== null) {
            var resultStats = resultStats.innerHTML;
            var resultStats = resultStats.replace(/(?<=[0-9]{1,3})(&nbsp;|\s{1})(?=[0-9]{1,3})/g, '.');
            var regExMatch = resultStats.match(/[0-9]+(\.|,|')?[0-9]?(\.|,|')?[0-9]?(\.|,|')?[0-9]?(\.|,|')?[0-9]?(\.|,|')?[0-9]?(\.|,|')?[0-9]?(\.|,|')?[0-9]?(\.|,|')?[0-9]?(\.|,|')?[0-9]?/g);
            var currentPage = 1;
            if (typeof regExMatch[2] !== 'undefined') {
                var currentPage = parseInt(regExMatch[0]);
            }
            var resultsPerPage = results.length;
        } else {
            // defaults for queries without resultsPerPage
            var currentPage = 1;
            var resultsPerPage = 10;
        }
        // Reset localStorage on page 1 for new searches
        if (currentPage == 1) {
            localStorage.removeItem('countLastPage');
            localStorage.removeItem('lastPage');
        }
        var countDisplay = 1;
        for (var countActual = 0; countActual < results.length; countActual++, countDisplay++) {
            // Skip if URL is invisible (PAA box, other search features)
            var height = window.getComputedStyle(results[countActual].querySelector('a h3'))
                .height;
            if (height == "auto") {
                var height = 0;
            }
            if (height < 20) {
                countDisplay--;
                continue;
            }
            if (currentPage == 1) {
                var count = countDisplay;
            } else if (parseInt(localStorage.getItem('countLastPage')) !== null && (parseInt(localStorage.getItem('lastPage')) + 1) == currentPage) {
                var count = (countDisplay + parseInt(localStorage.getItem('countLastPage')));
            } else {
                // Fallback for when localStorage is not set (no chronological navigation)
                var count = (countActual + (currentPage * resultsPerPage)) - (resultsPerPage - 1);
            }
            let counter = document.createElement('div');
            counter.className = 'mst-serp-counter';
            counter.innerHTML = '#' + count;
            if (results[countActual].classList.contains('hlcw0c')) {
                results[countActual].style.position = 'relative';
            }
            results[countActual].appendChild(counter);
        }
        localStorage.setItem('lastPage', currentPage);
        localStorage.setItem('countLastPage', count);
}