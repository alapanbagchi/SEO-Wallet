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
    const star = document.querySelector(`.${id}`);
    console.log(id)
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
    body.classList.toggle('collapse');
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



if (document.readyState !== 'loading') {
    document.getElementById('expandFooter').addEventListener('click', expandFooter);
    document.getElementById('toggleDarkTheme').addEventListener('click', toggleDarkTheme);
    document.getElementById('silent_mode').addEventListener('change', toggleSilentMode);
    document.getElementById('collapseMenu').addEventListener('click', collapseMenu);
} else {
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('expandFooter').addEventListener('click', expandFooter);
        document.getElementById('toggleDarkTheme').addEventListener('click', toggleDarkTheme);
        document.getElementById('silent_mode').addEventListener('change', toggleSilentMode);
        document.getElementById('collapseMenu').addEventListener('click', collapseMenu);
    });
}


