---
layout: post
title: 최소한의 Docker 사용법
tags: [docker]
image: /assets/images/posts/2020-07-04-01.jpg
---

### 도커 설치

- https://docs.docker.com/install/
​

### 우분투 이미지 찾기

- https://hub.docker.com/_/ubuntu/
​

### 도커 이미지 & 컨테이너 생성 및 실행 

- `docker run -i -t ubuntu:18.04 bash`
- `-t` : 터미널 모드 사용
- `-i` : 표준 입력을 받을 수 있게 함
- `-v` : 호스트의 디렉토리와 컨테이너의 디렉토리를 공유시킴
- bash 실행 (-t, -i 옵션 필요)
- `docker run -i -t -p 443:443 -p 80:80 ubuntu:18.04 bash`
- `docker images` : 이미지 목록
- `docker ps -a` : 컨테이너 목록
- `docker rename <old> <new>` : 컨테이너 이름 변경
- `docker start <name>` : 컨테이너 실행 [start, restart, stop]
- `docker attach <name>` : 컨테이너에 접속하기
​

### 도커 무중단 쉘 빠져나오기

-  `Ctrl + P`, `Ctrl + Q`
-  단, `docker run -it` 으로 실행한 경우에 한함
​

### 외부에서 컨테이너 안의 명령 실행하기

- `docker exec <container name> <command>`
- `docker exec jiwon.org service httpd restart`
- 실행 중인 컨테이너에만 사용 가능
- `docker rm <container id>` : 컨테이너 삭제
- `docker rmi <image id>` : 이미지 삭제
- `docker image tag jiwon-ubuntu laladock/ubuntu:18.04` : 이미지 이름(태그) 변경
​

---
​

### 배포용 도커 이미지 만들기

1. docker run -i -t -p 443:443 -p 80:80 --name <container-name> ubuntu:18.04 bash
2. apt update
3. apt upgrade
4. apt dist-upgrade
5. apt autoremove
6. apt install vim
7. apt install unzip
8. apt install git
9. apt install apache2
10. apt install php
11. apt install php-mbstring php-gd php-curl php-xml php-bcmath php-oauth php-mysql composer
12. docker commit <container-name> <id>/ubuntu:18.04
13. docker push laladock/ubuntu:18.04
    * 이후 변화가 생길 시, 다시 커밋 후 배포
       * docker commit <container-name> <id>/ubuntu:18.05
       * docker push <id>/ubuntu:18.05
​

### 도커로 공유받은 개발 환경 구축하기

* docker run -i -t -p 443:443 -p 80:80 -v <project-path>:<remote-path> <id>/ubuntu:18.04 bash
* docker run -i -t -p 443:443 -p 80:80 -p 3306:3306 --name <container-name> -v <project-path>:<remote-path> <id>/ubuntu:18.04 bash​
