/* Noscript checked */
document.body.style.overflow = 'visible';
document.body.style.pointerEvents = 'auto';

/* IE Check */
if (document["documentMode"]) {
    document.body.innerHTML =
        "<div id='is-explorer'>"
            + "<span>DESSIN.DEV no longer supports this web browser. "
                + "<a href='microsoft-edge:https://dessin.dev'>Click here to launch the site in the MS Edge browser</a>"
            + "</span>"
        + "</div>";
}

/* json data for search */
let articles = [];
(function() {
    // IE check
    if (document["documentMode"]) {
        return;
    }

    // Index page check
    if (location.pathname !== '/' && location.hostname !== 'localhost') {
        return;
    }

    // Local check
    if (location.protocol === 'file:') {
        document.getElementById('rotate-wrap').style.display = 'none';
        document.getElementById('rotate-wrap').style.opacity = '0';
        return;
    }

    let request = new XMLHttpRequest();
    request.open("GET", "index.json", true);
    request.responseType = 'json';
    request.send();

    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {

            // AJAX Response
            articles = this.response['rss']['channel']['item'];
        }
    };
})();

/* Header Title onClick */
function scrollToHeader() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Go Homepage */
function goHomepage() {
    this.event.stopPropagation();
    location.href = "https://dessin.dev";
}

/* Open menu */
function openMenu() {
    this.event.stopPropagation();
}

/* Common function for create article DOM */
function createArticleDOM(idx) {
    let li 			= document.createElement('li');
    let title 		= document.createElement('a');
    let content 	= document.createElement('div');
    let datetime 	= document.createElement('div');

    title.setAttribute('class', 'title');
    title.setAttribute('href', articles[idx]['link']);
    title.innerHTML = articles[idx]['title'];

    content.setAttribute('class', 'content');
    content.innerHTML = articles[idx]['description'];

    datetime.setAttribute('class', 'datetime');
    datetime.innerHTML = articles[idx]['pubDate'];

    li.appendChild(title);
    li.appendChild(content);
    li.appendChild(datetime);

    document.getElementById('article').getElementsByTagName('ul')[0].appendChild(li);
}

/* Toggle searchbar */
function toggleSearchbar() {
    let search_form = document.getElementById('header').getElementsByClassName('search-form')[0];
    if (parseInt(search_form.style.width) === 0) {
        search_form.style.width = 'calc(100% - 50px)';
        search_form.style.background = 'rgb(39 40 43)';

        document.getElementById('header').getElementsByClassName('search-input')[0].focus();
    } else {
        search_form.style.width = '0';
        search_form.style.background = 'transparent';

        document.getElementById('header').getElementsByClassName('search-input')[0].value = '';
        document.getElementById('article').getElementsByTagName('ul')[0].innerHTML = '';
        for (let idx = 0; idx < 5; idx++) {
            // Initialization DOM create
            createArticleDOM(idx);
        }

        document.getElementById('pagination').style.display = 'block';
    }

    this.event.stopPropagation();
}

/* Search articles */
function searchArticles(_this) {
    document.getElementById('pagination').style.display = 'none';
    document.getElementById('article').getElementsByTagName('ul')[0].innerHTML = '';
    for (let idx = 0; idx < articles.length; idx++) {
        if (articles[idx]['title'].indexOf(_this.value) > -1) {
            createArticleDOM(idx);
        }
    }
}

/* Get Articles By AJAX */
function getArticles() {
    if (document.getElementById('rotate-wrap')) {
        // Show ration animation
        if (document.getElementById('rotate-wrap').style.display === 'none' && parseInt(document.getElementById('rotate-wrap').style.opacity) === 0) {
            document.getElementById('rotate-wrap').style.display = 'block';
            setTimeout(function() {
                document.getElementById('rotate-wrap').style.opacity = '1';
            }, 100);
        }

        // Hide ration animation & Articles data processing
        setTimeout(function() {
            // Hide rotation animation
            document.getElementById('rotate-wrap').style.opacity = '0';
            setTimeout(function() {
                document.getElementById('rotate-wrap').style.display = 'none';
            }, 200);

            // Get page number
            let page = parseInt(document.getElementById('pagination').getAttribute('data-page'));

            // for start idx
            let start_idx = (page === 1) ? 0 : document.getElementById('article').getElementsByTagName('li').length;

            // for end idx
            let end_idx = (page * 5 > articles.length) ? articles.length : page * 5;

            // Limit 10 page
            if (page >= 10) {
                alert('더 이상 불러올 수 없습니다.');
                return;
            }

            // Get all articles
            if (start_idx >= end_idx) {
                alert('모든 포스트를 불러왔습니다.');
                return;
            }

            // document.getElementById('article').getElementsByTagName('ul')[0].innerHTML = '';
            for (let idx = start_idx; idx < end_idx; idx++) {
                if (idx < 5) {
                    // Initialization DOM matching
                    document.getElementById('article').getElementsByTagName('li')[idx].getElementsByClassName('title')[0].setAttribute('href', articles[idx]['link']);
                    document.getElementById('article').getElementsByTagName('li')[idx].getElementsByClassName('title')[0].innerHTML = articles[idx]['title'];
                    document.getElementById('article').getElementsByTagName('li')[idx].getElementsByClassName('content')[0].innerHTML = articles[idx]['description'];
                    document.getElementById('article').getElementsByTagName('li')[idx].getElementsByClassName('datetime')[0].innerHTML = articles[idx]['pubDate'];
                } else {
                    // 5+ DOM Matching
                    createArticleDOM(idx);
                }
            }

            // Add 1 page
            document.getElementById('pagination').setAttribute('data-page', (page + 1).toString());
        }, 700);
    }
}