from fastapi import FastAPI, File, Form, HTTPException
from pydantic import BaseModel
from ObjectiDetection import ObjectDetection
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

# CORS 미들웨어 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["j10a102.p.ssafy.io:3000", "https://j10a102.p.ssafy.io", "http://localhost:3000", "j10a102.p.ssafy.io:80", "j10a102.p.ssafy.io:8000"],  # 모든 출처에서의 요청 허용 (* 대신에 특정 출처를 명시할 수 있음)
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

class ImageRequest(BaseModel):
    picture: bytes
    question_name: str

@app.post("/object")
async def get_image(picture: bytes = File(...), question_name: str = Form(...)):
    try:

        # 객체 감지 함수 호출하여 결과 반환
        result = ObjectDetection(picture, question_name)

        return JSONResponse(content=result)

    except Exception as e:
        # 예외 처리
        raise HTTPException(status_code=404, detail="Image not found")
