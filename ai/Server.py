from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from pydantic import BaseModel
from ObjectiDetection import ObjectDetection

app = FastAPI()

class ImageRequest(BaseModel):
    image_path: str
    answer: str


@app.post("/")
async def get_image(request: ImageRequest):
    try:
        # 이미지 파일 경로와 answer 받기
        File = FileResponse(request.image_path, media_type="image/jpeg")
        answer = request.answer
        return ObjectDetection(File, answer)

    except Exception as e:
        # 예외 처리 열심히
        raise HTTPException(status_code=404, detail="Image not found")
