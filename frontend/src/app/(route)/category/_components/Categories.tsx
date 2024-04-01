"use client";

import React, { Suspense } from "react";
import { useCategories } from "@/app/hooks/useGameA";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Wrapper,
  Title,
  Explain,
  Category,
  ImageContainer,
  Text,
} from "../styles/page.styled";

function Categories() {
  const { data } = useCategories();
  const mode = useSearchParams().get("mode");
  return (
    <Suspense>
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
                  {/* <Image
              src={mockImage[index]}
              alt="fruit"
              className=" w-48 h-32 object-cover shadow-md rounded-lg"
            /> */}
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
