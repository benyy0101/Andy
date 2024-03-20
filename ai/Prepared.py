import os
import urllib.request
import tarfile

# 디렉토리 생성
target_dir = "C:/Users/SSAFY/Desktop/image/test"
os.makedirs(target_dir, exist_ok=True)

# 파일 다운로드
url = "https://raw.githubusercontent.com/chulminkw/DLCV/master/data/image/beatles01.jpg"
file_path = os.path.join(target_dir, "beatles01.jpg")
urllib.request.urlretrieve(url, file_path)

# 디렉토리 생성
os.makedirs("C:/Users/SSAFY/Desktop/image/pretrained", exist_ok=True)

# 모델 다운로드
model_url = "http://download.tensorflow.org/models/object_detection/ssd_inception_v2_coco_2017_11_17.tar.gz"
model_file_path = "C:/Users/SSAFY/Desktop/image/pretrained/ssd_inception_v2_coco_2017_11_17.tar.gz"
urllib.request.urlretrieve(model_url, model_file_path)

# 구성 파일 다운로드
config_url = "https://raw.githubusercontent.com/opencv/opencv_extra/master/testdata/dnn/ssd_inception_v2_coco_2017_11_17.pbtxt"
config_file_path = "C:/Users/SSAFY/Desktop/image/pretrained/ssd_config_01.pbtxt"
urllib.request.urlretrieve(config_url, config_file_path)

# 모델 압축 해제
with tarfile.open(model_file_path, "r:gz") as tar:
    tar.extractall("C:/Users/SSAFY/Desktop/image/pretrained")