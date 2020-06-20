---
layout: page
title: Favorites
order: 3
image: '/assets/images/pages/favorites.jpg'
---

<style>
    body {
        background: linear-gradient(
            90deg, rgba(239,240,242,1) 0%,
            rgba(237,238,242,1) 49%, 
            rgba(236,237,241,1) 100% 
        );
    }

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
        display: block;
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
        position: relative;
        width:100%;
        height:95px;
    }
    .neumorphism.n-tag {
        position: absolute;
        left: -3%;
        width: 106%;
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
        <div class="neumorphism n-tag">Dev, Design + Books</div>
    </div>
    <a class="neumorphism n-lnk" target="_self" href="https://github.com/dnessi">GitHub</a>
    <a class="neumorphism n-lnk" target="_self" href="https://codepen.io">CodePen</a>
    <a class="neumorphism n-lnk" target="_self" href="https://reddit.com/r/webdev">Reddit</a>
    <a class="neumorphism n-lnk" target="_self" href="https://awesome-devblog.now.sh">DevBlog</a>
    <a class="neumorphism n-lnk" target="_self" href="https://awwwards.com/inspiration/search?text=Web+Design">Awwwards</a>
    <a class="neumorphism n-lnk" target="_self" href="https://dribbble.com/shots/recent/web-design">Dribbble</a>
    <a class="neumorphism n-lnk" target="_self" href="https://pinterest.co.kr/search/pins/?rs=typed&q=WebDesign">Pinterest</a>
    <a class="neumorphism n-lnk" target="_self" href="https://behance.net/search?search=WebDesign">Behance</a>
    <a class="neumorphism n-lnk" target="_self" href="https://www.instagram.com/explore/tags/webdesign">Instagram</a>
    <a class="neumorphism n-lnk" target="_self" href="https://aladin.co.kr/m/mnew.aspx?BranchType=9&NewType=New&CID=38401">eBook</a>
    <a class="neumorphism n-lnk" target="_self" href="https://aladin.co.kr/m/mnew.aspx?BranchType=1&NewType=New&CID=437">Books</a>
    <a class="neumorphism n-lnk" target="_self" href="https://ridibooks.com/category/new-releases/2220?order=recent">Ridi</a>

    <div class="neumorphism n-tag-box">
        <div class="neumorphism n-tag">Jobs</div>
    </div>

    <a class="neumorphism n-lnk" target="_self" href="https://work.go.kr">Worknet</a>
    <a class="neumorphism n-lnk" target="_self" href="https://saramin.co.kr">Saramin</a>
    <a class="neumorphism n-lnk" target="_self" href="https://jobkorea.co.kr">Jobkorea</a>
    <a class="neumorphism n-lnk" target="_self" href="https://jobplanet.co.kr">Jobplanet</a>

    <div class="neumorphism n-tag-box">
        <div class="neumorphism n-tag">ETC.</div>
    </div>
    <a class="neumorphism n-lnk" target="_self" href="https://ssbrws.kr-weathernews.com/mv3/html/main.html">Weather</a>
    <a class="neumorphism n-lnk" target="_self" href="https://lookpin.co.kr">LookPin</a>
    <a class="neumorphism n-lnk" target="_self" href="https://m.naver.com">Naver</a>
    <a class="neumorphism n-lnk" target="_self" href="https://youtube.com">YouTube</a>
    <a class="neumorphism n-lnk" target="_self" href="https://clien.net/service">Clien</a>
    <a class="neumorphism n-lnk" target="_self" href="https://jisanresort.co.kr/mobile/index.asp">Jisan</a>
    <a class="neumorphism n-lnk" target="_self" href="https://ucampus.knou.ac.kr/ekp/app/notice/initASGNotice.do">KNOU</a>
</div>
