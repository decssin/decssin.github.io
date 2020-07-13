---
layout: post
title: 최소한의 Ubuntu 사용법
tags: [ubuntu]
image: /assets/images/posts/2020-07-07-01.jpg
---

### 패키지 업데이트

~~~
apt update
apt upgrade
apt dist-upgrade
apt autoremove
~~~
​
### 패키지 관련 그 외 명령어

~~~
su - jiwon            # 계정 변경
dpkg -l | grep php    # 설치 패키지 확인
apt list --installed  # 설치 패키지 확인
apt -qq list php      # 패키지 검색
apt search php7       # 패키지 검색
~~~

### 리눅스 파일권한 상식

> ls -al 로 파일의 자세한 정보를 볼 수 있습니다.<br/>
  맨앞에 문자가 - 일 경우 파일, d 이면 디렉토리, l 이면 링크를 나타냅니다

~~~
r : Read    = 4
w : Write   = 2
x : eXcute  = 1

-rwxrwxrwx  (777)
-r--r--r--  (444)
-rwx--x--x  (711)

2~4필드   : 소유주  (User)    권한
5~7필드   : 그룹    (Group)   권한
8~10필드  : 나머지  (Others)  권한
~~~

### 파일 권한 변경

~~~
chmod : 파일, 디렉토리 권한 수정
  - chmod 755 a_file  => 소유자에겐 7(rwx), 그룹과 나머지에겐 5(r-x) 권한부여
  - chmod o+rw a_file => others에게 읽기, 쓰기 권한 부여
  - chmod 700 *       => 현재 위치의 모든 파일과 폴더 권한 수정\
  - chmod -R 755 www  => www디렉토리 내의 모든 파일과 디렉토리의 권한 수정

umask : 파일이 만들어질때 허가권 기본값
  - umask 022         => chmod와 반대개념 777에서 뺌. 022일 경우 chmod 755와 같습니다.

chown : 파일 소유자, 소유그룹 수정 
  - chown bible file1 => file1 파일의 소유자를 bible로 수정
  - chown bible:bible2 file2 => file2 파일의 소유자를 bible로 그룹을 bible2로 수정
  - chown -cR nobody:nobody dirl => dirl 폴더와 그 안의 모든 파일, 디렉토리의 소유자, 소유그룹 변경
  chown -R bible:webhost uploads --from=nobody:nobody => uploads디렉토리 내의 파일중 소유자가 nobody이고 소유그룹이 nobody로 되어 있는 파일의 소유자를 bible로 변경하고 소유그룹을 webhost로 변경
~~~

### 기타 명령어

~~~
which php   : 위치 확인 
whoami      : 사용자 확인 
echo $PATH  : $PATH 읽기
vi filename
  - q 끄기
  - :wq 저장 후 끄기
  - :q! 강제 종료
  - i 입력
  - dd 한줄 삭제
~~~