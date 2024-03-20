from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from pydantic import BaseModel
from ObjectiDetection import ObjectDetection
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS 미들웨어 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 모든 출처에서의 요청 허용 (* 대신에 특정 출처를 명시할 수 있음)
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

class ImageRequest(BaseModel):
    picture: str
    question_name: str

@app.post("/")
async def get_image(request: ImageRequest):
    try:
        # 이미지 파일 경로와 answer 받기
        File = FileResponse(request.picture, media_type="image/jpeg")
        answer = request.question_name
        return ObjectDetection(File, answer)

    except Exception as e:
        # 예외 처리
        raise HTTPException(status_code=404, detail="Image not found")