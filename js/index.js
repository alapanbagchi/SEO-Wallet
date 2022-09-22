//Get items from local storage and populate the menu else store a static array
let items = JSON.parse(localStorage.getItem('items')) || [
    {
        name: 'Alt Text Tester',
        description: 'Integer sed molis maecenas',
        image: 'svg/ext_logo1.svg',
        enabled: false,
        favorite: false,
    },
    {
        name: 'Character and Word Counter',
        description: 'Integer sed molis maecenas',
        image: 'svg/ext_logo2.svg',
        enabled: false,
        favorite: false
    },
    {
        name: 'Page Audit',
        description: 'Integer sed molis maecenas',
        image: 'svg/ext_logo3.svg',
        enabled: false,
        favorite: false
    },
    {
        name: 'Instant Position Checker',
        description: 'Integer sed molis maecenas',
        image: 'svg/ext_logo4.svg',
        enabled: false,
        favorite: false
    },
    {
        name: 'Link Checker',
        description: 'Integer sed molis maecenas',
        image: 'svg/ext_logo5.svg',
        enabled: false,
        favorite: false
    },
    {
        name: 'Heading Optimization',
        description: 'Integer sed molis maecenas',
        image: 'svg/ext_logo6.svg',
        enabled: false,
        favorite: false
    },
]


let DARK_MODE = localStorage.getItem('darkMode') === 'true' ? true : false;
let SILENT_MODE = localStorage.getItem('silentMode') === 'true' ? true : false;



//Function to expand the footer on click
const expandFooter = () => {
    const FOOTER_EXPANDED_HEIGHT = '350px'
    const FOOTER_CONTRACTED_HEIGHT = '200px'

    const footer = document.querySelector('.menufooter');
    const content = document.querySelector('.contentcontainer');
    if (footer.classList.contains('expand')) {
        footer.classList.remove('expand');
        content.style.height = `calc(100vh - ${FOOTER_CONTRACTED_HEIGHT})`;
        content.style.transition = 'height 0.5s ease';
    } else {
        footer.classList.add('expand');
        content.style.height = `calc(100vh - ${FOOTER_EXPANDED_HEIGHT})`;
        content.style.transition = 'height 0.5s ease';
    }
}

//Function for setting favorite
const setFavorite = (id) => {
    const star = document.querySelector(`.${id}`);
    if (star.classList.contains('unchecked_star')) {
        star.classList.remove('unchecked_star');
        star.classList.add('checked_star');
        const itemIndex = id.split('_')[id.split('_').length - 1]
        items[itemIndex].favorite = true
        populateFavorites()
    } else {
        star.classList.remove('checked_star');
        star.classList.add('unchecked_star');
        const itemIndex = id.split('_')[id.split('_').length - 1]
        items[itemIndex].favorite = false
        populateFavorites()
    }
    //Save items to local storage
    localStorage.setItem('items', JSON.stringify(items))
}

//Function to collapse the expanded menu
const collapseMenu = () => {
    const body = document.querySelector('.seo_wallet_extension_container');
    body.classList.add('collapse');
    //A timeout is added to prevent triggering the animation while the menu is being collapsed
    setTimeout(() => {
        body.classList.add('showmenu');
    }, 300)
    sendMessages({ message: "COLLAPSE_MENU", data: {} })
}
//Function to expand the menu
const expandMenu = () => {
    const body = document.querySelector('.seo_wallet_extension_container');
    body.classList.remove('collapse');
    body.classList.remove('showmenu');
    sendMessages({ message: "EXPAND_MENU", data: {} })
}

//Function to hide or show the collapsed menu
const toggleCollapsedMenuDisplay = () => {
    const body = document.querySelector('.seo_wallet_extension_container');
    if (body.classList.contains('showmenu')) {
        body.classList.remove('showmenu');
        body.classList.add('hidemenu');
        sendMessages({ message: "COLLAPSED_MENU_HIDE", data: {} })
    } else {
        body.classList.add('showmenu');
        body.classList.remove('hidemenu');
        sendMessages({ message: "COLLAPSED_MENU_SHOW", data: {} })
    }
}

const toggleDarkTheme = () => {
    if (DARK_MODE) {
        document.documentElement.setAttribute('data-theme', 'dark');
        const el = document.getElementById('toggleDarkTheme')
        el.style.opacity = '0'
        el.style.transition = 'opacity 0.15s ease-in-out'
        setTimeout(() => {
            document.getElementById('toggleDarkTheme').src = 'svg/lightmode.svg'
            el.style.opacity = '1'
            el.style.transition = 'opacity 0.5s ease-in-out'
        }, 150)
        localStorage.setItem('darkMode', 'true')
        DARK_MODE = false
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        const el = document.getElementById('toggleDarkTheme')
        el.style.opacity = '0'
        el.style.transition = 'opacity 0.15s ease-in-out'
        setTimeout(() => {
            document.getElementById('toggleDarkTheme').src = 'svg/darkmode.svg'
            el.style.opacity = '1'
            el.style.transition = 'opacity 0.5s ease-in-out'
        }, 150)
        localStorage.setItem('darkMode', 'false')
        DARK_MODE = true
    }
}

const toggleSilentMode = () => {
    if (SILENT_MODE) {
        const slider = document.querySelector('.contentcontainer');
        slider.style.transform = 'translateX(-411px)';
        slider.style.transition = 'transform 0.5s ease-in-out';
        toggleExtension(false)
        localStorage.setItem('silentMode', 'true')
        SILENT_MODE = false
        document.getElementById('mode').checked = false
    }
    else {
        const slider = document.querySelector('.contentcontainer');
        slider.style.transform = 'translateX(0)';
        slider.style.transition = 'transform 0.5s ease-in-out';
        toggleExtension(true)
        localStorage.setItem('silentMode', 'false')
        SILENT_MODE = true
        document.getElementById('mode').checked = true
    }
}

const populateMenu = () => {

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
            <svg class="${item.favorite ? 'checked_star' : 'unchecked_star'} star_icon_${index} star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.4386 17.0176L9 14.2983L13.5614 17.0176C13.7173 17.115 13.883 17.1587 14.0585 17.1486C14.2339 17.1392 14.3899 17.0858 14.5263 16.9883C14.6628 16.8909 14.77 16.7595 14.848 16.5942C14.9259 16.4281 14.9357 16.2476 14.8772 16.0527L13.6784 10.9065L17.6842 7.42692C17.8402 7.29047 17.9376 7.13453 17.9766 6.95909C18.0156 6.78365 18.0058 6.61796 17.9474 6.46201C17.8889 6.30607 17.7965 6.17429 17.6702 6.06669C17.5431 5.95987 17.3821 5.89671 17.1871 5.87722L11.8947 5.40938L9.81871 0.526339C9.74074 0.3509 9.62885 0.219126 9.48304 0.131017C9.33645 0.0436876 9.17544 2.28882e-05 9 2.28882e-05C8.82456 2.28882e-05 8.66394 0.0436876 8.51813 0.131017C8.37154 0.219126 8.25926 0.3509 8.18129 0.526339L6.10526 5.40938L0.812866 5.87722C0.617934 5.89671 0.45731 5.95987 0.330994 6.06669C0.203899 6.17429 0.111111 6.30607 0.0526317 6.46201C-0.00584788 6.61796 -0.0155946 6.78365 0.0233918 6.95909C0.0623781 7.13453 0.159844 7.29047 0.315789 7.42692L4.32164 10.9065L3.12281 16.0527C3.06433 16.2476 3.07407 16.4281 3.15205 16.5942C3.23002 16.7595 3.33723 16.8909 3.47368 16.9883C3.61014 17.0858 3.76608 17.1392 3.94152 17.1486C4.11696 17.1587 4.28265 17.115 4.4386 17.0176Z"></path>
            </svg>


            
            <label class="switch" for="extension_checkbox_${item.name.toLowerCase().split(' ').join('_')}">
                <input type="checkbox" ${item.enabled ? 'checked' : ''} class="extension_checkbox_${item.name.toLowerCase().split(' ').join('_')} extensiontoggle" id="extension_checkbox_${item.name.toLowerCase().split(' ').join('_')}">
                <div class="slider round"></div>
            </label>
        </div>
    </div>
        `
    }).join('');
    menu.innerHTML = html;
}

const populateFavorites = () => {
    const submenu = document.querySelector('.favorites');
    const html = items.map((item, index) => {
        if (item.favorite)
            return `
                <div class="avatar ${item.enabled ? 'online' : 'offline'}">
                    <img  class="inactive" src="${item.image}" alt="">
                </div>
            `
    }).join('');
    submenu.innerHTML = html == '' ? ' ' : html;
}

const closeMenu = () => {
    const body = document.querySelector('.seo_wallet_extension_container');
    body.classList.add('closeMenu');
    sendMessages({ message: "CLOSE_MENU", data: {} })
}

const openMenu = () => {
    const body = document.querySelector('.seo_wallet_extension_container');
    body.classList.remove('closeMenu');
    sendMessages({ message: "OPEN_MENU", data: {} })
}


const enableExtension = (id) => {
    const checkbox = document.getElementById(id);
    const el_id = id.split('_').slice(2).join('_');
    if (checkbox.checked) {
        const index = items.findIndex(item => item.name.toLowerCase().split(' ').join('_') === el_id);
        items[index].enabled = true;
        populateFavorites()
    } else {
        const index = items.findIndex(item => item.name.toLowerCase().split(' ').join('_') === el_id);
        items[index].enabled = false;
        populateFavorites()
    }
    localStorage.setItem('items', JSON.stringify(items));
}

const init = () => {
    document.getElementById('expandFooter').addEventListener('click', expandFooter);
    document.getElementById('toggleDarkTheme').addEventListener('click', toggleDarkTheme);
    document.getElementById('silent_mode').addEventListener('change', toggleSilentMode);
    document.getElementById('collapseMenu').addEventListener('click', collapseMenu);
    document.getElementById('expandMenu').addEventListener('click', expandMenu);
    document.getElementById('closeMenu').addEventListener('click', closeMenu);
    populateMenu()
    populateFavorites()
    toggleDarkTheme()
    toggleSilentMode()
    const stars = [...document.getElementsByClassName('star')]
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const starClassId = [...star.classList].filter(item => item.includes('star_icon_'))[0]
            setFavorite(starClassId)
        })
    })
    const checkboxes = [...document.getElementsByClassName('extensiontoggle')]
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            const checkboxID = [...checkbox.classList].filter(item => item.includes('extension_checkbox_'))[0]
            enableExtension(checkboxID)
        })
    })
}

if (document.readyState !== 'loading') {
    init()
} else {
    document.addEventListener('DOMContentLoaded', function () {
        init()
    });
}


