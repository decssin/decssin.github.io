---
layout: post
title: CentOS, Apache, PHP, MySQL 서버 세팅
date: 2018-07-16 23:51:00 +0900
description: 리눅스 (CentOS) USB 설치 및 아파치, PHP, MySQL 서버를 소스 설치하는 방법을 이야기합니다. # Add post description (optional)
img: lamp-server-setting.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [LAMP, SERVER]
---

리눅스 배포판 중 CentOS 6.10 버전과 아파치 2.4.33 버전 및 PHP 5.6.25, MySQL 5.6.30 버전을 직접 소스 설치하는 방법에 대한 내용입니다.

# Mac에서 CentOS 6.x 부팅 USB 만들기
#### 1. CentOS iso 파일 다운받기

http://www.centos.org/download/mirrors/ 이 URL에서 CentOS 미러 사이트를 찾아서 버전별 다운로드 합니다.

http://mirror.kakao.com/centos/6.9/isos/x86_64/ 카카오 미러 사이트를 예로 들을 경우, 해당 경로에서 minimal 버전으로 다운로드 받을 경우, 아무런 패키지 설치 없이 OS만 바로 다운로드 받을 수 있습니다.

#### 2. Device node 확인

부팅용으로 사용할 USB를 연결한 후 터미널에서 `diskutil list` 를 입력합니다. USB 이름이 보이는 위치가 USB가 마운트 된 위치입니다. 여기서는 `/dev/disk1` 을 예로 사용합니다.

#### 3. CentOS를 USB에 굽기

위에서 다운로드 받은 `CentOS-6.9-x86_64-minimal.iso` 가 있는 경로로 이동합니다. 터미널에서 `sudo dd if=CentOS-6.9-x86_64-minimal.iso of=/dev/disk1` 을 입력합니다. (Ctrl+t를 누르면 진행 상황을 알 수 있습니다.)

> USB에 굽기가 완료되면 서버에서 USB로 부팅을 하면 설치가 진행됩니다.

# CentOS 외부 접속을 위한 임시 네트워크 설정
직접적인 서버 설치 전, 외부에서 접속할 수 있도록 임시로 네트워크를 설정합니다. 여기서는 흔히 사용되는 iptime 을 네트워크로 연결해서 포트포워딩을 통한 내부 ip 접속을 시도합니다.

서버에 iptime을 연결하면, ₩192.168.0.x₩ 와 같은 내부 ip로 연결됩니다. 이 ip를 사용해서 원격 접속은 가능하지만, 내부 네트워크를 공유하고 있는 경우에 한해서 가능합니다.

공간적으로 완전히 분리된 곳에서도 서버에 접속을 하려면, iptime 자체 내에서 제공하는 외부 연결 기능을 사용하면 됩니다.

1. 192.168.0.1 접속
2. 고급설정 - 특수기능 - DDNS 설정에서 외부 접속 DNS를 지정해줍니다.
![lamp-server-setting-1](/assets/img/lamp-server-setting-1.jpg)
3. 외부에서 관리자 페이지로 들어오기 위한 포트 번호를 설정합니다. 위에서 지정한 DDNS와 함께 ***.iptime.org:[포트번호] 로 접속할 수 있습니다.
![lamp-server-setting-2](/assets/img/lamp-server-setting-2.jpg)
4. NAT/라우터 관리 - 포트포워드 설정에서, 서버에서 사용할 포트를 지정해줍니다. 내부 ip를 통한 외부 접속이기 때문에 사용할 모든 포트를 연결해주어야 합니다. ssh (22번 포트), mysql (3306번 포트), http (80번 포트)
![lamp-server-setting-2](/assets/img/lamp-server-setting-3.jpg)

네트워크 연결이 다 되었다면, 
~~~
sss 서버계정@서버ip
~~~
위와 같이 연결이 됩니다. 또 다른 방법으로는
~~~
1. ssh 서버계정@***.iptime.org
2. ssh 서버계정@동적 외부 IP 주소 (iptime 관리자 페이지에서 확인)
~~~

# Apache Source 설치 (v.2.4.33)

1. 기존 설치 된 아파치를 제거합니다.
~~~
yum remove -y httpd httpd-*
~~~

2. 빌드를 위한 패키지를 인스톨 합니다.
~~~
yum install -y make gcc g++ gcc-c++ autoconf automake libtool pkgconfig findutils oepnssl openssl-devel openldap-devel pcre-devel libxml2-devel lua-devel curl curl-devel libcurl-devel flex wget
~~~

3. 아파치 관련 파일 다운로드 합니다.
~~~
cd /usr/local/src
wget http://ftp.neowiz.com/apache/httpd/httpd-2.4.33.tar.bz2
wget http://ftp.neowiz.com/apache/apr/apr-1.6.3.tar.bz2
wget http://ftp.neowiz.com/apache/apr/apr-util-1.6.1.tar.bz2
wget http://downloads.sourceforge.net/project/pcre/pcre/8.41/pcre-8.41.tar.bz2
~~~

4. 압축 파일을 풀어줍니다.
~~~
tar xvf apr-1.6.3.tar.bz2
tar xvf apr-util-1.6.1.tar.bz2
tar xvf httpd-2.4.33.tar.bz2
tar xvf pcre-8.41.tar.bz2
mv apr-1.6.2 ./httpd-2.4.33/srclib/apr
mv apr-util-1.6.0 ./httpd-2.4.33/srclib/apr-util
~~~

5. pcre 설치합니다.
~~~
cd /usr/local/src/pcre-8.41
./configure
make
make install
~~~

6. 아파치 설치합니다.
~~~
cd /usr/local/src/httpd-2.4.33
./configure --prefix=/usr/local/apache2
make
make install
~~~
> `/usr/local/apache2`가 아파치 홈 폴더가 됩니다.
`configure: error: Cannot use an external APR-util with the bundled APR` 오류가 발생하면 `./configure --prefix=/usr/local/apache2 --with-included-apr` 를 합니다.

7. Apache 서비스 등록하고 실행합니다.
~~~
cp /usr/local/apache/bin/apachectl /etc/init.d/httpd 
vi /etc/init.d/httpd
~~~

vi 에디터로 httpd 파일이 열리면 아래 내용을 주석 그대로 추가합니다.
~~~
#!/bin/sh 
#
# chkconfig: 2345 90 90 
# description: init file for Apache server daemon
# processname: /usr/local/apache/bin/apachectl 
# config: /usr/local/apache/conf/httpd.conf 
# pidfile: /usr/local/apache/logs/httpd.pid
#
# Licensed to the Apache Software Foundation ...
~~~

httpd.conf 파일을 열어서 ServerName 부분을 찾아서 주석을 제거하고 서버명을 입력하고 unique_id_module 부분을 주석 처리합니다.
~~~
vi /usr/local/apache/conf/httpd.conf

...

ServerName localhost

...

#LoadModule unique_id_module modules/mod_unique_id.so
~~~

서비스 등록 후 아래와 같이 서비스 시작이 가능합니다.
~~~
service httpd start

...

ps -ef | grep httpd

...

# 자동시작 설정
chkconfig httpd on

...

chkconfig | grep httpd
~~~

8. 방화벽 설정

CentOS 7 부터는 방화벽으로 iptables를 사용하지 않고, firewalld를 사용합니다. 여기서는 6.x 버전을 사용하기에 iptables로 합니다.

~~~
lokkit --selinux=disabled --disabled
iptables -L
iptables -F; iptables -X

# 리스트 호출 시 target에 REJECT, ACCEPT 부분이 나오지 않습니다.
~~~

httpd를 시작할 때 아래와 같이 오류가 나오는 경우가 있습니다. `httpd: apr_sockaddr_info_get() failed for ABC` 이런 경우에는 다음과 같이 하면 됩니다.
~~~
vi /etc/hosts

...

127.0.0.1 localhost localhost.localdomain localhost4 localhost4.localdomain4 ABC

...

service httpd restart

# apache/conf/httpd.conf 파일에 ServerName 주석 풀고 127.0.0.1 써도 됩니다.
~~~

# MySQL Source 설치

1. 기존에 설치 된 MySQL 과 cmake 삭제합니다.
~~~
yum remove -y mysql* cmake
~~~

2. 다운로드를 위한 패키지 인스톨 합니다.
~~~
yum install -y zlib zlib-devel cpp perl bison freetype freetype-devel freetype-utils ncurses-devel libtermcap-devel bzip2-devel
~~~

3. cmake 다운로드 합니다.
MySQL 5.5 부터는 `./configure` 가 아닌 `cmake` 를 통해 컴파일을 진행합니다.
~~~
cd /usr/local/src wget
https://cmake.org/files/v3.5/cmake-3.5.2.tar.gz 
tar xvfz cmake-3.5.2.tar.gz
cd cmake-3.5.2
./bootstrap
make && make install
~~~

4. MySQL 그룹 및 계정을 만듭니다.
~~~
groupadd mysql
useradd -g mysql mysql
~~~

5. MySQL 다운로드 합니다.
~~~
cd /usr/local/src wget http://dev.mysql.com/get/Downloads/MySQL-5.6/mysql-5.6.30.tar.gz tar xvfz mysql-5.6.30.tar.gz cd mysql-5.6.30
~~~

6. MySQL cmake 컴파일을 진행합니다.
~~~
/usr/local/bin/cmake \ 
-DCMAKE_INSTALL_PREFIX=/usr/local/mysql \ // mysql 설치 디렉토리
-DDEFAULT_CHARSET=utf8 \ 
-DDEFAULT_COLLATION=utf8_general_ci \ 
-DWITH_EXTRA_CHARSETS=all \ 
-DENABLED_LOCAL_INFILE=1 \ 
-DMYSQL_DATADIR=/usr/local/mysql/data \ // db data 디렉토리
-DMYSQL_USER=mysql \ 
-DWITH_INNOBASE_STORAGE_ENGINE=1 \ 
-DWITH_ARCHIVE_STORAGE_ENGINE=1 \ 
-DWITH_BLACKHOLE_STORAGE_ENGINE=1 \ 
-DWITH_PERFSCHEMA_STORAGE_ENGINE=1 \ 
-DMYSQL_UNIX_ADDR=/usr/local/mysql/mysql.sock \ 
-DMYSQL_TCP_PORT=3306 

make 
make install
~~~

7. MySQL 그룹:계정 권한 설정합니다.
~~~
chown -R (계정명):(그룹명) /usr/local/mysql 
chown -R mysql:mysql /usr/local/mysql 
chown -R mysql:mysql /usr/local/mysql/data
~~~

8. DB 생성합니다.
~~~
cd /usr/local/mysql
./scripts/mysql_install_db --user=mysql --datadir=/usr/local/mysql/data
~~~

9. MySQL 설정 파일 및 데몬 복사, base, datadir을 지정합니다.
~~~
cp support-files/my-default.cnf /etc/my.cnf 
#(메모리 용량에 따라 my- 뒤에 이름이 다를 수 있습니다.) 
#(이미 존재하는 파일이라면 덮어씌우면 됩니다.) 

cp support-files/mysql.server /etc/init.d/mysqld 
chmod 755 /etc/init.d/mysqld 

vi /etc/init.d/mysqld 
#입력 후 아래 내용 추가 
#basedir=/usr/local/mysql 
#datadir=/usr/local/mysql/data
~~~

10. 환경 변수 등록 및 MySQL 데몬을 실행합니다.
~~~
cd ~ 
vi .bash_profile 

#PATH부분에 아래 내용을 추가한다 
PATH=$PATH:$HOME/bin:/usr/local/mysql/bin 

source .bash_profile 
service mysqld start
~~~

11. MySQL root 계정 비밀번호를 변경합니다.
~~~
# mysqladmin -u root password 암호 
mysqladmin -u root password root123 

암호 설정 후 root 유저로 접속 테스트 
mysql -u root -p 
Enter password : 
~~~

12. 리눅스 시작시 자동 구동되도록 설정합니다.
~~~
chkconfig --add mysqld 
chkconfig mysqld on 
chkconfig --list mysqld
~~~

# MySQL 원격 접속 허용
외부 클라이언트에서 MySQL 접속을 하면 아래와 같은 에러가 나올 때가 있습니다.
~~~
Host '135.79.246.80' is not allowed to connect to this MySQL server
~~~

mysql 접속해서 아래 쿼리를 작성해보면, localhost에서만 접속되도록 표시되어 있습니다.
~~~
SELECT Host,User,authentication_string FROM mysql.user;
~~~

모든 IP를 허용하는 계정을 만들 수 있습니다.
~~~
INSERT INTO mysql.user (host,user,authentication_string,ssl_cipher, x509_issuer, x509_subject) VALUES ('%','root',password('패스워드'),'','','');
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
FLUSH PRIVILEGES;

// '111.222.%' 와 같이 특정 IP 대역만 허용할 수 있습니다.
~~~

모든 IP를 허용한 계정은 아래와 같이 삭제합니다.
~~~
DELETE FROM mysql.user WHERE Host='%' AND User='root';
FLUSH PRIVILEGES;
~~~

# PHP Source 설치를 진행합니다.

1. 설치를 위한 패키지를 인스톨합니다.
~~~
yum install -y libjpeg libjpeg-devel libjpeg-turbo-devel gd gd-devel gdbm-devel php-mbstring libexif-devel libmcrypt libmcrypt-devel libvpx libvpx-devel libXpm libXpm-devel icu libicu libicu-devel t1lib t1lib-devel gmp-devel mhash* gettext gettext-devel libtidy libtidy-devel libxslt libxslt-devel libedit-devel libc-client libc-client-devel pam-devel readline-devel libpng libpng-devel krb5-devel db4-devel expat*
~~~

CentOS 에서는 `libmcrypt & libmcrypt-devel` 패키지가 yum에 포함되어 있지 않기 때문에 직접 설치합니다.
~~~
cd /usr/local/src 
wget http://elders.princeton.edu/data/puias/unsupported/6/x86_64/libmcrypt-2.5.8-9.puias6.x86_64.rpm 
wget http://elders.princeton.edu/data/puias/unsupported/6/x86_64/libmcrypt-devel-2.5.8-9.puias6.x86_64.rpm 
rpm -ivh libmcrypt-2.5.8-9.puias6.x86_64.rpm 
rpm -ivh libmcrypt-devel-2.5.8-9.puias6.x86_64.rpm
~~~

2. MySQL 라이브러리 참조 링크를 만듭니다.
~~~
cd /usr/local/mysql 
ln -s lib lib64
~~~

3. PHP를 다운로드 및 컴파일 합니다.
~~~
cd /usr/local/src 
wget http://kr1.php.net/get/php-5.6.25.tar.gz/from/this/mirror 
tar xvfz mirror 
cd php-5.6.25 ./configure --prefix=/usr/local/php \ 
--with-apxs2=/usr/local/apache2/bin/apxs \ 
--with-config-file-path=/usr/local/apache2/conf \ 
--with-mysql=/usr/local/mysql \ 
--with-mysql-sock=/usr/local/mysql \ 
--with-mysqli=/usr/local/mysql/bin/mysql_config \ 
--with-pdo-mysql=/usr/local/mysql \ 
--with-regex=php \ 
--with-libxml-dir=/usr \ 
--with-openssl --with-pcre-regex --with-zlib \ 
--with-bz2 --with-curl --with-gdbm \ 
--with-db4=/usr --with-dbm --with-pcre-dir=/usr --with-openssl-dir=/usr \ 
--with-libxml-dir=/usr --with-gd --with-vpx-dir=/usr --with-jpeg-dir=/usr \ 
--with-png-dir=/usr --with-zlib-dir=/usr --with-xpm-dir=/usr --with-freetype-dir=/usr \ 
--with-t1lib=/usr --with-gettext --with-gmp --with-mhash --with-imap \ 
--with-imap-ssl --with-kerberos --with-icu-dir=/usr --with-ldap \ 
--with-ldap-sasl --with-libmbfl --with-onig --with-mcrypt \ 
--with-libedit --with-readline --with-tidy --with-libexpat-dir=/usr \ 
--with-xmlrpc --with-xsl --with-pear --with-pic --with-libdir=lib64 \ 
--enable-bcmath --enable-calendar --enable-exif \ 
--enable-ftp --enable-pcntl --enable-gd-native-ttf \ 
--enable-gd-jis-conv --enable-intl --enable-mbstring \ 
--enable-shmop --enable-sockets --enable-sysvmsg \ 
--enable-sysvsem --enable-sysvshm --enable-wddx \ 
--enable-zip --enable-mysqlnd --enable-dba=shared \ 
--enable-mod-charset --enable-dom --enable-mbregex \ 
--enable-inline-optimization --enable-sigchild --enable-soap \ 
--enable-maintainer-zts --enable-opcache=nom 

make 
make install
~~~

4. PHP 환경 설정을 수정합니다.
~~~
cp php.ini-production /etc/httpd/php.ini 
vi /etc/httpd/php.ini

...

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; 
;;;     Module Settings     ;;; 
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; 

[Date] 
date.timezone = "Asia/Seoul"
~~~

5. Apache 환경 설정을 수정합니다.
~~~
vi /usr/local/apache/conf/httpd.conf 

# httpd.conf 내에서 PHP모듈이 정상적으로 추가되어있는지 확인 (자동으로 연동되어 등록됨) 
LoadModule php5_module modules/libphp5.so 

#<IfModule dir_module>을 찾아 아래 내용 추가 
<IfModule dir_module> 
     DirectoryIndex index.html index.htm index.php index.cgi
</IfModule> 

#<IfModule mime_module> 을 찾아 아래 내용 추가 
<IfModule mime_module> 
     AddType application/x-compress . z 
     AddType application/x-gzip . gz . tgz 
     AddType application/x-httpd-php .php .php3 .php4 .php5 .phtml    .html .htm .inc 
     AddType application/x-httpd-source .phps 
</IfModule> 

#httpd.conf 저장한 뒤 
/etc/init.d/httpd restart
~~~

6. 환경변수를 등록합니다.
~~~
cd ~ 
vi .bash_profile 

#PATH부분에 아래 내용을 추가한다 
PATH=$PATH:$HOME/bin:/usr/local/mysql/bin:/usr/local/php/bin 

#.bash_profile 저장한 뒤 

source .bash_profile
~~~

7. 연동 확인합니다.
~~~
vi /usr/local/apache/htdocs/phpinfo.php 

<?php phpinfo(); ?> 

# 입력 후 저장
~~~

# 아파치에서 htaccess 사용 설정

2가지 정도 확인해 보면 됩니다.

1. mod_rewrite 모듈이 활성화 되어 있는가?
2. htaccess 파일이 정상적으로 동작이 되고 있는가?

(1번 문제)
httpd.conf 파일에서 `LoadModule rewrite_module modules/mod_rewrite.so` 주석이 없어야 합니다.

(2번 문제)
httpd.conf 파일에서, 웹 루트의 Directory 옵션에 AllowOverride All 로 설정되어 있는지 확인합니다.