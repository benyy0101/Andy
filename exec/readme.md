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

서비스 이용 방법 안내서
카카오 로그인
정상 로그인
서비스를 이용하기 위해서는 카카오 계정의 이메일과 비밀번호를 정확하게 입력 후 로그인 버튼을 클릭해야 합니다.
로그인이 성공적으로 이루어지면, 사용자는 자동으로 메인 페이지로 이동하게 됩니다.
로그인 실패
이메일이나 비밀번호를 잘못 입력한 경우, 화면에 오류 메시지가 표시됩니다.
입력 정보를 다시 확인하여 재로그인을 시도해야 합니다.
세션 관리
서비스 이용 중 일정 시간 동안 아무런 활동이 없을 경우, 사용자는 자동으로 로그아웃 됩니다.
이는 서비스의 안전성을 유지하기 위한 조치이므로, 주기적으로 활동하는 것이 좋습니다.
아동 프로필 관리
프로필 생성
사용자는 자녀의 이름(한글 25자 이내), 생년월일(YYYY-MM-DD 형식, 미래 날짜는 입력 불가), 성별을 입력하여 아동 프로필을 생성할 수 있습니다.
부적절한 입력은 자동으로 필터링됩니다.
프로필 수정
생성된 프로필의 이름, 생년월일, 성별 등의 정보를 수정할 수 있습니다.
수정 시에도 생성 때와 동일한 입력 규칙이 적용됩니다.
프로필 사진
조건에 맞는 사진(jpg, jpeg, png 형식 / 5MB 이하 / 600*600 픽셀 이하)을 업로드할 수 있습니다.
사진 교체 시 이전 사진은 자동으로 삭제됩니다.
로그인 및 프로필 선택
로그인을 성공한 후에는 자동으로 프로필 선택 화면으로 이동합니다.
여기서는 삭제되지 않은 프로필만 조회할 수 있으며, 프로필이 없는 경우에는 프로필 생성 화면으로 안내됩니다.
게임 모드 및 카테고리 선택
메인 페이지에서는 다양한 게임 모드(예: 퀴즈1, 퀴즈2 등)를 선택할 수 있습니다.
선택한 게임 모드에 따라 관련 카테고리를 선택하고 게임을 시작할 수 있습니다.
아동 프로필 삭제
프로필 삭제는 소프트 삭제 방식으로 처리되며, 데이터는 서버에 보존됩니다.
하지만, 사용자 인터페이스에서는 해당 프로필을 볼 수 없게 됩니다.
게임 공통 기능
TTS: 게임 중 특정 단어를 선택하면, TTS(Text-to-Speech) 기능을 통해 해당 단어의 발음을 들을 수 있습니다.
카메라: 게임 중 필요한 사진 촬영은 카메라를 통해 이루어집니다. 이 과정에서 연결 끊김 상태에 대한 처리도 포함되어 있습니다.
진행창: 게임의 진행 상태는 실시간으로 확인할 수 있는 진행창을 통해 표시됩니다.
게임 특정 기능
게임 A (이름 → 사진): 사용자는 지정된 카테고리에 속하는 객체를 촬영하여 인식해야 하는 게임입니다.

게임 B (사진 → 이름): 사진을 보고 해당 객체의 이름을 입력하는 게임입니다. 이 게임에서는 입력 글자 수가 30자로 제한됩니다. 이는 사용자가 사진을 보고 객체의 이름을 정확하게 기억하고 입력하는 능력을 테스트하는 방식입니다.
오답노트 및 문제 기록
오답노트: 오답노트 페이지를 통해 사용자는 자신이 틀린 문제들을 복습할 수 있습니다. 이는 학습 효과를 극대화하기 위한 기능으로, 잘못된 답변을 다시 검토하고 올바른 지식을 확립하는 데 도움을 줍니다.

문제 기록: 사용자는 문제 기록을 통해 자신의 학습 이력을 월별, 일별로 조회할 수 있습니다. 이를 통해 학습 패턴을 분석하고, 앞으로의 학습 계획을 세우는 데 유용한 정보를 얻을 수 있습니다.

이러한 다양한 기능을 통해 사용자는 서비스를 보다 효과적으로 이용할 수 있습니다. 게임을 즐기면서 자연스럽게 학습 효과를 얻을 수 있는 구조로 설계되어 있으며, 아동의 인지 발달과 학습 능력 향상에 기여할 수 있도록 다양한 콘텐츠와 기능을 제공합니다.

서비스 이용 방법에 대한 이 안내서를 참고하여 서비스를 원활하게 이용하시길 바랍니다. 추가적인 질문이나 궁금한 점이 있으시면 언제든지 문의해 주세요. 우리 서비스는 사용자의 편의성과 학습 효과를 최우선으로 고려하여 지속적으로 개선해 나가고 있습니다. 사용자 여러분의 적극적인 피드백을 기다리고 있습니다.

