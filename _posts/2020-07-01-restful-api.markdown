---
layout: post
title: RESTFUL API
tags: [restful]
image: /assets/images/posts/2020-07-01-01.jpg
---

Restful Api는 URI를 기반으로 리소스를 처리하는 방법을 제시하는 설계 방법론입니다. REST(Representational State Transfer)는 단어에서 의미하는 것과 같이 추상적이거나 모호하지 않고, 명확하게 상태를 교환하는 아키텍처의 한 형식입니다.

REST 아키텍처라는 용어를 정의한 로이 필딩(Roy Fielding)에 따르면 다음의 제한 조건을 만족해야만 온전한 REST 아키텍처를 구현했다고 할 수 있습니다. 

  * 클라이언트/서버 구조가 일관적인 인터페이스로 분리되어 있어야 합니다.
  * 각 요청 간 클라이언트의 콘텍스트가 서버에 저장되어서는 안됩니다.
  * 클라이언트는 응답을 캐싱할 수 있어야 합니다.
  * 로드 밸런싱이나 공유 캐시 기능을 제공함으로써 시스템 규모 확장성을 향상시킬 수 있어야 합니다.
  * 클라이언트가 실행시킬 수 있는 로직을 전송하여 기능을 확장시킬 수 있어야 합니다.
  * 아키텍처는 단순해야하고, 작은 단위로 분리가능해야 하며 클라이언트-서버의 각 파트가 독립적으로 개선될 수 있도록 해야합니다.

### METHOD 역할

  * POST를 통해 해당 URI를 요청하면 리소스를 생성합니다. (URI: `/posts`)
  * GET를 통해 해당 리소스를 조회합니다. (URI: `/posts`, `/posts/:index`)
  * PUT를 통해 해당 리소스를 수정합니다. (URI: `/posts/:index`)
  * DELETE를 통해 리소스를 삭제합니다. (URI: `/posts/:index`)

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