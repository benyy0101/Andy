import matplotlib.pyplot as plt
import os
import cv2


def ObjectDetection(image_Source, answer):

    print(image_Source)

    with open("image.jpg", "wb") as f:
        f.write(image_Source)

    # 학습된 객체 탐지 모델을 불러온다.
    cv_net = cv2.dnn.readNetFromTensorflow(
        # 학습된 모델이 있는 곳은 여기.
        './pretrained/Andy_basedOn_YOLO/frozen_inference_graph.pb',
        './pretrained/Andy_config.pbtxt')

    print("Check OK")

    # 탐지된 모델에 대한 레이블
    labels_to_names = {1: 'person', 2: 'bicycle', 3: 'car', 4: 'motorcycle', 5: 'airplane', 6: 'bus', 7: 'train',
                       8: 'truck', 9: 'boat', 10: 'traffic light',
                       11: 'fire hydrant', 12: 'street sign', 13: 'stop sign', 14: 'parking meter', 15: 'bench',
                       16: 'bird', 17: 'cat', 18: 'dog', 19: 'horse', 20: 'sheep',
                       21: 'cow', 22: 'elephant', 23: 'bear', 24: 'zebra', 25: 'giraffe', 26: 'hat', 27: 'backpack',
                       28: 'umbrella', 29: 'shoe', 30: 'eye glasses',
                       31: 'handbag', 32: 'tie', 33: 'suitcase', 34: 'frisbee', 35: 'skis', 36: 'snowboard',
                       37: 'sports ball', 38: 'kite', 39: 'baseball bat', 40: 'baseball glove',
                       41: 'skateboard', 42: 'surfboard', 43: 'tennis racket', 44: 'bottle', 45: 'plate',
                       46: 'wine glass', 47: 'cup', 48: 'fork', 49: 'knife', 50: 'spoon',
                       51: 'bowl', 52: 'banana', 53: 'apple', 54: 'sandwich', 55: 'orange', 56: 'broccoli',
                       57: 'carrot', 58: 'hot dog', 59: 'pizza', 60: 'donut',
                       61: 'cake', 62: 'chair', 63: 'couch', 64: 'potted plant', 65: 'bed', 66: 'mirror',
                       67: 'dining table', 68: 'window', 69: 'desk', 70: 'toilet',
                       71: 'door', 72: 'tv', 73: 'laptop', 74: 'mouse', 75: 'remote', 76: 'keyboard', 77: 'cell phone',
                       78: 'microwave', 79: 'oven', 80: 'toaster',
                       81: 'sink', 82: 'refrigerator', 83: 'blender', 84: 'book', 85: 'clock', 86: 'vase',
                       87: 'scissors', 88: 'teddy bear', 89: 'hair drier', 90: 'toothbrush',
                       91: 'hair brush'}

    # 한국어를 입력하면 영어 lable과 비교할 수 있도록
    names_to_labels_korean = {'사람': 'person', '자전거': 'bicycle', '자동차': 'car', '오토바이': 'motorcycle', '비행기': 'airplane',
                              '버스': 'bus', '기차': 'train', '트럭': 'truck', '보트': 'boat', '신호등': 'traffic light',
                              '소화전': 'fire hydrant', '도로 표지판': 'street sign', '정지 신호': 'stop sign',
                              '주차 요금 징수기': 'parking meter', '벤치': 'bench', '새': 'bird', '고양이': 'cat',
                              '개': 'dog', '말': 'horse', '양': 'sheep', '소': 'cow', '코끼리': 'elephant',
                              '곰': 'bear', '얼룩말': 'zebra', '기린': 'giraffe', '모자': 'hat', '배낭': 'backpack',
                              '우산': 'umbrella', '신발': 'shoe', '안경': 'eye glasses', '핸드백': 'handbag', '넥타이': 'tie',
                              '여행가방': 'suitcase', '프리스비': 'frisbee', '스키': 'skis', '스노보드': 'snowboard',
                              '스포츠 공': 'sports ball', '연': 'kite', '야구배트': 'baseball bat', '야구 글러브': 'baseball glove',
                              '스케이트보드': 'skateboard', '서핑보드': 'surfboard', '테니스 라켓': 'tennis racket',
                              '병': 'bottle', '접시': 'plate', '와인잔': 'wine glass', '컵': 'cup', '포크': 'fork',
                              '나이프': 'knife', '숟가락': 'spoon', '그릇': 'bowl', '바나나': 'banana', '사과': 'apple',
                              '샌드위치': 'sandwich', '오렌지': 'orange', '브로콜리': 'broccoli', '당근': 'carrot',
                              '핫도그': 'hot dog', '피자': 'pizza', '도넛': 'donut', '케이크': 'cake', '의자': 'chair',
                              '소파': 'couch', '화분': 'potted plant', '침대': 'bed', '거울': 'mirror', '식탁': 'dining table',
                              '창문': 'window', '책상': 'desk', '화장실': 'toilet', '문': 'door', '텔레비전': 'tv',
                              '노트북': 'laptop', '마우스': 'mouse', '리모컨': 'remote', '키보드': 'keyboard', '휴대전화': 'cell phone',
                              '전자레인지': 'microwave', '오븐': 'oven', '토스터': 'toaster', '싱크대': 'sink',
                              '냉장고': 'refrigerator', '믹서': 'blender', '책': 'book', '시계': 'clock', '꽃병': 'vase',
                              '가위': 'scissors', '테디 베어': 'teddy bear', '헤어 드라이어': 'hair drier', '칫솔': 'toothbrush'}

    # 탐지할 이미지를 불러온다.
    img = cv2.imread("image.jpg")


    # 원본 이미지 (633, 806)를 네트웍에 입력시에는 (300, 300)로 resize 함.
    # 이후 결과가 출력되면 resize된 이미지 기반으로 bounding box 위치가 예측 되므로 이를 다시 원복하기 위해 원본 이미지 shape정보 필요
    rows = img.shape[0]
    cols = img.shape[1]

    # cv2의 rectangle()은 인자로 들어온 이미지 배열에 직접 사각형을 업데이트 하므로 그림 표현을 위한 별도의 이미지 배열 생성.
    draw_img = img.copy()

    # 원본 이미지 배열을 사이즈 (300, 300)으로, BGR을 RGB로 변환하여 배열 입력 / 기본 Default 가 BGR이기 때문에
    cv_net.setInput(cv2.dnn.blobFromImage(img, size=(300, 300), swapRB=True, crop=False))

    # Object Detection 수행하여 결과를 cv_out으로 반환
    cv_out = cv_net.forward()

    # bounding box의 테두리와 caption 글자색 지정
    green_color = (0, 255, 0)
    red_color = (0, 0, 255)

    # 해당이미지에서 탐지된 객체를 담을 수 있는 곳
    check = set()

    # detected 된 object들을 iteration 하면서 정보 추출
    for detection in cv_out[0, 0, :, :]:
        score = float(detection[2])
        class_id = int(detection[1])

        # detected된 object들의 score가 0.5 이상만 추출
        if score > 0.3:
            # detected된 object들은 image 크기가 (300, 300)으로 scale된 기준으로 예측되었으므로 다시 원본 이미지 비율로 계산
            left = detection[3] * cols
            top = detection[4] * rows
            right = detection[5] * cols
            bottom = detection[6] * rows

            # labels_to_names 딕셔너리로 class_id값을 클래스명으로 변경. opencv에서는 class_id + 1로 매핑해야함.
            caption = "{}: {:.4f}".format(labels_to_names[class_id], score)
            check.add(labels_to_names[class_id])

            # cv2.rectangle()은 인자로 들어온 draw_img에 사각형을 그림. 위치 인자는 반드시 정수형.
            cv2.rectangle(draw_img, (int(left), int(top)), (int(right), int(bottom)), color=green_color, thickness=2)
            cv2.putText(draw_img, caption, (int(left), int(top - 5)), cv2.FONT_HERSHEY_SIMPLEX, 0.7, red_color, 2)


    img_rgb = cv2.cvtColor(draw_img, cv2.COLOR_BGR2RGB)

    plt.figure(figsize=(12, 12))
    plt.imshow(img_rgb)

    os.remove("image.jpg")

    if answer in check or names_to_labels_korean.get(answer) in check:
        return {"question_history_is_ok": "true"}
    else:
        return {"question_history_is_ok": "false"}

