'use client'

import React, { useState, useEffect } from "react";

import Image from "next/image";
import { Photobox } from "./styles/photo.styled"


function Photo() {



    // 이미지 
    const [selectedImage, setSelectedImage] = useState("");

    // 새로고침 시 랜덤으로 이미지 나옴
    // useEffect(() => {
    //     const randomImage = images[Math.floor(Math.random() * images.length)];
    //     setSelectedImage(randomImage);
    // }, [images]); 
    
    return (
        // 랜덤으로 카테고리에 해당하는 사진 내기 (코드 추가할 예정)
        <Photobox>
            <Image width={300} height={200} src={selectedImage} alt="랜덤 이미지" className="object-cover" />
        </Photobox>
    );
};

export default Photo;
