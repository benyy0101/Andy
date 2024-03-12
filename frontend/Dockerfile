# 기본 이미지로 node의 최신 LTS 버전을 사용합니다.
FROM node:20.11.1 as build-stage

# 작업 디렉토리 설정
WORKDIR /app

# 프로젝트 의존성 파일 복사
COPY package*.json ./

# 프로젝트 의존성 설치
RUN npm install

# 프로젝트 파일 복사
COPY . .

# Next 앱 빌드
RUN npm run build

# 서버 실행을 위한 포트 설정. Next.js의 기본 포트는 3000입니다.
EXPOSE 3000

# Next.js 서버 실행
CMD ["npm", "start"]
