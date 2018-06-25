---
layout: post
title: 아파치에서 htaccess 설정하기
date: 2018-06-26 00:37:00 +0900
description: 아파치 설정 파일을 변경하면 서버를 재시작해야 하는 번거로움이 있습니다. 그런 번거로움 없이, 바로 변경 가능한 htaccess 설정에 대한 내용을 기록해 놓았습니다. # Add post description (optional)
img: apache-htaccess-setting.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Apache, htaccess]
---

# 디렉토리 설정 (for apache)

특정 폴더로 접속하는 URL 에서는 보안을 위해서 서버 경로를 제외해서 접근할 수 있습니다. 아래 htaccess 설정은 Storage 하위 폴더의 경로를 작성할 때, Storage 폴더를 직접 작성하지 않아도 됩니다.

~~~apache
RewriteCond %{REQUEST_URI} ^/(artwork|calculate|storage|save|media)/
RewriteRule ^(.*)$ Storage/$1 [L]
~~~

위의 내용을 응용하면, 모든 접속 URL 을 하나의 파일에서 처리 할 수 있으므로, 권한 설정이나 기타 공통적으로 처리해야 하는 부분을 쉽게 해결할 수 있습니다.

~~~apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.php?/$1 [L]
~~~

특정 폴더로 접속하도록 설정하는 것도 가능합니다.

~~~apache
# view 폴더 경로 숨기기 (모든 URL 이 /view/를 거칩니다.)
RewriteEngine on
RewriteCond %{REQUEST_URI} !^/(view)
RewriteRule (.*) /view/$1
~~~

특정 파일에 대한 URL 로의 접근을 차단해야 하는 경우가 있습니다. 중요한 설정 파일이나, 특정 스크립트가 실행되는 파일은 URL 로 접근하는 것을 막아야 할 필요가 있습니다. 다음 htaccess 설정은 서버에서 URL 접근을 차단해줍니다.

~~~apache
# 지정한 모든 파일은 접근 금지됩니다.
<files *.config.php>
    order allow,deny
    deny from all
</files>

# .htaccess 파일 자체를 보호합니다.
<Files ~ "^.*\.([Hh][Tt])">
	Order allow,deny
	Deny from all
	Satisfy all
</Files>
~~~

아파치의 httpd.conf 파일에서 htaccess 에 대한 설정 여부를 허용하면, php 설정 값도 변경 할 수 있습니다. 이 때, 서버의 재실행이 불필요 하기 때문에, 유연한 제어가 가능합니다.

~~~apache
# php.ini 설정값 변경
php_value upload_max_filesize           1024M
php_value post_max_size                 1024M

# php.ini 중, 에러 처리
# 404 Not Found (can't find file)
ErrorDocument 404 "/Resource/err/404.php"
# 403 Forbidden (no permission)
ErrorDocument 403 "/Resource/err/403.php"
# 500 Internal Server (program error)
ErrorDocument 500 "/Resource/err/500.php"
~~~

그 외에 htaccess 파일에서 설정 가능한 유용한 값들을 살펴봅니다.

~~~apache
# URL 을 통해서 폴더로 접속했을 경우, 폴더 구조가 보이는 것을 막아줍니다.
Options All -Indexes

# 보안을 위해서 서버 정보를 표시하지 않습니다.
ServerSignature Off

# 기본 인코딩 값을 지정합니다.
AddDefaultCharset utf-8
AddCharset utf-8 .html .css .js .xml .json .rss .php .jsonp

# .php 확장자를 없애줍니다.
Options +MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^([^\.]+)$ $1.php [NC,L]
~~~

>PHP에서 파일 제어 중에 서버로 업로드 안되는 경우, 권한을 확인합니다. 아파치의 기본 사용자는 nobody 또는 daemon 입니다. 그렇기 때문에, 서버에서 루트 권한이 아니라면 파일 제어가 되지 않을 수 있습니다.