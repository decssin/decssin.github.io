let posts = 
[
    {
        "title": "LAMP 및 SSL 기본 설정",
        "link": "./posts/7",
        "description": "낮은 사양의 리눅스 사용 시, 메모리가 부족한 경우, 작업 중인 일부 내용을 디스크로 스왑(Swap)하게 됩니다. 스왑 용도로 사용할 파일을 swapfile 이라는 이름으로 생성합니다. 아래 명령어는 2GB의 용량으로 생성합니다. 재부팅 이후에도 계속 사용하려면 아래 내용을 등록합니다. 파일 하단에 아래 내용을 추가합니다.",
        "pubDate": "2021. 01. 20"
    },
    {
        "title": "RESTful API 기본 개념",
        "link": "./posts/6",
        "description": "RESTful API는 URI를 기반으로 리소스를 처리하는 방법을 제시하는 설계 방법론입니다. REST(Representational State Transfer)는 단어에서 의미하는 것과 같이 추상적이거나 모호하지 않고, 명확하게 상태를 교환하는 아키텍처의 한 형식입니다. REST 아키텍처라는 용어를 정의한 로이 필딩(Roy Fielding)에 따르면 다음의 제한 조건을 만족해야만 온전한 REST 아키텍처를 구현했다고 할 수 있습니다.",
        "pubDate": "2021. 01. 20"
    },
    {
        "title": "Docker 설치 및 실행",
        "link": "./posts/5",
        "description": "도커(Docker)는 버추얼 박스(Virtual Box)와 사용자 측면에서 비슷하면서, 소프트웨어 측면에서 다른 오픈 소스 프로젝트입니다. 두 소프트웨어가 이미지를 가상화 공간에 띄워 여러 운영체제를 다룰 수 있게 해준다는 면에서 비슷한 점이 많지만, 가상화 방식에서 차이가 있습니다. 운영체제를 가상화하지 않는 컨테이너 기술인 만큼 가상머신에 비해서 가벼우며, VM을 포함하여 한대의 서버에 여러개의 서비스를 구동하기 좋습니다.",
        "pubDate": "2021. 01. 20"
    },
    {
        "title": "Ubuntu 기본 명령어",
        "link": "./posts/4",
        "description": "우분투(Ubuntu)는 영국 기업 캐노니컬이 개발, 배포하는 컴퓨터 운영 체제입니다. 데비안 리눅스를 기반으로 개발되며, 데비안에 비해 사용 편의성에 초점을 맞춘 리눅스 배포판입니다.우분투는 배포판을 수정하거나 수정한 것을 재배포할 수 있는 자유 소프트웨어로, 지금까지 수많은 변형 배포판이나 공식 지원하지 않는 창 관리자를 데스크톱으로 하는 배포판들이 나왔습니다.",
        "pubDate": "2021. 01. 20"
    },
    {
        "title": "Git 초기 설정 및 실행",
        "link": "./posts/3",
        "description": "깃(Git)은 컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템입니다. 소프트웨어 개발에서 소스 코드 관리에 주로 사용되지만 어떠한 집합의 파일의 변경사항을 지속적으로 추적하기 위해 사용될 수 있습니다. 기하학적 불변 이론을 바탕으로 설계됐고, 분산 버전 관리 시스템으로서 빠른 수행 속도에 중점을 두고 있는 것이 특징이며 데이터 무결성, 분산, 비선형 워크플로를 지원합니다.",
        "pubDate": "2021. 01. 20"
    },
    {
        "title": "Apache 웹 서버 설정",
        "link": "./posts/2",
        "description": "Apache 웹서버에서 오버라이드 설정을 허용했다면, .htaccess 파일을 사용해 웹서버 설정 파일을 오버라이드 할 수 있습니다. Apache 웹서버 설정에는 다양한 옵션을 변경할 수 있도록 제공하고 있습니다. 서버 정보를 표시하거나, https 접속을 위한 설정을 추가하거나 특정 user-agent의 접근을 차단하는 등의 옵션이 있습니다.",
        "pubDate": "2021. 01. 20"
    },
    {
        "title": "LIPSUM",
        "link": "./posts/1",
        "description": "튼튼하며, 이상의 인생을 약동하다. 끓는 그들의 인도하겠다는 청춘이 있는 있는 창공에 용기가 청춘에서만 약동하다. 황금시대를 넣는 보이는 이상의 그것은 철환하였는가? 목숨을 자신과 그들은 못하다 불어 눈에 청춘의 쓸쓸하랴? 미묘한 황금시대를 반짝이는 힘있다. 피가 새 전인 아름다우냐? 간에 살 끓는 얼음에 눈에 소금이라 뼈 아름다우냐? 설산에서 창공에 풀밭에 없으면 불러 전인 것이다.",
        "pubDate": "2021. 01. 20"
    }
];

(function immediatelyInvoked() {
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
    // create-header
    let header          = document.createElement('div');
    header.id           = 'header';
    header.classList    = 'width-100 position-fixed top-0 left-0 cursor-pointer';
    header.setAttribute('onclick', 'toTheTop()');
    header.innerHTML    = 
    '<div class="header-wrap display-flex width-100 height-100 position-relative margin-0-auto">'
        + '<div class="menu-button display-flex cursor-pointer" onclick="toggleMenu()">'
            + '<div class="line width-100"></div>'
            + '<div class="line width-100"></div>'
            + '<div class="line width-100"></div>'
        + '</div>'
        + '<div class="title cursor-pointer" onclick="goHome()">@jiwon.blog</div>'
        + '<div class="search-form display-flex position-absolute top-0" style="width:0;" onclick="event.stopPropagation()">'
            + '<input type="text" class="search-input position-relative" title="search input" onkeyup="searchPosts(this)">'
        + '</div>'
        + '<div class="search-posts position-relative" onclick="toggleSearchbar()">'
            + '<div class="magnifier-circle position-absolute top-0 left-0"></div>'
            + '<div class="magnifier-grip position-absolute bottom-0"></div>'
        + '</div>'
    + '</div>';
    document.getElementById('wrap').prepend(header);
    // create-footer
    let footer          = document.createElement('div');
    footer.id           = 'footer';
    footer.classList    = 'display-flex position-absolute bottom-0 left-0';
    footer.innerHTML    = '<div class="rights">&copy; 2021 <a href="javascript:void(0)" title="Jiwon Min">Jiwon Min</a>. All rights reserved.</div><div class="design">Designed by <a href="javascript:void(0)" title="Jiwon Min">Jiwon Min</a>.</div>';
    document.getElementById('wrap').append(footer);
    // post-list
    if (document.getElementById('post-list')) {
        document.getElementById('post-list').children[1].children[0].children[0].href = posts[0]['link'];
        document.getElementById('post-list').children[1].children[0].children[0].innerText = posts[0]['title'];
        document.getElementById('post-list').children[1].children[0].children[1].innerText = posts[0]['description'];
        document.getElementById('post-list').children[1].children[0].children[2].innerText = posts[0]['pubDate'];
        document.getElementById('post-list').children[1].children[1].children[0].href = posts[1]['link'];
        document.getElementById('post-list').children[1].children[1].children[0].innerText = posts[1]['title'];
        document.getElementById('post-list').children[1].children[1].children[1].innerText = posts[1]['description'];
        document.getElementById('post-list').children[1].children[1].children[2].innerText = posts[1]['pubDate'];
        document.getElementById('post-list').children[1].children[2].children[0].href = posts[2]['link'];
        document.getElementById('post-list').children[1].children[2].children[0].innerText = posts[2]['title'];
        document.getElementById('post-list').children[1].children[2].children[1].innerText = posts[2]['description'];
        document.getElementById('post-list').children[1].children[2].children[2].innerText = posts[2]['pubDate'];
        document.getElementById('post-list').children[1].children[3].children[0].href = posts[3]['link'];
        document.getElementById('post-list').children[1].children[3].children[0].innerText = posts[3]['title'];
        document.getElementById('post-list').children[1].children[3].children[1].innerText = posts[3]['description'];
        document.getElementById('post-list').children[1].children[3].children[2].innerText = posts[3]['pubDate'];
        document.getElementById('post-list').children[1].children[4].children[0].href = posts[4]['link'];
        document.getElementById('post-list').children[1].children[4].children[0].innerText = posts[4]['title'];
        document.getElementById('post-list').children[1].children[4].children[1].innerText = posts[4]['description'];
        document.getElementById('post-list').children[1].children[4].children[2].innerText = posts[4]['pubDate'];
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

    if (!document.getElementsByClassName('open-menu')[0]) {
        let temp        = document.createElement('div');
        temp.classList  = 'open-menu display-flex position-fixed width-100 height-100 top-0 left-0';
        temp.style      = 'opacity:0;visibility:hidden;';
        temp.innerHTML  = 
                '<ul class="menu-list">'
                    + '<li><a class="cursor-pointer" href="https://jiwon.blog">BLOG</a></li>'
                    + '<li><a class="cursor-pointer" href="">WEB DESIGN</a></li>'
                    + '<li><a class="cursor-pointer" href="">ABOUT ME</a></li>'
                    + '<li><br/></li>'
                    + '<li><span class="cursor-pointer">KOR/ENG</span></li>'
                    + '<li><span class="cursor-pointer" onclick="dayAndNight()">DAY/NIGHT</span></li>'
                + '</ul>';
        document.getElementById('wrap').prepend(temp);
    }

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

    if (document.getElementById('post-list')) {
        document.getElementById('post-list').getElementsByTagName('ul')[0].appendChild(li);
    } else if (document.getElementById('content')) {
        let post_list = document.createElement('div');
        let ul = document.createElement('ul');

        post_list.id = 'post-list';
        ul.appendChild(li);
        post_list.appendChild(ul);
    
        document.getElementById('content').style.display = 'none';
        document.getElementById('wrap').appendChild(post_list);
    }

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
        search_input.value              = '';

        if (document.getElementById('content')) {
            document.getElementById('content').style.display = 'block';
            if (document.getElementById('post-list')) {
                document.getElementById('post-list').remove();
            }
        } else if (document.getElementById('post-list')) {
            document.getElementById('post-list').getElementsByTagName('ul')[0].innerHTML = '';

            for (let idx = 0; idx < 5; idx++) {
                createPostDOM(idx);
            }

            document.getElementById('pagination').style.display = 'block';
        }
    }

    this.event.stopPropagation();
}

function searchPosts(_this) {
    if (document.getElementById('pagination')) {
        document.getElementById('pagination').style.display = 'none';
    }
    if (document.getElementById('post-list')) {
        document.getElementById('post-list').getElementsByTagName('ul')[0].innerHTML = '';
    }

    if (_this.value === '') {
        return;
    }

    for (let idx = 0; idx < posts.length; idx++) {
        if (posts[idx]['title'].toLowerCase().indexOf(_this.value.toLowerCase()) > -1) {
            createPostDOM(idx);
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

            let page = parseInt(document.getElementById('pagination').getAttribute('data-page'));
            let start_idx = (page === 1) ? 5 : document.getElementById('post-list').getElementsByTagName('li').length;
            let end_idx = ((page * 5 + 5) > posts.length) ? posts.length : page * 5 + 5;

            if (page >= 10) {
                alert('더 이상 불러올 수 없습니다.');
                return;
            }

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