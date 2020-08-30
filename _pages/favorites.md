---
layout: page
title: Favorites
order: 3
image: '/assets/images/pages/favorites.jpg'
---

<style>
    body{
        background:linear-gradient( 
            90deg,rgba(239,240,242,1) 0,
            rgba(237,238,242,1) 49%,
            rgba(236,237,241,1) 100% 
        )
    }
    .c-post__image{
        margin-bottom:0
    }
    .neumorphism.flex{
        display:flex;
        justify-content:center;
        align-items:center;
        align-content:normal;
        justify-items:center;
        flex-flow:row wrap
    }
    .neumorphism.background{
        width:100%;
        padding:150px 0;
        background:rgb(239,240,242);
        background:linear-gradient( 
            90deg,rgba(239,240,242,1) 0,
            rgba(237,238,242,1) 49%,
            rgba(236,237,241,1) 100% 
        )
    }
    .neumorphism.link{
        display:block;
        width:80px;
        height:80px;
        line-height:80px;
        text-align:center;
        text-decoration:none !important;
        font-size:13px;
        margin:0 25px 25px 25px;
        cursor:pointer;
        color:gray;
        outline:none;
        -webkit-tap-highlight-color:transparent;
        -webkit-highlight:none;
        -webkit-touch-callout:none;
        -webkit-user-select:none;
        -khtml-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        border-radius:50px;
        background:#eeeff3;
        box-shadow:5px 5px 10px #cacbcf,-5px -5px 10px #ffffff
    }
    .neumorphism.link:hover,
    .neumorphism.link:active,
    .neumorphism.link:focus{
        color:gray !important
    }
    .neumorphism.link:active{
        border-radius:50px;
        background:linear-gradient(145deg,#d6d7db,#ffffff);
        box-shadow:inset 5px 5px 5px #cacbcf,inset -5px -5px 5px #ffffff
    }
    .category:not(:first-child){
        margin-top:85px
    }
    .category{
        width:100%;
        height:95px
    }
    .category label{
        display:inline-block;
        width:100%;
        text-align:center;
        font-size:20px;
        color:gray
    }
    @media(max-width:414px){
        .neumorphism.background{
            padding:75px 0
        }
        .neumorphism.link{
            width:75px;
            height:75px;
            line-height:75px;
            font-size:12px;
            margin:0 15px 30px 15px
        }
    }

    @media(min-width:320px){
        .c-post__image{
            height:270px;
        }
    }
    @media(min-width:480px){
        .c-post__image{
            height:400px;
        }
    }
    @media(min-width:668px){
        .c-post__image{
            height:501px;
        }
    }
</style>

<div class="neumorphism background flex">
    <div class="category">
        <label>Dev, Design + Books</label>
    </div>
    <a class="neumorphism link" target="_self" href="https://github.com/dnessi">GitHub</a>
    <a class="neumorphism link" target="_self" href="https://codepen.io">CodePen</a>
    <a class="neumorphism link" target="_self" href="https://awesome-devblog.now.sh">DevBlog</a>
    <a class="neumorphism link" target="_self" href="https://awwwards.com">Awwwards</a>
    <a class="neumorphism link" target="_self" href="https://dribbble.com/shots/recent/web-design">Dribbble</a>
    <a class="neumorphism link" target="_self" href="https://pinterest.co.kr/search/pins/?rs=typed&q=WebDesign">Pinterest</a>
    <a class="neumorphism link" target="_self" href="https://behance.net/search?search=WebDesign">Behance</a>
    <a class="neumorphism link" target="_self" href="https://aladin.co.kr/m/mnew.aspx?BranchType=9&NewType=New&CID=38401&SortOrder=5">eBook</a>
    <a class="neumorphism link" target="_self" href="https://aladin.co.kr/m/mnew.aspx?BranchType=1&NewType=New&CID=437&SortOrder=5">Books</a>
    <a class="neumorphism link" target="_self" href="https://ridibooks.com/category/books/2200?order=recent">Ridi</a>
    <a class="neumorphism link" target="_self" href="https://lookpin.co.kr">LookPin</a>
    <div class="category">
        <label>Et cetera</label>
    </div>
    <select onchange="window.open(this.value)">
        <option value="https://ko.javascript.info/">JavaScript<option>
        <option value="https://kr.vuejs.org/v2/guide/">Vue.js<option>
        <option value="https://ko.reactjs.org/tutorial">React.js<option>
        <option value="https://laravel.kr/docs">Laravel<option>
        <option value="https://www.cikorea.net/bbs/lists/news">CodeIgniter<option>
        <option value="https://github.com/jupeter/clean-code-php">Clean PHP<option>
        <option value="https://poiemaweb.com">HTML5<option>
        <option value="https://htmlreference.io">HTML Reference<option>
        <option value="https://git-scm.com/book/ko/v2">Git<option>
        <option value="https://overapi.com">OverAPI<option>
        <option value="https://verstory.com">Verstory<option>
        <option value="https://www.lesstif.com">BLOG<option>
        <option value="https://blog.lael.be">BLOG<option>
        <option value="https://squoosh.app">Google Image Optimizer<option>
        <option value="https://imagecompressor.com/ko/">Optimizilla<option>
        <option value="https://www.wappalyzer.com">Identify Technology<option>
        <option value="https://regexr.com">RegExr<option>
        <option value="https://tablericons.com">Icon<option>
        <option value="https://color.adobe.com/ko/create/color-wheel">Color Palette<option>
        <option value="https://htmlcolorcodes.com/color-picker">Color Picker<option>
        <option value="https://developers.google.com/speed/pagespeed/insights/?hl=ko">PageSpeed Insights<option>
        <option value="https://pixlr.com/kr/">Pixlr<option>
        <option value="https://programmers.co.kr/">Programmers<option>
        <option value="https://leetcode.com/">LeetCode<option>
        <option value="https://www.acmicpc.net/">Baekjoon Online Judge<option>
        <option value="https://algospot.com/">AlgoSpot<option>
        <option value="http://www.jungol.co.kr/">Jungol<option>
        <option value="http://codingdojang.com/">CodingDojang<option>
        <option value="https://news.ycombinator.com/news">Hacker News<option>
        <option value="https://usesthis.com/">Use This / Interviews<option>
        <option value="https://codepen.io/">CodePen<option>
        <option value="https://phpschool.com/">PHPSCHOOL<option>
        <option value="https://jsdev.kr/">jsdev<option>
        <option value="https://zetawiki.com/">ZetaWiki<option>
        <option value="https://www.w3schools.com/">W3Schools<option>
        <option value="https://developer.mozilla.org/ko/">MDN<option>
    </select>
</div>




<!--

twitter @ittbot

RSS MIX 
http://www.rssmix.com/u/12079453/rss.xml

RSS LIST
https://d2.naver.com/d2.atom
https://blog.rocketpunch.com/feed/
https://feeds.feedburner.com/imaso
https://feeds.feedburner.com/slownews/tech
https://woowabros.github.io/feed.xml
http://icunow.co.kr/feed/
https://tech.kakao.com/feed/
https://ppss.kr/archives/category/tech/feed
https://aws.amazon.com/ko/blogs/korea/feed/
https://developer.ibm.com/kr/blog/feed/
https://www.elastic.co/kr/blog/feed
https://feeds.feedburner.com/GoogleDevelopersKorea
https://engineering.linecorp.com/ko/feed/
https://www.popit.kr/feed/
https://spoqa.github.io/atom.xml
https://kldp.org/blog/feed
https://tech.osci.kr/rss/
https://rss.blog.naver.com/qualcommkr.xml
https://blog.aliencube.org/feed.xml
https://feeds.feedburner.com/jandi/cbSy?format=xml
http://labs.brandi.co.kr/feed.xml
https://brunch.co.kr/rss/@@30Rl
https://rss.blog.naver.com/codestates.xml
http://blog.smartmaker.com/rss
https://hyperconnect.github.io/feed.xml
https://blog.lgcns.com/rss
https://blog.alyac.co.kr/feed
https://blog.cloudflare.com/ko/rss/
https://meetup.toast.com/rss
https://rss.blog.naver.com/codeitofficial.xml
https://medium.com/feed/deliverytechkorea
https://zuminternet.github.io/feed.xml
https://rss.blog.naver.com/n_cloudplatform.xml
https://medium.com/feed/watcha
https://blog.pabii.co.kr/feed/
https://cntechsystems.tistory.com/rss
https://tech.gamevilcom2us.com/feed
https://helloworld.kurly.com/feed.xml
https://medium.com/feed/humanscape-tech
https://brunch.co.kr/rss/@@5fXt
https://code-200.tistory.com/rss
https://library.gabia.com/feed
https://rss.blog.naver.com/goorm_official.xml
https://rss.blog.naver.com/skaibril.xml
https://danawalab.github.io/feed
https://tech.kakaoenterprise.com/rss
https://rss.blog.naver.com/spartacoding.xml
https://blog.pingpong.us/feed.xml
https://blog.banksalad.com/rss.xml
https://www.reddit.com/r/javascript/.rss
https://www.reddit.com/r/webdev/.rss

GOOGLE ALERTS
https://www.google.com/alerts/feeds/17131064651910957541/10389051803556398256
https://www.google.com/alerts/feeds/17131064651910957541/7668219712789044615
https://www.google.com/alerts/feeds/17131064651910957541/1364728849794688936
https://www.google.com/alerts/feeds/17131064651910957541/7668219712789041763
https://www.google.com/alerts/feeds/17131064651910957541/1527222574837740467

-->
