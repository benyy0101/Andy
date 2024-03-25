"use client";

// import Image from "next/image";
import { useCategories } from "@/app/hooks/useGameA";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// import fruit from "../../asset/_img/category_fruit.jpg";
// import fancy from "../../asset/_img/category_fancy.jpg";
// import body from "../../asset/_img/category_body.jpg";
// import furniture from "../../asset/_img/category_furniture.jpg";

import { Suspense } from "react";
import {
  Wrapper,
  Title,
  Explain,
  Category,
  ImageContainer,
  Text,
} from "./styles/page.styled";

// const mockImage = [fruit, fancy, body, furniture];

// const mockCategories = {
//   data: [
//     {
//       question_category_seq: 1,
//       question_category_name: "과일",
//     },
//     {
//       question_category_seq: 2,
//       question_category_name: "학용품",
//     },
//     {
//       question_category_seq: 3,
//       question_category_name: "신체",
//     },
//     {
//       question_category_seq: 4,
//       question_category_name: "가구",
//     },
//   ],
// };

function CategoryPage() {
  const { data } = useCategories();
  // const { data } = mockCategories;
  const mode = useSearchParams().get("mode");
  // eslint-disable-next-line no-console
  console.log(data);
  return (
    <Suspense>
      <Wrapper>
        <Title>문제 선택하기!</Title>
        <Explain>풀고 싶은 문제를 골라보세요!</Explain>
        <Category>
          {data &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.categories.map((category: any) => (
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

export default CategoryPage;
