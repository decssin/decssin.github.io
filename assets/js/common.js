// noscript-check
document.body.style.overflow = 'visible';
document.body.style.pointerEvents = 'auto';
// ie-check
if (document['documentMode']) {
    document.body.innerHTML = "<div id='internetexplorer' class='display-flex'><span>My blog no longer supports this web browser. <a href='microsoft-edge:https://jiwon.blog'>Click here to launch the site in the MS Edge browser</a></span></div>";
}
// theme-change
if (localStorage.getItem('theme') === 'night-theme') {
    document.body.id = 'night-theme';
}

function toggleMenu() {
    this.event.stopPropagation();

    let open_menu           = document.getElementsByClassName('open-menu')[0];
    let open_menu_opacity   = window.getComputedStyle(open_menu).getPropertyValue('opacity');

    if (open_menu_opacity === '1') {
        open_menu.style.opacity         = '0';
        open_menu.style.visibility      = 'hidden';
        document.body.style.overflow    = 'visible';
    } else {
        open_menu.style.opacity         = '1';
        open_menu.style.visibility      = 'visible';
        document.body.style.overflow    = 'hidden';
    }
}

function toggleTheme() {
    let theme = localStorage.getItem('theme');

    if (theme === 'night-theme') {
        localStorage.clear();
        document.body.id = '';
    } else {
        localStorage.setItem('theme', 'night-theme');
        document.body.id = 'night-theme';
    }
}