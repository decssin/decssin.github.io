/* IE Check */
if (document.documentMode) {
    document.body.innerHTML = 
        "<div id='noexplorer'>"
            + "<span>DESSIN.DEV no longer supports this web browser. "
                + "<a href='microsoft-edge:https://dessin.dev'>Click here to launch the site in the MS Edge browser</a>"
            + "</span>"
        + "</div>";
}

/* Header Title onClick */
function scollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Go Homepage */
function goHomepage() {
    window.event.stopPropagation();
    location.href="https://dessin.dev";
}

/* Open menu */
function openMenu() {
    window.event.stopPropagation();
}

/* Get Articles By AJAX */
function getArticles() {
    if (location.protocol === 'file:') {
        document.getElementById('rotate-wrap').style.display = 'none';
        document.getElementById('rotate-wrap').style.opacity = '0';
        return;
    }

    // Show ration animation
    if (document.getElementById('rotate-wrap').style.display === 'none' && parseInt(document.getElementById('rotate-wrap').style.opacity) === 0) {
        document.getElementById('rotate-wrap').style.display = 'block';
        setTimeout(function() {
            document.getElementById('rotate-wrap').style.opacity = '1';
        }, 100);
    }

    // Hide ration animation & Ajax processing
    setTimeout(function() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "index.json", true);
        xhttp.responseType = 'json';
        xhttp.send();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Hide rotaion animation
                document.getElementById('rotate-wrap').style.opacity = '0';
                setTimeout(function() {
                    document.getElementById('rotate-wrap').style.display = 'none';
                }, 200);

                // AJAX Response
                var resp = this.response;

                // Get page number
                var page = parseInt(document.getElementById('pagination').getAttribute('data-page'));

                // for start idx
                var start_idx = (page === 1) ? 0 : parseInt(document.getElementById('article').getElementsByTagName('li').length);

                // for end idx
                var end_idx = (page * 5 > resp.rss.channel.item.length) ? resp.rss.channel.item.length : page * 5;

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
                for (idx = start_idx; idx < end_idx; idx++) {
                    if (idx < 5) {
                        // Initialization DOM matching
                        document.getElementById('article').getElementsByTagName('li')[idx].getElementsByClassName('title')[0].setAttribute('href', resp.rss.channel.item[idx].link);
                        document.getElementById('article').getElementsByTagName('li')[idx].getElementsByClassName('title')[0].innerHTML = resp.rss.channel.item[idx].title;
                        document.getElementById('article').getElementsByTagName('li')[idx].getElementsByClassName('content')[0].innerHTML = resp.rss.channel.item[idx].description;
                        document.getElementById('article').getElementsByTagName('li')[idx].getElementsByClassName('datetime')[0].innerHTML = resp.rss.channel.item[idx].pubDate;
                    } else {
                        // 5+ DOM Matching
                        var li 			= document.createElement('li');
                        var title 		= document.createElement('a');
                        var content 	= document.createElement('div');
                        var datetime 	= document.createElement('div');

                        title.setAttribute('class', 'title');
                        title.setAttribute('href', resp.rss.channel.item[idx].link);
                        title.innerHTML = resp.rss.channel.item[idx].title;

                        content.setAttribute('class', 'content');
                        content.innerHTML = resp.rss.channel.item[idx].description;

                        datetime.setAttribute('class', 'datetime');
                        datetime.innerHTML = resp.rss.channel.item[idx].pubDate;

                        li.appendChild(title);
                        li.appendChild(content);
                        li.appendChild(datetime);

                        document.getElementById('article').getElementsByTagName('ul')[0].appendChild(li);
                    }
                }

                // Add 1 page
                document.getElementById('pagination').setAttribute('data-page', page + 1);
            }
        };
    }, 700);
}