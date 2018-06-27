---
layout: post
title: PHP로 AJAX 비동기 처리하기
date: 2018-06-27 13:58:00 +0900
description: PHP 에서 jQuery 또는 자바스크립트의 비동기 처리를 통해, 페이지 전환 없는 데이터의 업데이트가 가능합니다. # Add post description (optional)
img: php-ajax-processing.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [PHP, AJAX]
---

# 기본 AJAX 형식

변경 된 부분만 다시 렌더링하는 비동기 처리(AJAX) 방식에서 jQuery를 이용한 기본적인 형식은 아래와 같습니다.
~~~js
<script>
    $.ajax({
        // GET 또는 POST
        type : "post",
        // 데이터 처리할 URL (get 으로 데이터를 보낼수도 있습니다.)
        url : url,
        // json 으로 설정하면 JSON.parse를 할 필요 없습니다.
        dataType : "json",
        // 폼 데이터를 보낼 경우, Submit 한 것과 같이 데이터를 보냅니다.
        data : data,
        beforeSend: null,
        error : function(e)
        {
            alert('통신실패!!');
            console.log(e.responseText);
        },
        success : function(data)
        {
            if (args['status'] === "ok")
            {
                alert(args['msg']);
                self.location.reload();
            }
            else
            {
                alert(args['msg']);
            }
        }
    });
</script>
~~~

# 프로필 이미지의 변경

프로필 이미지가 있는 회원 정보에서 이미지를 변경했을 때, 해당 이미지가 바로 변경되도록 하려면 ajax 와 같은 비동기 처리 방식이 필요합니다. ajax 를 처리하는 url 에서는 이미지 정보를 data 형식으로 리턴하면, 추가 로직 없이 이미지가 바로 변경되도록 처리 할 수 있습니다.

~~~php
$("input[name=profile]").on("change", function() {
   var form = $('#test_form')[0];
   var formData = new FormData(form);
   formData.append("fileObj", $("input[name=profile]")[0].files[0]);

   $.ajax({
       type : "post",
       url : "/test",
       data : formData,
       success : function(result) 
       {
           $("#background_url").css("background", result);
           $("#background_url").css("background-size", "cover");
       }
   });
});
~~~

# 미디어 파일의 검색

미디어 파일을 비동기 방식으로 검색하여 결과를 보여주기 위해서, 아래와 같은 DOM 구조가 있다고 가정합니다.

~~~html
<input type="text" id="media" placeholder="검색 할 미디어 파일의 제목을 입력하세요.">
<div class="button" onclick="media.search()">검색</div>

<div id="media_table">
  <table>
    <div class="data">
    <!-- 서버에서 처리한 데이터를 반복문으로 작성 -->
    </div>
  </table>
</div>
~~~

미디어 검색을 위한 비동기 처리를 추가합니다. 여기서는 jQuery 방식이 아닌 Vanilla JS 방식으로 처리해봅니다.

~~~js
<script>
var media = {
    search : function()
    {
        var str = document.getElementById("media").value; // 데이터 객체
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // 응답이 성공하면 처리 내용을 이 곳에 작성합니다.
                document.getElementById("media_table").innerHTML = this.responseText;
            }
        };
        // GET 형식으로 비동기 통신을 합니다.
        xmlhttp.open("GET", "/cms/media.search.html?filename=" + str, true);
        xmlhttp.send();
    }
}
</script>
~~~

비동기로 데이터를 수신 받은 파일에서 GET 또는 POST 로 데이터를 읽어서, 데이터베이스의 정보를 불러와 해당 부분을 처리합니다.

~~~php
<?php
  var_dump($_GET); 
  // 수신 된 정보를 바탕으로 데이터베이스 연동하여 데이터를 불러옵니다.
  // 불러 온 데이터를 이 곳에서 HTML 작성하여 리턴하거나, JSON 형태로 리턴해서 자바스크립트에서 처리합니다.
?>
~~~