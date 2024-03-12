# 기본 이미지로 node의 최신 LTS 버전을 사용합니다.
FROM node:lts as build-stage

# 작업 디렉토리 설정
WORKDIR /app

# 프로젝트 의존성 파일 복사
COPY package*.json ./

# 프로젝트 의존성 설치
RUN npm install

# 프로젝트 파일 복사
COPY . .

# React 앱 빌드
RUN npm run build

# Nginx를 사용하여 빌드된 앱 서비스
FROM nginx:stable-alpine as production-stage

# 빌드 단계에서 생성된 빌드 파일을 Nginx가 서비스할 수 있는 경로로 복사
COPY --from=build-stage /app/build /usr/share/nginx/html

# 80 포트 열기
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]

