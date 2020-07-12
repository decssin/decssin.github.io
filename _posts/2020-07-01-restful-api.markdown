---
layout: post
title: RESTFUL API
tags: [restful]
image: /assets/images/posts/2020-07-01-01.jpg
---

### METHOD 역할

* POST
    * POST를 통해 해당 URI를 요청하면 리소스를 생성합니다.
    * URI: `/posts`
* GET
    * GET를 통해 해당 리소스를 조회합니다. 리소스를 조회하고 해당 도큐먼트에 대한 자세한 정보를 가져옵니다.
    * URI: `/posts`, `/posts/:index`
* PUT
    * PUT를 통해 해당 리소스를 수정합니다.
    * URI: `/posts/:index`
* DELETE
    * DELETE를 통해 리소스를 삭제합니다.
    * URI: `/posts/:index`

### REST API에서 중요한 점

1. URI는 정보의 자원을 표현해야 합니다. (행위에 대한 표현이 들어가지 않습니다.)
2. 자원에 대한 행위는 HTTP METHOD를 사용합니다.
3. URI 마지막 문자로 슬래시(/)를 포함하지 않습니다.
4. 가독성을 위해 하이픈(-)을 사용하되, 밑줄(_)은 사용하지 않습니다.
5. 파일 확장자는 URI에 포함시키지 않습니다.
6. 자원을 표현하는 Collection과 Document에 단수, 복수를 지켜줍니다. (ex) http://restapi.example.com/sports/soccer/players/13

### HTTP 상태 코드

* 200: OK, 클라이언트의 요청을 정상적으로 수행
* 201: Created, 클라이언트의 요청을 정상적으로 수행
* 301: Moved Permanently, 요청한 리소스의 URI 변경
* 400: Bad Request, 잘못된 문법
* 401: Unauthorized, 비인증(unauthenticated)
* 403: Forbidden, 클라이언트의 접근 차단
* 404: Not Found, 알려지지 않은 URL
* 405: Method Not Allowed, 사용 불가능한 메소드
* 500: Internal Server Error, 서버 처리 에러

### 참고

[REST API 제대로 알고 사용하기](http://meetup.toast.com/posts/92 'REST API 제대로 알고 사용하기')