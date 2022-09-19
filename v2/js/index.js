//Function for expanding the footer by adding a class called expand on click and removing it on click
const expandFooter = () => {
    const footer = document.querySelector('.menufooter');
    footer.classList.toggle('expand');
    const content = document.querySelector('.contentcontainer');
    if (footer.classList.contains('expand')) {
        content.style.height = 'calc(100vh - 350px)';
        content.style.transition = 'height 0.5s ease';
    } else {
        content.style.height = 'calc(100vh - 200px)';
        content.style.transition = 'height 0.5s ease';
    }
}


let DARK_MODE = false
let NORMAL_MODE = false

//Function for setting favorite
const setFavorite = (id) => {
    console.log(id)
    const star = document.querySelector(`.${id}`);
    if (star.classList.contains('unchecked_star')) {
        star.classList.remove('unchecked_star');
        star.classList.add('checked_star');
    } else {
        star.classList.remove('checked_star');
        star.classList.add('unchecked_star');
    }
}

const collapseMenu = () => {
    const body = document.querySelector('.seo_wallet_extension_container');
    body.classList.add('collapse');
}

const expandMenu = () => {
    const body = document.querySelector('.seo_wallet_extension_container');
    body.classList.remove('collapse');
}

const toggleDarkTheme = () => {
    DARK_MODE = !DARK_MODE
    if (DARK_MODE) {
        document.documentElement.setAttribute('data-theme', 'dark');
        const el = document.getElementById('toggleDarkTheme')
        el.style.opacity = '0'
        el.style.transition = 'opacity 0.15s ease-in-out'
        setTimeout(() => {
            document.getElementById('toggleDarkTheme').src = 'svg/lightmode.svg'
            el.style.opacity = '0.6'
            el.style.transition = 'opacity 0.5s ease-in-out'
        }, 150)
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        const el = document.getElementById('toggleDarkTheme')
        el.style.opacity = '0'
        el.style.transition = 'opacity 0.15s ease-in-out'
        setTimeout(() => {
            document.getElementById('toggleDarkTheme').src = 'svg/darkmode.svg'
            el.style.opacity = '0.6'
            el.style.transition = 'opacity 0.5s ease-in-out'
        }, 150)
    }
}

const toggleSilentMode = () => {
    if (NORMAL_MODE) {
        const slider = document.querySelector('.contentcontainer');
        slider.style.transform = 'translateX(0)';
        slider.style.transition = 'transform 0.5s ease-in-out';
        NORMAL_MODE = false;
    }
    else {
        const slider = document.querySelector('.contentcontainer');
        slider.style.transform = 'translateX(-411px)';
        slider.style.transition = 'transform 0.5s ease-in-out';
        NORMAL_MODE = true;
    }
}

const populateMenu = () => {
    const items = [
        {
            name: 'Alt Text Tester',
            description: 'Integer sed molis maecenas',
            image: 'svg/ext_logo1.svg'
        },
        {
            name: 'Character and Word Counter',
            description: 'Integer sed molis maecenas',
            image: 'svg/ext_logo2.svg'
        },
        {
            name: 'Page Audit',
            description: 'Integer sed molis maecenas',
            image: 'svg/ext_logo3.svg'
        },
        {
            name: 'Instant Position Checker',
            description: 'Integer sed molis maecenas',
            image: 'svg/ext_logo4.svg'
        },
        {
            name: 'Link Checker',
            description: 'Integer sed molis maecenas',
            image: 'svg/ext_logo5.svg'
        },
        {
            name: 'Heading Optimization',
            description: 'Integer sed molis maecenas',
            image: 'svg/ext_logo6.svg'
        },
    ]
    const menu = document.querySelector('.tabs');
    const html = items.map((item, index) => {
        return `
        <div class="tab">
        <div class="avatar">
            <img src="${item.image}" alt="">
        </div>
        <div class="text">
            <p class="title">${item.name}</p>
            <p class="description">${item.description}</p>
        </div>
        <div class="icons">
            <svg class="unchecked_star star_icon_${index} star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.4386 17.0176L9 14.2983L13.5614 17.0176C13.7173 17.115 13.883 17.1587 14.0585 17.1486C14.2339 17.1392 14.3899 17.0858 14.5263 16.9883C14.6628 16.8909 14.77 16.7595 14.848 16.5942C14.9259 16.4281 14.9357 16.2476 14.8772 16.0527L13.6784 10.9065L17.6842 7.42692C17.8402 7.29047 17.9376 7.13453 17.9766 6.95909C18.0156 6.78365 18.0058 6.61796 17.9474 6.46201C17.8889 6.30607 17.7965 6.17429 17.6702 6.06669C17.5431 5.95987 17.3821 5.89671 17.1871 5.87722L11.8947 5.40938L9.81871 0.526339C9.74074 0.3509 9.62885 0.219126 9.48304 0.131017C9.33645 0.0436876 9.17544 2.28882e-05 9 2.28882e-05C8.82456 2.28882e-05 8.66394 0.0436876 8.51813 0.131017C8.37154 0.219126 8.25926 0.3509 8.18129 0.526339L6.10526 5.40938L0.812866 5.87722C0.617934 5.89671 0.45731 5.95987 0.330994 6.06669C0.203899 6.17429 0.111111 6.30607 0.0526317 6.46201C-0.00584788 6.61796 -0.0155946 6.78365 0.0233918 6.95909C0.0623781 7.13453 0.159844 7.29047 0.315789 7.42692L4.32164 10.9065L3.12281 16.0527C3.06433 16.2476 3.07407 16.4281 3.15205 16.5942C3.23002 16.7595 3.33723 16.8909 3.47368 16.9883C3.61014 17.0858 3.76608 17.1392 3.94152 17.1486C4.11696 17.1587 4.28265 17.115 4.4386 17.0176Z"></path>
            </svg>


            
            <label class="switch" for="${item.name.toLowerCase().split(' ').join('_')}">
                <input type="checkbox" id="${item.name.toLowerCase().split(' ').join('_')}">
                <div class="slider round"></div>
            </label>
        </div>
    </div>
        `
    }).join('');
    menu.innerHTML = html;

    //Reges for spacec

}

const init = () => {
    document.getElementById('expandFooter').addEventListener('click', expandFooter);
    document.getElementById('toggleDarkTheme').addEventListener('click', toggleDarkTheme);
    document.getElementById('silent_mode').addEventListener('change', toggleSilentMode);
    document.getElementById('collapseMenu').addEventListener('click', collapseMenu);
    document.getElementById('expandMenu').addEventListener('click', expandMenu);
    populateMenu()
    const stars = [...document.getElementsByClassName('star')]
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const starClassId = [...star.classList].filter(item => item.includes('star_icon_'))[0]
            setFavorite(starClassId)
        })
    })
}

if (document.readyState !== 'loading') {
    init()
} else {
    init()
}


