"use client";

import React, { Suspense } from "react";
import { useCategories } from "@/app/hooks/useGameA";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import funiture from "@/app/asset/_img/category_furniture.jpg";
import livingRoom from "@/app/asset/_img/living-room.png";
import kitchen from "@/app/asset/_img/kitchen.png";
import zoo from "@/app/asset/_img/zoo.png";
import ssafy from "@/app/asset/_img/ssafy.png";

import {
  Wrapper,
  Title,
  Explain,
  Category,
  ImageContainer,
  Text,
} from "../styles/page.styled";

const images = {
  가구: funiture,
  SSAFY: ssafy,
  동물원: zoo,
  거실: livingRoom,
  부엌: kitchen,
};

function Categories() {
  const { data } = useCategories();
  const mode = useSearchParams().get("mode");
  return (
    <Suspense fallback={<div>로딩중입니다...</div>}>
      <Wrapper>
        <Title>문제 선택하기!</Title>
        <Explain>풀고 싶은 문제를 골라보세요!</Explain>
        <Category>
          {data &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.map((category: any) => (
              <Link
                href={
                  mode
                    ? `/${mode}?category=${category.question_category_seq}`
                    : ""
                }
                key={category.question_category_seq}
              >
                <ImageContainer>
                  <Image
                    src={images[category.question_category_name]}
                    alt="fruit"
                    width={1000}
                    height={1000}
                    className="w-full h-60 object-cover rounded-t-lg"
                  />
                  <Text>{category.question_category_name}</Text>
                </ImageContainer>
              </Link>
            ))}
        </Category>
      </Wrapper>
    </Suspense>
  );
}

export default Categories;
