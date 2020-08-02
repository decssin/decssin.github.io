---
layout: post
title: 최소한의 Docker 사용법
tags: [docker]
image: /assets/images/posts/2020-07-04-01.jpg
---

도커(Docker)는 버추얼 박스(Virtual Box)와 사용자 측면에서 비슷하면서, 소프트웨어 측면에서 다른 오픈 소스 프로젝트입니다. 두 소프트웨어가 이미지를 가상화 공간에 띄워 여러 운영체제를 다룰 수 있게 해준다는 면에서 비슷한 점이 많지만, 가상화 방식에서 차이가 있습니다. 

운영체제를 가상화하지 않는 컨테이너 기술인 만큼 가상머신에 비해서 가벼우며, VM을 포함하여 한대의 서버에 여러개의 서비스를 구동하기 좋습니다. 보안상, 서비스가 해커에 노출되더라도 원래의 서버에 영향을 미치기가 쉽지 않은 격리된 구조인 만큼, 가상화의 장점을 상당 부분 활용할 수 있다. 가상머신과 달리, 기존 리눅스 자원을 그대로 활용할 수 있어서 여러 서비스들을 한 서버에 돌리기가 좋은 편입니다. 구글의 쿠버네티스가 도커 기술 기반으로 시작되었습니다.

### 도커 준비

1. [도커 설치](https://docs.docker.com/install/ '도커 설치')
2. [우분투 이미지 찾기](https://hub.docker.com/_/ubuntu/ '우분투 이미지 찾기')
​
### 도커 컨테이너 생성 및 실행 

~~~
docker run -i -t -p 443:443 -p 80:80 ubuntu:18.04 bash
# -t : 터미널 모드 사용
# -i : 표준 입력을 받을 수 있게 함
# -v : 호스트의 디렉토리와 컨테이너의 디렉토리를 공유시킴
# bash : bash 사용
~~~

### 도커 그 외 명령어

~~~
docker images : 이미지 목록
docker ps -a : 컨테이너 목록
docker rename <old> <new> : 컨테이너 이름 변경
docker start <name> : 컨테이너 실행 [start, restart, stop]
docker attach <name> : 컨테이너에 접속하기
docker rm <container id> : 컨테이너 삭제
docker rmi <image id> : 이미지 삭제
~~~

### 도커 무중단 쉘 빠져나오기

-  `Ctrl + P`, `Ctrl + Q`
-  단, `docker run -it` 으로 실행한 경우에 한함
​

### 외부에서 컨테이너 안의 명령 실행하기

~~~
docker exec <container name> <command>
docker exec <container name> service httpd restart
# 실행 중인 컨테이너에만 사용 가능
~~~

### 배포용 도커 이미지 만들기

~~~
    01. docker run -i -t -p 443:443 -p 80:80 --name <container-name> ubuntu:18.04 bash
    02. apt update
    03. apt upgrade
    04. apt dist-upgrade
    05. apt autoremove
    06. apt install vim
    07. apt install unzip
    08. apt install git
    09. apt install apache2
    10. apt install php
    11. apt install php-mbstring php-gd php-curl php-xml php-bcmath php-oauth php-mysql composer
    12. docker commit <container-name> <id>/ubuntu:18.04
    13. docker push laladock/ubuntu:18.04
        * 이후 변화가 생길 시, 다시 커밋 후 배포
        * docker commit <container-name> <id>/ubuntu:18.05
        * docker push <id>/ubuntu:18.05
~~~
​
### 도커로 공유받은 개발 환경 구축하기

~~~
docker run -i -t -p 443:443 -p 80:80 -v <project-path>:<remote-path> <id>/ubuntu:18.04 bash
docker run -i -t -p 443:443 -p 80:80 -p 3306:3306 --name <container-name> -v <project-path>:<remote-path> <id>/ubuntu:18.04 bash​
~~~

### 도커 허브에 있는 기존 이미지 사용하기

~~~
# Ubuntu Linux, Apache, MySQL, PHP를 사용하는 LAMP 스택 이미지
# mattrayner/lamp 이미지 사용

# mysql 비밀번호는 최초 생성 시 표시됩니다.
docker run --name "project" -p "80:80" -v /c/dev/workspace/project:/var/www/html mattrayner/lamp:latest
~~~