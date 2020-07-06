---
layout: post
title: 최소한의 GCP 사용법
tags: [gcp]
image: /assets/images/posts/2020-07-05-01.jpg
---

### Google Compute Engine
	1. [GCE] VM 인스턴스 생성
	2. [GCE] 인스턴스 그룹 생성
	3. [GNS] 부하 분산(로드 밸런싱) 생성
	4. [GNS] Cloud DNS <-> LB IP 연결
	5. Cloud SQL 생성
	6. VM <-> SQL 고정 IP, Home IP 허용 목록에 추가
​
### 서버 설정

> 서버 업데이트
	1. apt update
	2. apt upgrade
	3. apt dist-upgrade
	4. apt autoremove

> 최소한의 필요 모듈 설치
	5. apt install vim
	6. apt install git
	7. apt install unzip
	8. apt install sendmail
	9. apt install apache2

> Apache2 모듈 활성화
	10. a2enmod rewrite
	11. a2enmod headers
	12. a2enmod ssl
	13. a2dismod -f autoindex

> 웹서버 기본 설정
	14. vi /etc/apache2/conf-available/charset.conf 
        * AddDefaultCharset UTF-8 # 주석 제거
	15. vi /etc/apache2/conf-available/security.conf 
        * AllowOverride None, Require all denied # 주석 제거
        * ServerTokens Prod
        * ServerSignature Off
        * TraceEnable Off
        * Header set X-Content-Type-Options: "nosniff"
        * Header set X-Frame-Options: "sameorigin"
	16. vi /etc/apache2/apache2.conf
        * 특정 파일에 대한 접근 보안 설정
        * Let's Encrypt SSL 적용 시, 해당 파일에 권한 부여

> Apache 개별 권한 설정
    17. apt-cache search mpm-itk
	18. apt install libapache2-mpm-itk
        * shell, sftp, web의 권한을 동일하게 관리하기 위한 프로그램 설치

> 기본 사이트 추가 설정
	19. vi /etc/apache2/sites-available/000-default.conf 
        * http [80] 포트 추가 설정
	20. mv /etc/apache2/sites-available/default-ssl.conf /etc/apache2/sites-available/000-default-ssl.conf
        * https [443] 포트 추가 설정
	21. a2ensite 000-default-ssl.conf
        * 443 프로토콜 설정 추가
	22. a2dissite 000-default.conf
        * 80 프로토콜 설정 제거

> php 설치
	23. apt install php
	24. apt install php-mbstring
	25. apt install php-gd
	26. apt install php-curl php-xml
	27. apt install php-bcmath
	28. apt install php-oauth
	29. apt install php-mysql
	30. apt install composer

> php 보안 설정
	31. vi /etc/apache2/mods-available/php7.2.conf 
        * php 해석 확장자 변경
        * `<FilesMatch ".+\.ph(p3|p4|p5|p7|ar|t|tml)$"> Require all denied </FilesMatch>`

> php 기본 timezone 설정
	32. vi /etc/php/7.2/apache2/php.ini
	33. vi /etc/php/7.2/cli/php.ini # 타임존 설정
        * `/timezone` 으로 검색 후 `Asia/Seoul` 으로 설정

> 변경 된 서버 설정 적용
	34. service apache2 restart
	35. service apache2 reload

> Apache2 환경설정 문법검사
	36. apache2ctl -S

* 서버 설정 참조: https://blog.lael.be/post/7264
​
### 그외 참고사항
 * GCP 네트워크 부하 분산 (로드밸런서) 기능 사용 시에는 Let's Encrypt 설치 불필요
 * Laravel 사용 시, 000-default-ssl.conf 파일에서 Root 경로를 ../public 으로 변경
 * rsync -avzh --delete <product-root>/ <dev-root> 
     * <product-root>/ 안의 파일들을 <dev-root> 폴더 안에 복사
 * rsync -avzh --delete <dev-root>/ <product-root> 
     * 개발 루트에서 작업 후 운영 루트로 복사
 * rsync -avzh --delete --exclude-from '<dev-root>/.gitignore' <dev-root>/ <product-root> 
     * 특정 패턴의 파일 및 폴더 제외 후 복사​