from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse

from main import print_hi

app = FastAPI()

@app.get("/")
async def get_image():
    # 이미지 파일 경로 설정
    image_path = "C:/Users/SSAFY/Desktop/image/test.jpg"  # 이미지 파일 경로를 실제 이미지 파일의 경로로 변경하세요.

    try:
        # 이미지 파일을 응답으로 반환
        
        return FileResponse(image_path, media_type="image/jpeg")
    except Exception as e:
        # 예외 처리 열심히
        raise HTTPException(status_code=404, detail="Image not found")
