# 기본 이미지로 python 3.12.2을 사용
FROM python:3.12.2

# 작업 디렉토리 설정
WORKDIR /app

# 현재 디렉토리의 파일을 컨테이너의 /app에 복사
COPY . /app

# requirements.txt에 명시된 필요한 패키지를 설치
# RUN pip install --no-cache-dir -r requirements.txt

RUN pip install fastapi

RUN pip install uvicorn

RUN pip install matplotlib

RUN pip install cv2
# 컨테이너가 시작될 때 실행될 명령어
CMD ["uvicorn", "ObjectiDetection:app", "--port", "80"]

