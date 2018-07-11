---
layout: post
title: git push를 위한 리눅스, 유닉스에서 ssh 생성 및 관리
date: 2018-07-11 23:00:00 +0900
description: 리눅스, 유닉스, 특히 맥에서 ssh 생성 및 관리하기 # Add post description (optional)
img: git-unix-ssh.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [UNIX, MAC]
---


# SSH 공개키 만들기

많은 Git 서버들은 SSH 공개키로 인증합니다. 공개키를 사용하려면 일단 공개키를 만들어야 합니다. 공개키를 만드는 방법은 모든 운영체제가 비슷합니다. 먼저 키가 있는지부터 확인합니다. 사용자의 SSH 키들은 기본적으로 사용자의 ~/.ssh 디렉토리에 저장합니다. 그래서 만약 디렉토리의 파일을 살펴보면 이미 공개키가 있는지 확인할 수 있습니다.



~~~
$ cd ~/.ssh
$ ls
authorized_keys2  id_dsa       known_hosts           config            id_dsa.pub
~~~


id_dsa나 id_rsa라는 파일 이름이 보일 것이고 이에 같은 파일명의 .pub 라는 확장자가 붙은 파일이 하나 더 있을 것입니다. 그중 .pub 파일이 공개키이고 다른 파일은 개인키입니다. 만약 이 파일들이 없거나 .ssh 디렉토리도 없으면 ssh-keygen 이라는 프로그램으로 키를 생성해야 합니다. ssh-keygen 프로그램은 Linux나 Mac의 SSH 패키지에 포함돼 있고 Windows는 Git for Windows 안에 들어 있습니다.


~~~
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
Created directory '/home/user/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
d0:82:24:8e:d7:f1:bb:9b:33:53:96:93:49:da:9b:e3 user@mylaptop.local
~~~

.ssh/id_rsa 키를 저장하고 싶은 디렉토리를 입력하고 암호를 두 번 입력합니다. 이때 암호를 비워두면 키를 사용할 때 암호를 묻지 않습니다.

다음은 사용자가 자신의 공개키를 Git 서버 관리자에게 보내야 합니다. 사용자는 .pub 파일의 내용을 복사하여 이메일을 보내기만 하면 됩니다. 공개키는 아래와 같이 생겼습니다.

~~~
$ cat ~/.ssh/id_rsa.pub
ssh-rsa PWADFABAzzdDC3yc2CCCDAAAQAEkl0UfJDHdHY17SbrmTIpNLTDK2Sjom/BWDSU
Gel-nalalHDTYW7hdI93DZ5ew1C3KDkW9jbhUrAFiQzM7xlELEVf4h9lFX5QVkbPppSwg0cce3
Pbv7kOdJ/MTyXE3PCR*HAo3FAXRitBDxiX1DApHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XA
t3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprDA2ypNDvjYNby6vw/Pb0rwert/En
mZ+AW4OZPnTPI89ZPmVMLLuxaD2cSD386Z/il8b+gw3r3+1nKatmIkjn2so1d0dEd2DE#aTlMqVSsbx
NrRFi9wrf32E2 user@mylaptop.local
~~~

### 참조 
https://git-scm.com/book/ko/v2/Git-서버-SSH-공개키-만들기