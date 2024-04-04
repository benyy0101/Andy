```bash
ArtBridge 프로젝트
├── I. GitLab 소스 클론 이후 빌드 및 배포할 수 있도록 정리한 문서
│   ├── 1. 프로젝트 개요
│   ├── 2. 프로젝트 사용 도구
│   └── 3. 개발환경
│       ├── [BackEnd]
│       ├── [FrontEnd]
│       ├── [AI]
│       └── [Infra]
├── EC2 Server 설정사항
├── 쉽게 실행하는 방법
├── 각각 실행하는 방법
│   ├── II. MySQL 빌드 및 배포
│   ├── II. Login 빌드 및 배포
│   ├── II. Solution 빌드 및 배포
│   ├── II. MyPage 빌드 및 배포
│   ├── II. FrontEnd 빌드 및 배포
│   ├── II. AI 서버 빌드 및 배포
│   ├── II. Jenkins 빌드 및 배포
│   └── II. nginx 빌드 및 배포
├── II. 프로젝트에서 사용하는 외부 서비스 정보를 정리한 문서
└── III. DB 덤프 파일 최신본
    └── 4. 서비스 이용 방법
        ├── 1. 회원가입 과정
        ├── 2. 로그인 과정
        ├── 3. 마이페이지 이용
        ├── 4. 리뷰 관리
        ├── 5. 작품 등록
        ├── 6. 경매 등록
        ├── 7. 경매 진행
        ├── 8. 작가 목록 확인
        └── 9. 미니홈피
```
# 목차
## I. Gitlab 소스 클론 이후 빌드 및 배포할 수 있도록 정리한 문서
### 1. 프로젝트 개요    
여러분들은 신진 작가들의 작품을 발굴하고 싶은 생각을 해보신 적 있나요? ArtBrdige는 작가와 팬간의 소통 및 거래 커뮤니티 공간 플랫폼입니다. ArtBridge와 함께라면, 원하는 작가의 작품을 구독하고, 쉽게 작품을 구매할 수 있습니다.
### 2. 프로젝트 사용 도구
- 이슈 관리 : JIRA
- 형상 관리 : Gitlab
- 코드 리뷰 : Gerrit
- API 테스트 : PostMan
- 커뮤니케이션 : Notion,Mattermost
- 디자인 : Figma
- CI/CD : Jenkins

### 3. 개발환경
##### [BackEnd]
- SpringBoot : 3.2.3
- Spring Web : 6.1.5
- Spring Data JPA : 3.2.4
- Spring Security : 3.2.4
- JJWT : 0.11.5
- JDK : 17.0.9
- JPA(QueryDsl) : 5.0.0
- DB : MYSQL (Ver 8.3.0 for Linux on x86_64 (MySQL Community Server - GPL)
- ImageDB : S3
- MemoryDB : Redis 7.2.4
##### [FrontEnd]
- next: 14.1.2
- next-pwa: 5.6.0
- react: 18.2.0
- typescript: 5
- zustand: 4.5.2
- framer-motion: 11.0.14
- @tanstack/react-query: 5.24.8
- tailwindcss: 3.3.0
- eslint-config-airbnb-base: 15.0.0
##### [AI]
- python 3.12.0
- FastAPI 0.110.0
- TensorFlow 2.3.0
- OpenCV 4.9.0
##### [Infra]
- SERVER : AWS EC2 Ubuntu 20.04.6 LTS
- Docker : 25.0.4
- ProxyWebServer : Nginx/1.25.4

##### [최종 배포 환경]
- SERVER : AWS EC2 
  - Docker  
    - ProxyWebServer : Nginx
        - FrontServer (Next.js)
        - LoginServer (SpringBoot)
        - MyPageServer (SpringBoot)
        - SolutionServer (SpringBoot)
        - AiServer (FastAPI)
    - DB : MYSQL
    - ImageDB : S3
    - MemoryDB : Redis 
    - Jenkins

## EC2 Server 설정사항
- 6379,3307,443,80 Port allow
- SSL 인증서 발급 
(참고 사이트 https://velog.io/@pdohyung/EC2%EC%97%90%EC%84%9C-%EB%8F%84%EB%A9%94%EC%9D%B8%EC%97%90-NGINX-HTTPS-%EC%A0%81%EC%9A%A9)
- "docker network create deploy" 도커 공유네트워크 생성

## 쉽게 실행하는 방법
- start.sh 실행

## 각각 실행 하는 방법

## II . MySQL 빌드 및 배포
### 1. 환경변수 형태
1. sudo mkdir mysql
### 2. 빌드하기
### 3. 배포하기
1. docker run -p 3306:3306 -v /home/ubuntu/mysql:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD='ssafy102!' --name mysql mysql:latest

## II . Login 빌드 및 배포
### 1. 환경변수 형태
1. jar파일이 없을 시 jar파일 생성후 빌드
### 2. 빌드하기
1. docker build -t login .
### 3. 배포하기
1. docker run -d --network deploy --name AndyLogin login

## II . Solution 빌드 및 배포

### 1. 환경변수 형태
-  jar파일이 없을 시 jar파일 생성후 빌드
- Solution 폴더에 resources파일에 SSL 통신을 하기위한 Cert파일이 존재
- 해당파일을 통신할 사이트 crt로 바꿔야함
- Dockerfile의 해당 파일명도 바꿔줘야 함
### 2. 빌드하기
- docker build -t solution .
### 3. 배포하기
- docker run -d --network deploy --name Solution solution

## II . MyPage 빌드 및 배포
### 1. 환경변수 형태
-  jar파일이 없을 시 jar파일 생성후 빌드
### 2. 빌드하기
-  docker build -t mypage .
### 3. 배포하기
- docker run -d --network deploy --name MyPage mypage

## II . FrontEnd 빌드 및 배포
### 1. 환경변수 형태	
### 2. 빌드하기
빌드를 위해서는 다음 명령어를 실행하세요:
- docker build -t react .
### 3. 배포하기
- docker run -d --network deploy --name Andy react

## II . AI 서버 빌드 및 배포
### 1. 환경변수 형태
### 2. 빌드하기
- docker build -t detection .
### 3. 배포하기
- docker run -d --network deploy --name Detection detection

## II . Jenkins 빌드 및 배포
### 1. 환경변수 형태
- sudo mkdir lastjenkins
### 2. 빌드하기
### 3. 배포하기
- docker run  --network deploy --name Jenkins -e JENKINS_OPTS="--prefix=/Jenkins" -v /var/run/docker.sock:/var/run/docker.sock -u root -v /home/ubuntu/lastjenkins:/var/jenkins_home jenkins/jenkins:lts


## II . nginx 빌드 및 배포
### 1. 환경변수 형태
- sudo mkdir nginx
### 2. 빌드하기
- cd S10P12A207/nginx
- docker build -t proxynginx .
### 3. 배포하기
- docker run -p 80:80 -p 443:443 --name proxynginx -d --network deploy -v /home/ubuntu/nginx/default.conf:/etc/nginx/conf.d/default.conf -v /etc/letsencrypt/archive/j10a102.p.ssafy.io:/etc/nginx/ssl/ proxynginx



## 공통 환경변수

### Front
```
NEXT_PUBLIC_SERVER_URL = "AndyLoginURL"

NEXT_PUBLIC_LOGIN_URL = "AndyLoginURL"

NEXT_PUBLIC_API_KEY = "APIKEY"

NEXT_PUBLIC_KAKAO_REDIRECT_URL = "kakaoRedirectURL"

NEXT_PUBLIC_IMG_URL = "AndyLoginURL"

NEXT_PUBLIC_STATUS = dev

NEXT_PUBLIC_QUIZ_URL = "SolutionURL"

NEXT_PUBLIC_MYPAGE_URL = "MyPageURL"
```

### BackEnd
```
spring.datasource.url=
spring.datasource.username=
spring.datasource.password=
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=true
spring.mvc.contentnegotiation.media-types.json=application/json
server.port=8080

# File Size
server.tomcat.max-swallow-size=50MB
server.tomcat.max-http-post-size=50MB

spring.servlet.multipart.maxFileSize=50MB
spring.servlet.multipart.maxRequestSize=50MB

//redis
spring.data.redis.host=
spring.data.redis.port=
spring.data.redis.password=

server.servlet.context-path=

spring.jwt.secret=
spring.jwt.access-token-validity-in-seconds=3600
spring.jwt.refresh-token-validity-in-seconds=2592000
aes.secret-key=

logging.level.org.springframework.security=
//kakao
spring.security.oauth2.client.registration.kakao.client-id=

# AWS S3
cloud.aws.credentials.accessKey=
cloud.aws.credentials.secretKey=
cloud.aws.region.static=
cloud.aws.s3.bucket=
```

## 배포 시 특이사항
## DB 주요 계정 및 프로퍼티가 정의된 파일 목록

#### Mysql
아이디 : test01
비밀번호: 1234

#### Redis
비밀번호 : 1234

## II. 프로젝트에서 사용하는 외부 서비스 정보를 정리한 문서
- Kakao Login API
- https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#kakaologin

## III. DB 덤프 파일 최신본
Andy.sql

### 4. 서비스 이용 방법
서비스를 이용하는 방법은 다음과 같습니다:

# **테스트 케이스**

# 서비스 이용 방법 안내서

# 앱 사용 가이드

## 1. 앱 시작 및 카카오 로그인

- **1.1** '카카오 로그인'을 클릭합니다.
- **1.2** 카카오 계정 로그인 화면으로 이동한 뒤, 계정 정보를 입력하여 로그인을 완료합니다.
- **1.3** 로그인이 성공하면 자동으로 앱의 메인 페이지로 이동합니다.
- **1.4** 도움말 화면이 빠르게 표시됩니다.

## 2. 프로필 생성 및 선택

- **2.1** 프로필 선택 화면에서 '프로필 추가'를 클릭합니다.
- **2.2** 이름, 닉네임, 생일, 성별을 입력하고 '프로필 생성'을 클릭하여 프로필을 생성합니다.
- **2.3** 프로필이 성공적으로 생성된 후, 해당 프로필을 삭제합니다.
- **2.4** 프로필 리스트 페이지에서 게임을 진행할 프로필(김싸피)을 선택합니다.
- **2.5** 프로필을 선택한 후, 퀴즈 메인 페이지로 이동합니다.

## 3. 찰칵 퀴즈 진행

- **3.1** 메인 페이지에서 "찰칵 퀴즈"를 선택합니다.
- **3.2** 카테고리 선택 화면에서 "SSAFY"를 선택합니다.
- **3.3** 순서대로 브로콜리(O), 의자(O), 강아지(X), 노트북(O), 리모컨(O)을 진행합니다.
- **3.4** 점수를 확인합니다. (80점)
- **3.5** 확인 후 메인 페이지로 돌아갑니다.

## 4. 딸깍 퀴즈 진행

- **4.1** 메인 페이지에서 "딸깍 퀴즈"를 선택합니다.
- **4.2** 카테고리 선택 화면에서 "SSAFY"를 선택합니다.
- **4.3** 순서대로 브로콜리(O), 의자(O), 강아지(O), 노트북(O), 리모컨(O)을 진행합니다.
- **4.4** 문제의 정답을 확인한 뒤, '다음으로' 버튼을 눌러 이동합니다.
- **4.5** 점수를 확인합니다. (100점) 축하 메시지도 확인합니다.
- **4.6** 확인 후 메인 페이지로 돌아갑니다.

## 5. 다시 풀기

- **5.1** 메인 페이지에서 "다시 풀기"를 선택합니다.
- **5.2** 날짜와 퀴즈 모드에 일치하는 내용을 표시합니다.
- **5.3** 메인 페이지로 다시 돌아갑니다.

## 6. 마이페이지

- **6.1** 우측 상단에 위치한 프로필 이미지 버튼을 눌러 "마이페이지"로 이동합니다.
- **6.2** 더미 데이터를 사용하여 달력에 푼 날짜가 3일로 표시됩니다. (4/1, 4/2, 4/4)
- **6.3** 오늘이 아닌 이전 날짜를 달력에서 선택하여, 우측 하단에 상세 문제 기록을 확인합니다.
- **6.4** '프로필 수정하기'를 통해 닉네임과 이름을 수정한 후 완료합니다.
- **6.5** 변경된 프로필 정보를 확인합니다.

