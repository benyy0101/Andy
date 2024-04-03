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
빌드된 파일을 배포하기 위해서는 다음 절차를 따르세요
1. docker run -p 3306:3306 -v /home/ubuntu/mysql:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD='ssafy102!' --name mysql mysql:latest

## II . Login 빌드 및 배포
### 1. 환경변수 형태
1. jar파일이 없을 시 jar파일 생성후 빌드
### 2. 빌드하기
빌드를 위해서는 다음 명령어를 실행하세요:
1. docker build -t login .
### 3. 배포하기
빌드된 파일을 배포하기 위해서는 다음 절차를 따르세요
1. docker run -d --network deploy --name AndyLogin login

## II . Solution 빌드 및 배포

### 1. 환경변수 형태
1. jar파일이 없을 시 jar파일 생성후 빌드
### 2. 빌드하기
빌드를 위해서는 다음 명령어를 실행하세요:
1. docker build -t solution .
### 3. 배포하기
빌드된 파일을 배포하기 위해서는 다음 절차를 따르세요
1. docker run -d --network deploy --name Solution solution

## II . MyPage 빌드 및 배포

### 1. 환경변수 형태
1. jar파일이 없을 시 jar파일 생성후 빌드
### 2. 빌드하기
빌드를 위해서는 다음 명령어를 실행하세요:
1. docker build -t mypage .
### 3. 배포하기
빌드된 파일을 배포하기 위해서는 다음 절차를 따르세요
1. docker run -d --network deploy --name MyPage mypage

## II . FrontEnd 빌드 및 배포

### 1. 환경변수 형태
### 2. 빌드하기
빌드를 위해서는 다음 명령어를 실행하세요:
1. docker build -t react .
### 3. 배포하기
빌드된 파일을 배포하기 위해서는 다음 절차를 따르세요
1.  docker run -d --network deploy --name Andy react

## II . AI 서버 빌드 및 배포
### 1. 환경변수 형태
### 2. 빌드하기
1. docker build -t detection .
### 3. 배포하기
빌드된 파일을 배포하기 위해서는 다음 절차를 따르세요
2. docker run -d --network deploy --name Detection detection

## II . Jenkins 빌드 및 배포

### 1. 환경변수 형태
1. sudo mkdir lastjenkins
### 2. 빌드하기
### 3. 배포하기
빌드된 파일을 배포하기 위해서는 다음 절차를 따르세요:
1. docker run  --network deploy --name Jenkins -e JENKINS_OPTS="--prefix=/Jenkins" -v /var/run/docker.sock:/var/run/docker.sock -u root -v /home/ubuntu/lastjenkins:/var/jenkins_home jenkins/jenkins:lts


## II . nginx 빌드 및 배포
### 1. 환경변수 형태
1. sudo mkdir nginx
### 2. 빌드하기
1. cd S10P12A207/nginx
2. docker build -t mynginx .
### 3. 배포하기
빌드된 파일을 배포하기 위해서는 다음 절차를 따르세요:
1.docker run -p 80:80 -p 443:443 --name proxynginx -d --network deploy -v /home/ubuntu/nginx/default.conf:/etc/nginx/conf.d/default.conf -v /etc/letsencrypt/archive/j10a102.p.ssafy.io:/etc/nginx/ssl/ proxynginx

## II. 프로젝트에서 사용하는 외부 서비스 정보를 정리한 문서
- Kakao Login API
- https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#kakaologin

## III. DB 덤프 파일 최신본

### 4. 서비스 이용 방법
서비스를 이용하는 방법은 다음과 같습니다:
# **테스트 케이스**

1. **회원가입 과정**
    - 계정 생성을 위한 정보 입력 과정을 거칩니다.

2. **로그인 과정**
    - 회원가입한 계정으로 로그인을 시도합니다.

3. **마이페이지 이용**
    1. 프로필 사진 첨부: 마이페이지에서 개인 프로필 사진을 첨부하고, 업데이트된 프로필 사진을 확인합니다.
    2. 계정 정보 조회: 마이페이지에서 개인 정보를 조회하고, 정보의 정확성을 확인합니다.
    3. FAQ 확인: 자주 묻는 질문과 답변을 확인합니다.
    4. 나의 경매 일정 확인: 마이페이지에서 개인의 경매 일정을 조회하고, 일정 내용을 확인합니다.

4. **리뷰 관리**
    1. 리뷰 작성: 판매 내역에서 구매 확정 이후 리뷰를 작성하고, 작성된 리뷰가 정상적으로 등록됨을 확인합니다.
    2. 리뷰 상세 조회: 작성한 리뷰의 상세 내용을 조회하고, 내용의 정확성을 확인합니다.
    3. 리뷰 삭제: 작성한 리뷰를 삭제하고, 리뷰가 성공적으로 삭제됨을 확인합니다.

5. **작품 등록**
    1. 작품 등록: 새 작품 등록 페이지에서 이미지를 첨부하여 작품을 등록하고, 등록된 작품이 정상적으로 표시됨을 확인합니다.
    2. 페이지네이션 확인: 전체 등록 작품이 6개를 넘을 경우 등록한 작품이 페이지네이션에서 정확하게 표시되는지 확인합니다.
    3. 작품 사진을 클릭하여 상세 정보가 정확하게 표시되는지 확인합니다.

6. **경매 등록**
    1. 경매 등록: 경매 등록 페이지에서 작품을 작가만 등록 가능하고, 등록된 경매가 정상적으로 표시됨을 확인합니다.
    2. 경매 설명 작성: 경매 입장 시, 작성된 경매 설명과 이미지가 정확하게 표시됨을 확인합니다.

7. **경매 진행**
    1. 경매 참가자 확인: 경매에 작가, 참가자 모두가 참여하는 것을 확인합니다.
    2. 입찰 과정: 참가자가 입찰하고, 이후 낙찰되는 과정을 통해 입찰 결과가 정확하게 반영됨을 확인합니다.
    3. 세션 이동: 낙찰자와 작가는 다음 세션으로 이동하고, 세션 이동이 정상적으로 진행됨을 확인합니다.
    4. 대화 진행: 다음 세션에서 작가와 낙찰자가 소통하고, 채팅 내용 또한 정확하게 표시됨을 확인합니다.

8. **작가 목록 확인**
    - 작가 검색: 작가 목록에서 특정 작가의 대표 이미지를 확인합니다.

9. **미니홈피**
    1. 작가 이미지를 클릭할 경우 작가의 미니홈피로 이동하여 검색한 작가의 정보, 소통, 일 등을 확인 가능합니다.
    2. 작가의 말에서 공지를 작성할 수 있습니다.
    3. 일반 회원은 한줄 응원을 작성하고 내용이 반영됨을 확인합니다.


