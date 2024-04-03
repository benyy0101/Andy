#!/bin/bash

# 에러 발생시 스크립트 종료
set -e

# Solution 서비스 빌드
echo "Building Solution service..."
cd Solution
./gradlew clean build -x test
cd ..

# MyPage 서비스 빌드
echo "Building MyPage service..."
cd MyPage
# MyPage 서비스가 Java 기반일 경우 예시입니다. 필요에 따라 변경하세요.
./gradlew clean build -x test
cd ..

# Login 서비스 빌드
echo "Building Login service..."
cd AndyLogin
# 예를 들어 Node.js 기반일 경우 npm을 사용할 수 있습니다.
npm install
npm run build
cd ..

echo "Starting docker-compose..."
docker-compose up --build

echo "All services are up and running."
