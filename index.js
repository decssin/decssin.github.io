(function noscriptCheck() {
    document.body.style.overflow = 'visible';
    document.body.style.pointerEvents = 'auto';
})();

(function ieCheck() {
    if (document['documentMode']) {
        document.body.innerHTML = "<div id='internetexplorer' class='display-flex'><span>My blog no longer supports this web browser. <a href='microsoft-edge:https://jiwon.blog'>Click here to launch the site in the MS Edge browser</a></span></div>";
    }
})();

(function themeChange() {
    if (localStorage.getItem('theme') === 'night-theme') {
        document.body.id = 'night-theme';
    }
})();

function toTheTop() {
    window.scrollTo({top:0,behavior:'smooth'});
}

function goHome() {
    this.event.stopPropagation();
    location.href = "https://jiwon.blog";
}

function toggleMenu() {
    this.event.stopPropagation();

    let open_menu = document.getElementsByClassName('open-menu')[0];
    let open_menu_color = window.getComputedStyle(open_menu).getPropertyValue('opacity');

    if (open_menu_color === '1') {
        open_menu.style.opacity = '0';
        open_menu.style.visibility = 'hidden';
        document.body.style.overflow = 'visible';
    } else {
        open_menu.style.opacity = '1';
        open_menu.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    }
}

function dayAndNight() {
    let theme = localStorage.getItem('theme');

    if (theme === 'night-theme') {
        localStorage.clear();
        document.body.id = '';
    } else {
        localStorage.setItem('theme', 'night-theme');
        document.body.id = 'night-theme';
    }
}

function createPostDOM(idx) {
    let li 			= document.createElement('li');
    let title 		= document.createElement('a');
    let content 	= document.createElement('div');
    let datetime 	= document.createElement('div');

    title.setAttribute('class', 'title');
    title.setAttribute('href', posts[idx]['link']);
    title.innerHTML = posts[idx]['title'];

    content.setAttribute('class', 'content');
    content.innerHTML = posts[idx]['description'];

    datetime.setAttribute('class', 'datetime');
    datetime.innerHTML = posts[idx]['pubDate'];

    li.appendChild(title);
    li.appendChild(content);
    li.appendChild(datetime);

    document.getElementById('post-list').getElementsByTagName('ul')[0].appendChild(li);
}

function toggleSearchbar() {
    let search_form     = document.getElementById('header').getElementsByClassName('search-form')[0];
    let search_input    = document.getElementById('header').getElementsByClassName('search-input')[0];
    let header_color    = window.getComputedStyle(document.getElementById('header')).getPropertyValue('background-color');

    if (parseInt(search_form.style.width) === 0) {
        search_form.style.width         = 'calc(100% - 45px)';
        search_form.style.background    = header_color;
        search_input.style.border       = '1px solid lightgray';

        search_input.focus();
    } else {
        search_form.style.width         = '0';
        search_form.style.background    = 'transparent';
        search_input.style.borderColor  = 'transparent';

        search_input.value = '';
        document.getElementById('post-list').getElementsByTagName('ul')[0].innerHTML = '';

        for (let idx = 0; idx < 5; idx++) {
            createPostDOM(idx);
        }

        document.getElementById('pagination').style.display = 'block';
    }

    this.event.stopPropagation();
}

function searchPosts(_this) {
    document.getElementById('pagination').style.display = 'none';
    document.getElementById('post-list').getElementsByTagName('ul')[0].innerHTML = '';

    if (_this.value === '') {
        return;
    }

    for (let idx = 0; idx < posts.length; idx++) {
        if (posts[idx]['title'].toLowerCase().indexOf(_this.value.toLowerCase()) > -1) {
            createPostDOM(idx);
        }

        if (idx >= 50) {
            document.getElementById('pagination').style.display = 'block';
            break;
        }
    }
}

function getPosts() {
    if (document.getElementById('rotate-wrap')) {
        // Show rotate animation
        if (document.getElementById('rotate-wrap').style.display === 'none' && parseInt(document.getElementById('rotate-wrap').style.opacity) === 0) {
            document.getElementById('rotate-wrap').style.display = 'block';
            setTimeout(function() {
                document.getElementById('rotate-wrap').style.opacity = '1';
            }, 100);
        }

        // Hide rotate animation & posts data processing
        setTimeout(function() {
            // Hide rotate animation
            document.getElementById('rotate-wrap').style.opacity = '0';
            setTimeout(function() {
                document.getElementById('rotate-wrap').style.display = 'none';
            }, 200);

            // Get page number
            let page = parseInt(document.getElementById('pagination').getAttribute('data-page'));

            // start idx (+5)
            let start_idx = (page === 1) ? 5 : document.getElementById('post-list').getElementsByTagName('li').length;

            // end idx (+5)
            let end_idx = ((page * 5 + 5) > posts.length) ? posts.length : page * 5 + 5;

            // Limit 10 page
            if (page >= 10) {
                alert('더 이상 불러올 수 없습니다.');
                return;
            }

            // Get all posts
            if (start_idx >= end_idx) {
                alert('모든 포스트를 불러왔습니다.');
                return;
            }

            for (let idx = start_idx; idx < end_idx; idx++) {
                createPostDOM(idx);
            }

            // Add 1 page
            document.getElementById('pagination').setAttribute('data-page', (page + 1).toString());
        }, 700);
    }
}