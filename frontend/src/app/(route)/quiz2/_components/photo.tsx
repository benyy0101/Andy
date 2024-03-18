import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";

function Photo() {
    const Photobox = tw.div`
    flex
    items-center
    justify-center
    text-4xl
    font-bold
    mt-20
    bg-white
    rounded-md
    w-100
    h-80
    p-20
    `

    // 간이 이미지 - 화면에 잘 나오는지 확인하는 용
    const images = [
        "https://cafe24.poxo.com/ec01/bomsowa2016/UFIPSKyCRuSYfmbMpGxatFU8y8oZdFh+TSVkHy+DziSf6i+j0AQG4mjSUxXNnw1C8xwMmCw0vpCNxAUBxgtWnQ==/_/web/product/big/202401/452603ebd8d7ec78ee821f51a2bb27e9.jpg",
        "https://www.gaguup.co.kr/up/product/34502/big_202208121660264860.jpg",
        "https://m.gettt.com/data/goods/21/04/17/1000007017/1000007017_detail_077.jpg",
        "https://cdn-pro-web-228-207.cdn-nhncommerce.com/ufo2017_godomall_com/data/goods/23/07/27/1000005874/modify_detail_060.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4MwS22tvpa5BF3JlJh9Eb4AiU3yxsq0Q0kw&usqp=CAU"
    ];

    // 이미지 
    const [selectedImage, setSelectedImage] = useState("");

    // 새로고침 시 랜덤으로 이미지 나옴
    useEffect(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setSelectedImage(randomImage);
    }, []); 
    
    return (
        // 랜덤으로 카테고리에 해당하는 사진 내기 (코드 추가할 예정)
        <Photobox>
            <img src={selectedImage} alt="랜덤 이미지"  className="w-[300px] h-[200px] object-cover" />
        </Photobox>
    );
};

export default Photo;
