'use client'
import React from "react";
import tw from "tailwind-styled-components";

import Image from 'next/image';
import fruit from "../../asset/_img/category_fruit.jpg";
import fancy from "../../asset/_img/category_fancy.jpg";
import body from "../../asset/_img/category_body.jpg";
import furniture from "../../asset/_img/category_furniture.jpg";


const CategoryPage = () => {
    
    return (
        <Wrapper>
            <Title>문제 선택하기!</Title>
            <Explain>풀고 싶은 문제를 골라보세요!</Explain>
            <Category>
            <ImageContainer>
                <Image src={fruit} alt="fruit" className='border-5 w-48 h-32 object-cover shadow-md rounded-lg' />
                <Text>과일</Text>
            </ImageContainer>
            <ImageContainer>
                <Image src={fancy} alt="fancy" className='border-5 w-48 h-32 object-cover shadow-md rounded-lg' />
                <Text>학용품</Text>
            </ImageContainer>
            </Category>
            <Category>
            <ImageContainer>
                <Image src={body} alt="body" className='border-5 w-48 h-32 object-cover shadow-md rounded-lg' />
                <Text>신체</Text>
            </ImageContainer>
            <ImageContainer>
                <Image src={furniture} alt="furniture" className='border-5 w-48 h-32 object-cover shadow-md rounded-lg' />
                <Text>가구</Text>
            </ImageContainer>
            </Category>
        </Wrapper>
    
    );
}


const Wrapper = tw.div`
h-screen
flex
flex-col
items-center
justify-start
`;

const Title = tw.h1`
text-4xl
font-bold
mb-10
`;

const Explain = tw.h3`
text-xl
`;

const Category = tw.div`
mt-10
w-96
flex
justify-center
mx-auto
gap-8
items-center
`;

const ImageContainer = tw.div`
  flex
  flex-col
  items-center
`;

const Text = tw.span`
  mt-2
  text-center
`;

export default CategoryPage