---
layout: post
title: 최소한의 Git 사용법
tags: [git]
image: /assets/images/posts/2020-07-06-01.jpg
---

### 설치
* https://git-scm.com/downloads
​
### 사용자 설정
* git config --global user.name "YOUR_NAME"
* git config --global user.email YOUREMAIL@EXAMPLE.COM
​
### 원격 저장소 복사하기
*  git clone [원격저장소 주소] [설치할 디렉터리명]
​
### 브랜치 정보 조회
*  git branch -a
​
### 브랜치 생성하기
*  git branch test
​
### 브랜치 이동하기
* git checkout test
​
### 커밋할 파일 추가하기
* git add .
​
### 커밋하기
* git commit -m "commit message"
* 또는 git commit 후 메시지 작성
​
### 임시 저장하기
* git stash
​
### 임시 저장한 내용 불러오기
* git stash pop
​
### 병합하기
* git merge
​
### 원격 저장소에 보내기
* git push origin master
​
### 원격 저장소에서 가져오기
* git pull origin master
​
### 직전 커밋 상태로 돌아가기
* git checkout git-test.php
​
### 직전 커밋 다시하기 (예시)
1. git add git-test.php 
2. git commit -m "1차 커밋"
3. /* 수정할 내용을 적용해서 저장 */
4. git add git-test.php
5. git commit --amend
​
### 직전 커밋보다 더 과거 커밋으로 돌아가기
* git log
* git revert <COMMIT ID>
   * 되돌릴 시점의 코드를 가져와서 새로 커밋
   * 충돌 발생 시, 해결 후 커밋

### SSH 공개키 만들기

> 많은 Git 서버들은 SSH 공개키로 인증합니다. 공개키를 사용하려면 일단 공개키를 만들어야 합니다. 공개키를 만드는 방법은 모든 운영체제가 비슷합니다. 먼저 키가 있는지부터 확인합니다. 사용자의 SSH 키들은 기본적으로 사용자의 ~/.ssh 디렉토리에 저장합니다. 디렉토리의 파일을 살펴보면 이미 공개키가 있는지 확인할 수 있습니다.

~~~
$ cd ~/.ssh
$ ls
authorized_keys2 id_dsa known_hosts config id_dsa.pub
~~~

`id_dsa`나 `id_rsa`라는 파일 이름이 보일 것이고 이에 같은 파일명의 `.pub` 라는 확장자가 붙은 파일이 하나 더 있을 것입니다. 그중 `.pub` 파일이 공개키이고 다른 파일은 개인키입니다. 만약 이 파일들이 없거나 `.ssh` 디렉토리도 없으면 `ssh-keygen` 이라는 프로그램으로 키를 생성해야 합니다. `ssh-keygen` 프로그램은 Linux나 Mac의 SSH 패키지에 포함돼 있고 Windows는 Git for Windows 안에 들어 있습니다.

~~~
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/path/.ssh/id_rsa):
Created directory '/home/path/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/path/.ssh/id_rsa.
Your public key has been saved in /home/path/.ssh/id_rsa.pub.
The key fingerprint is:
d0:82:24:8e:d7:f1:bb:9b:33:53:96:93:49:da:9b:e3 path@laptop.local
~~~

### 참조 
 * https://git-scm.com/book/ko/v2/Git-서버-SSH-공개키-만들기

`.ssh/id_rsa` 키를 저장하고 싶은 디렉토리를 입력하고 암호를 두 번 입력합니다. 이때 암호를 비워두면 키를 사용할 때 암호를 묻지 않습니다.
다음은 사용자가 자신의 공개키를 Git 서버 관리자에게 보내야 합니다. 사용자는 `.pub` 파일의 내용을 복사하여 이메일을 보내기만 하면 됩니다. 공개키는 아래와 같이 생겼습니다.

~~~
$ cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSU
GPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3
Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XA
t3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/En
mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbx
NrRFi9wrf+M7Q== path@laptop.local
~~~

### 초기 설정 (서버, 로컬 동일)
1. `git config --global user.name 'Name'`
2. `git config --global user.name email@example.com`
3. `git config --list` _설정 확인_
4. ~~Bare 저장소 없이 push 하려면 다음을 추가: git config receive.denyCurrentBranch ignore~~

### 서버에서 실행
1. 프로젝트 폴더에서 git 사용하기 위한 설정 : `git init`
2. 초기에는 git 저장을 위해 다음을 실행 : `git add *` -> `git commit -m "init commit"` -> `git push`
3. Bare 저장소 만들기 : `git clone --bare my_project my_project.git`
4. ~~Bare 저장소 접근 권한 설정을 위해, 다른 경로로 복사 : scp -r my_project.git root@ip:/srv/git/my_project.git~~
5. ~~자동으로 그룹 쓰기 권한 추가를 위해 Bare 저장소에서 다음을 실행 : git init --bare --shared~~

### 로컬에서 실행
1. 프로젝트 폴더 클론 : `git clone root@ip:/path/my_project.git`
2. 프로젝트를 수정하고 저장 : `git add *` -> `git commit -m "commit"` -> `git push`
3. 수정 된 프로젝트 당겨오기 : `git pull`

_'push', 'fetch', 'merge', 'pull' 명령어는 서버 정보 없이 바로 처리_

---

### 작업 순서 1 (로컬에서 수정 -> Bare 저장소에서 확인 -> 서버에서 적용)
1. 로컬에서 클론 후 프로젝트 수정하고 저장 : `git clone (Bare 저장소)` -> ... -> `git push`
2. Bare 저장소에서 변경 사항 확인 및 비교 :  `git log`, `git show`
3. 서버 프로젝트에 변경 사항 적용 : `git fetch /path/my_project.git` -> `git pull /path/my_project.git`

### 작업 순서 2 (서버에서 수정 -> Bare 저장소에서 확인 -> 로컬에서 적용)
1. 서버에서 수정한 프로젝트를 Bare 저장소에 저장 : `git push /path/my_project.git`
2. Bare 저장소에서 변경 사항 확인 및 비교 :  `git log`, `git show`
3. 로컬 프로젝트에 변경 사항 적용 : `git pull`

---

### ___그 외 git 명령어___
- `git show`
- `git status`
- `git shortlog`
- `git log`
- `git stage`
- `git fetch`
- `git merge`



### ___그 외 tip___
- 'git pull' 명령어는 'git fetch', 'git merge' 동시에 실행하는 역할, 안전하지 않습니다.
- 'clone' 할 때의 서버 계정이 Bare 저장소에 대한 쓰기 권한이 있어야 'push' 가능합니다.
- 같은 파일을 변경하여 'fetch' 할 경우, 에러 발생 => 'merge' 할 때, 모든 작업 내용이 포함 적용됩니다.

```
<<<<<<< HEAD
'merge' 명령어를 실행한 곳의 작업 내용이 표시됨.

=======
같은 작업을 했던 곳의 작업 내용이 표시됨.
>>>>>>> refs/remotes/origin/master
```