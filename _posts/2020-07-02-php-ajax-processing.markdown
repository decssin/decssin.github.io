---
layout: post
title: PHP ajax processing
tags: [ajax]
image: /assets/images/posts/2020-07-02-01.jpg
---

Ajax(Asynchronous JavaScript and XML)는 비동기적으로 웹 데이터를 업데이트하는 방법 중 하나입니다. 동기적인 업데이트는 쉽게 말해서 F5 키를 사용해 새로고침을 하는 것을 의미합니다. 비동기적인 업데이트는 그와 반대로 새로고침의 액션없이 실시간으로 데이터가 업데이트 되는 것을 말합니다.

DHTML이나 LAMP와 같이 Ajax는 자체가 하나의 특정한 기술을 말하는 것이 아니고, 함께 사용하는 기술의 묶음을 지칭하는 용어입니다.
기존의 웹 데이터 업데이트는 하나의 요청을 웹서버로 보내면, 새로운 웹페이지 데이터를 생성하여 되돌려줍니다. 이때 되돌려받은 데이터의 상당 부분은 기존의 데이터와 유사한 내용을 가지고 있는 경우가 많습니다. 이 때문에 트래픽을 낭비하게 되고, 낭비하는 트래픽만큼 금전적 손실이 발생합니다.

반면에 Ajax 통신을 이용한 데이터 업데이트는 필요한 데이터만 웹서버에 요청을 하고 전달 받은 웹페이지만 업데이트할 수 있습니다. 웹서버의 데이터 처리량도 줄어들기 때문에 애플리케이션의 응답성이 좋아집니다.

### Ajax 장점

  * 페이지 이동없이 고속으로 화면을 전환할 수 있습니다.
  * 서버 처리를 기다리지 않고, 비동기 요청이 가능합니다.
  * 수신하는 데이터 양을 줄일 수 있고, 클라이언트에게 처리를 위임할 수도 있습니다.

### Ajax 단점
  * Ajax를 쓸 수 없는 브라우저에 대한 문제가 있습니다.
  * HTTP 클라이언트의 기능이 한정되어 있습니다.
  * 페이지 이동없는 통신으로 인한 보안상의 문제가 있을 수 있습니다.
  * 지원하는 Charset이 한정되어 있습니다.
  * 스크립트로 작성되므로 디버깅이 용이하지 않습니다.
  * 요청을 남발하면 역으로 서버 부하가 늘 수 있습니다.
  * 동일-출처 정책으로 인해 다른 도메인과는 통신이 불가능합니다.

### 기본 Ajax 형식

> jQuery를 이용한 기본적인 형식은 아래와 같습니다.

~~~js
$.ajax({
    type : 'post',
    url : 'url',
    dataType : 'json',
    data : [...data],
    beforeSend : null,
    error : function(e)
    {
        // 통신실패
        console.log(e.responseText);
    },
    success : function(return)
    {
        // 데이터 처리
        console.log(return);
    }
});
~~~

### EX-1) 프로필 이미지의 변경

프로필 이미지가 있는 회원 정보에서 이미지를 변경했을 때, 해당 이미지가 바로 변경되도록 하려면 ajax 와 같은 비동기 처리 방식이 필요합니다. ajax 를 처리하는 url 에서는 이미지 정보를 data 형식으로 리턴하면 추가 로직 없이 이미지가 바로 변경되도록 처리 할 수 있습니다.

~~~js
$('input[name=profile]').on('change', function() {
   let form = $('#test_form')[0];
   let formData = new FormData(form);
   formData.append('fileObj', $('input[name=profile]')[0].files[0]);

   $.ajax({
       type : 'post',
       url : '/test',
       data : formData,
       success : function(result) 
       {
           $('#background_url').css('background', result);
           $('#background_url').css('background-size', 'cover');
       }
   });
});
~~~

### EX-2) 미디어 파일의 검색

미디어 파일을 비동기 방식으로 검색하여 결과를 보여주기 위해서, 아래와 같은 DOM 구조가 있다고 가정합니다.

~~~html
<input type="text" id="media" placeholder="검색 할 미디어 파일의 제목을 입력하세요.">
<div class="button" onclick="media.search()">검색</div>

<div id="media_table">
  <table>
    <div class="data">
        <!-- DATA -->
    </div>
  </table>
</div>
~~~

미디어 검색을 위한 비동기 처리를 추가합니다. 여기서는 jQuery 방식이 아닌 Vanilla JS 방식으로 처리해봅니다.
비동기로 데이터를 수신 받은 파일에서 GET 또는 POST 로 데이터를 읽어서, 데이터베이스의 정보를 불러와 반복되는 데이터 영역을 채워줍니다.

~~~js
let media = {
    search : function()
    {
        let str = document.getElementById('media').value; // 데이터 객체
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // 응답이 성공하면 처리 내용을 이 곳에 작성합니다.
                document.getElementById('media_table').innerHTML = this.responseText;
            }
        };
        // GET 형식으로 비동기 통신을 합니다.
        xmlhttp.open('GET', '/media-search?filename=' + str, true);
        xmlhttp.send();
    }
}
~~~