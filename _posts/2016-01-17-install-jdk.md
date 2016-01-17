---
layout: post
title:  "JDK 설치"
permalink:  "install-jdk"
date:   2016-01-17 12:10:35 -0800
categories: tip
---

JDK를 설치하겠습니다.<br />
이미 컴퓨터에 JDK가 설치되어 있다면 이 과정은 건너뛰세요.<br />
그래도 가능한 JDK 최신 버전을 설치하기 바랍니다.<br />
<br />


## JDK 내려받기

(1) [java.oracle.com](http://java.oracle.com)&nbsp;웹 페이지에 갑니다. 다음 그림과 같이 메인 화면에서 ‘Java SE’ 링크를 클릭하세요.<br />
![image](https://40.media.tumblr.com/d9543aeeeb99a69db451fec393a05fe9/tumblr_inline_nzrpe9U0LK1tg5174_540.png)<br />
<br />


(2) 목록에서 Java SE 8u65의 JDK ‘DOWNLOAD’ 버튼을 클릭합니다.<br />
![image](https://41.media.tumblr.com/81fbecc6bde33be9274a8b678a84ff6d/tumblr_inline_nzrpffK4uk1tg5174_540.png)<br />
<br />


(3) 다운로드 페이지에서 라이센스 동의 항목을 체크합니다. 그리고 여러분이 사용하는 PC의 운영체제에 맞는 JDK 다운로드 링크를 선택합니다. 다음 그림에서는 64비트 윈도우10 운영체제에 설치할 JDK를 클릭하였습니다. 64비트 운영체제에 32비트용 JDK를 설치해도 아무런 문제가 없습니다. 다만, 이클립스를 설치할 때도 JDK 버전을 맞추어 설치하세요. 32비트 JDK에는 32비트 이클립스, 64비트 JDK에는 64비트 이클립스를 설치합니다.<br />
![image](https://41.media.tumblr.com/92d080f44e947ff8b6d3b4fe419cd8d3/tumblr_inline_nzrphspFHO1tg5174_540.png)<br />
<br />


## JDK 설치 실행

(4) 내려받은 JDK 설치 파일을 실행합니다. 설치 시작 화면이 출력되면 설치 중간에 JRE를 설치하라는 화면이 뜨고 계속 &lt;Next&gt; 버튼을 클릭하여 설치를 진행합니다.

* * *

## JDK 경로 설정

JDK 설치가 끝난 후 운영체제의 환경 변수에 JDK 설치 폴더에 경로와 JDK 실행 파일이 있는 bin 폴더를 등록해야 합니다.<br />
<br />


(5) 파일 탐색기에서 ‘내 PC’ 노드에 대해 오른쪽 버튼을 클릭하여 컨텍스트 메뉴를 띄웁니다. 그리고 [속성]을 클릭합니다. 시스템 정보 설정 창에서 [고급 시스템 설정]을 클릭합니다.<br />
![image](https://40.media.tumblr.com/e4eb4939d4aa6f20faa5e70b6dda59bd/tumblr_inline_nzrpscRMGK1tg5174_540.png)<br />
<br />


(6) 시스템 속성 창에서 ‘고급‘탭을 선택한 후, &lt;환경변수(N)...&gt; 버튼을 클릭합니다. 환경 변수 설정 창이 뜨면, 시스템 변수 영역에서 &lt;새로 만들기(W)...&gt; 버튼을 클릭합니다. 시스템 변수 영역에 JDK 정보를 등록하면 PC의 모든 사용자에 적용하게 됩니다. <br />
![image](https://41.media.tumblr.com/03a7c9a61e87a9c6988ba5a009e1decc/tumblr_inline_nzrq05LOQl1tg5174_540.png)<br />
<br />


JDK 설치 경로를 등록하기 전에 먼저 ‘JAVA_HOME’ 이라는 환경 변수가 있는지 먼저 확인하세요. 만약 있다면, 그 변수를 선택하여 &lt;편집(I)...&gt; 버튼을 누릅니다.<br />

(7) 변수 이름에 ‘JAVA_HOME’을 입력하고, 변숫값으로 JDK가 설치된 폴더 경로를 입력하고 &lt;확인&gt; 버튼을 누릅니다. JDK 설치 경로 예) C:\Program Files\Java\jdk1.8.0_65<br />
![image](https://41.media.tumblr.com/38cccec3b5c961d4e1f31b753eadc208/tumblr_inline_nzrq4owjr31tg5174_540.png)<br />
<br />


(8) 이제 JDK의 bin 폴더를 PATH 변수에 등록하겠습니다. PATH 변수를 새로 만드는 것이 아니라 기존의 값에다 JDK의&nbsp;bin 폴더 경로를 추가하는 것입니다. 시스템 환경 목록에서 ‘PATH’를 선택하고 &lt;편집(I)...&gt; 버튼을 클릭합니다. 기존의 값, 맨 앞에 ‘%JAVA_HOME%\bin’ 경로를 추가하고 세미콜론(;)을 붙입니다. &lt;확인&gt; 버튼을 눌러 변수 등록을 마칩니다.<br />
![image](https://40.media.tumblr.com/81eebe37034c3d5e9b940421ccb7536d/tumblr_inline_nzrq8vwEea1tg5174_540.png)<br />
<br />


## 환경 변수 등록 확인

JDK에 대한 환경 변수 등록이 잘 되었는지 확인해 보겠습니다.<br />



(9) 다음 그림과 같이 시작 버튼에 대해 오른쪽 버튼을 클하여 컨텍스트 메뉴를 띄웁니다. 메뉴에서 [명령 프롬프트]를 클릭합니다. 또는 윈도우 버튼 + R, cmd 입력.<br />
![image](https://41.media.tumblr.com/c6c84d34b7c0ba7d8b10e33c9fd7f6ac/tumblr_inline_nzrqj9KOyP1tg5174_540.png)<br />
<br />


(10) 명령 프롬프트 창에서 ‘echo %JAVA_HOME%’을 입력하여 JDK 설치 폴더가 제대로 등록되었는지 확인합니다. 그리고 ‘echo %PATH%’를 입력하여 PATH 경로에 JDK의 bin 폴더가 정확하게 추가되었는지 확인합니다. ‘java -version’을 입력하여 설치된 자바 버전을 확인합니다. ‘javac -version’을 입력하여 자바 컴파일러 버전을 확인합니다. 다음 그림과 같이 출력되면 정상 등록된 것입니다.<br />
![image](https://40.media.tumblr.com/8adedbb7e441f3178808b36b99d3355b/tumblr_inline_nzrqm0ClHk1tg5174_540.png)<br />
<br />


JDK 설치가 완료되었습니다.
