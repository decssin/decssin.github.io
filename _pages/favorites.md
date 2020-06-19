---
layout: page
title: Favorites
order: 3
image: '/assets/images/pages/favorites.jpg'
---

<style>
    .c-post__image { margin-bottom:0; }
    .neumorphism.n-flex {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: normal;
        justify-items: center;
        flex-flow: row wrap;
    }
    .neumorphism.n-bg {
        width: 100%;
        padding: 150px 0;
        background: rgb(239,240,242);
        background: 
            linear-gradient(
                90deg, rgba(239,240,242,1) 0%, 
                rgba(237,238,242,1) 49%, 
                rgba(236,237,241,1) 100%
        );
    }

    .neumorphism.n-lnk {
        width: 80px;
        height: 80px;
        line-height: 80px;
        
        text-align: center;
        text-decoration: none !important;
        font-size: 13px;
        margin: 0 25px 25px 25px;
        cursor: pointer;
        color: gray;
        outline: none;
        
        -webkit-tap-highlight-color: transparent;
        -webkit-highlight: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        
        border-radius: 50px;
        background: #eeeff3;
        box-shadow: 5px 5px 10px #cacbcf, 
                    -5px -5px 10px #ffffff
    }
    .neumorphism.n-lnk:hover,
    .neumorphism.n-lnk:active,
    .neumorphism.n-lnk:focus {
        color:gray !important;
    }
    .neumorphism.n-lnk:active {
        border-radius: 50px;
        background: linear-gradient(145deg, #d6d7db, #ffffff);
        box-shadow: inset 5px 5px 5px #cacbcf, 
                    inset -5px -5px 5px #ffffff;
    }

    
    .neumorphism.n-tag-box:not(:first-child) {
        margin-top: 85px;
    }
    .neumorphism.n-tag-box {
        width:100%;
        height:95px;
    }
    .neumorphism.n-tag {
        width: 135px;
        height: 45px;
        line-height: 45px;
        
        text-align: center;
        text-decoration: none !important;
        font-size: 13px;
        margin: 0 auto;
        cursor: pointer;
        color: gray;
        outline: none;
        
        -webkit-tap-highlight-color: transparent;
        -webkit-highlight: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        
        border-top-left-radius: 15px;
        border-bottom-right-radius: 15px;
        background: #eeeff3;
        box-shadow: 5px 5px 10px #cacbcf, 
                    -5px -5px 10px #ffffff
    }
    .neumorphism.n-tag:hover,
    .neumorphism.n-tag:active,
    .neumorphism.n-tag:focus {
        color:gray !important;
    }
    .neumorphism.n-tag:active {
        border-top-left-radius: 15px;
        border-bottom-right-radius: 15px;
        background: linear-gradient(145deg, #d6d7db, #ffffff);
        box-shadow: inset 5px 5px 5px #cacbcf, 
                    inset -5px -5px 5px #ffffff;
    }

    @media (max-width: 414px) {
        .neumorphism.n-bg {
            padding: 75px 0;
        }
        .neumorphism.n-lnk {
            width: 75px;
            height: 75px;
            line-height: 75px;
            font-size: 12px;
            margin: 0 15px 30px 15px;
        }
    }
</style>

<div class="neumorphism n-bg n-flex">
    <div class="neumorphism n-tag-box">
        <div class="neumorphism n-tag">Development</div>
    </div>
    <div class="neumorphism n-lnk" onclick="location.href='https://github.com/dnessi'">GitHub</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://codepen.io'">CodePen</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://reddit.com/r/webdev'">Reddit</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://awesome-devblog.now.sh'">DevBlog</div>


    <div class="neumorphism n-tag-box">
        <div class="neumorphism n-tag">Design</div>
    </div>
    <div class="neumorphism n-lnk" onclick="location.href='https://awwwards.com/inspiration/search?text=Web+Design'">Awwwards</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://dribbble.com/shots/recent/web-design'">Dribbble</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://pinterest.co.kr/search/pins/?rs=typed&q=WebDesign'">Pinterest</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://behance.net/search?search=WebDesign'">Behance</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://www.instagram.com/explore/tags/webdesign'">Instagram</div>

    <div class="neumorphism n-tag-box">
        <div class="neumorphism n-tag">Books</div>
    </div>
    <div class="neumorphism n-lnk" onclick="location.href='https://aladin.co.kr/m/mnew.aspx?ViewRowsCount=25&ViewType=Detail&SortOrder=5&page=1&PublishDay=0&BranchType=9&NewType=New&CID=38401&MaxPageIndex=10&VType=0'">eBook</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://aladin.co.kr/m/mnew.aspx?ViewRowsCount=25&ViewType=Detail&SortOrder=5&page=1&PublishDay=84&BranchType=1&NewType=New&CID=437&MaxPageIndex=4&VType=0'">Books</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://ridibooks.com/category/new-releases/2220?order=recent'">Ridi</div>

    <div class="neumorphism n-tag-box">
        <div class="neumorphism n-tag">Jobs</div>
    </div>
    <div class="neumorphism n-lnk" onclick="location.href='https://work.go.kr'">Worknet</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://saramin.co.kr'">Saramin</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://jobkorea.co.kr'">Jobkorea</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://jobplanet.co.kr'">Jobplanet</div>

    <div class="neumorphism n-tag-box">
        <div class="neumorphism n-tag">ETC.</div>
    </div>
    <div class="neumorphism n-lnk" onclick="location.href='https://ssbrws.kr-weathernews.com/mv3/html/main.html'">Weather</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://lookpin.co.kr'">LookPin</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://m.naver.com'">Naver</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://youtube.com'">YouTube</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://clien.net/service'">Clien</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://jisanresort.co.kr/mobile/index.asp'">Jisan</div>
    <div class="neumorphism n-lnk" onclick="location.href='https://ucampus.knou.ac.kr/ekp/app/notice/initASGNotice.do'">KNOU</div>
</div>
