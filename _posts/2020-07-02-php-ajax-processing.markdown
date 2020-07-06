---
layout: post
title: PHP ajax processing
tags: [ajax]
image: /assets/images/posts/2020-07-02-01.jpg
---

### 기본 AJAX 형식

> 변경 된 부분만 다시 렌더링하는 비동기 처리(AJAX) 방식에서 jQuery를 이용한 기본적인 형식은 아래와 같습니다.

~~~js
$.ajax({
    type        : 'post',   // GET 또는 POST
    url         : url,      // 데이터 처리할 URL
    dataType    : 'json',   // json 설정하면 JSON.parse를 할 필요 없습니다.
    data        : data,     // form 데이터를 보낼 경우, Submit 데이터를 보냅니다.
    beforeSend  : null,
    error : function(e)
    {
        alert('통신실패!!');
        console.log(e.responseText);
    },
    success : function(return)
    {
        if (return['status'] === "ok") {
            alert(return['msg']);
            self.location.reload();
        } else {
            alert(return['msg']);
        }
    }
});
~~~

### 프로필 이미지의 변경

> 프로필 이미지가 있는 회원 정보에서 이미지를 변경했을 때, 해당 이미지가 바로 변경되도록 하려면 ajax 와 같은 비동기 처리 방식이 필요합니다. ajax 를 처리하는 url 에서는 이미지 정보를 data 형식으로 리턴하면 추가 로직 없이 이미지가 바로 변경되도록 처리 할 수 있습니다.

~~~js
$('input[name=profile]').on('change', function() {
   let form = $('#test_form')[0];
   let formData = new FormData(form);
   formData.append('fileObj', $('input[name=profile]')[0].files[0]);

   $.ajax({
       type     : 'post',
       url      : '/test',
       data     : formData,
       success  : function(result) 
       {
           $('#background_url').css('background', result);
           $('#background_url').css('background-size', 'cover');
       }
   });
});
~~~

### 미디어 파일의 검색

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