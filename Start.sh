#!/bin/bash

# 에러 발생시 스크립트 종료
set -e

# Solution 서비스 빌드
echo "Building Solution service..."
cd solution
./gradlew clean build -x test
cd ..

# MyPage 서비스 빌드
echo "Building MyPage service..."
cd mypage
# MyPage 서비스가 Java 기반일 경우 예시입니다. 필요에 따라 변경하세요.
./gradlew clean build -x test
cd ..

# Login 서비스 빌드
echo "Building MyPage service..."
cd login
# MyPage 서비스가 Java 기반일 경우 예시입니다. 필요에 따라 변경하세요.
./gradlew clean build -x test
cd ..

echo "Starting docker-compose..."
docker-compose up --build

echo "All services are up and running."
