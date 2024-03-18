import tw from "tailwind-styled-components";

export const Wrapper = tw.div`
h-screen
flex
flex-col
items-center
justify-start
`;

export const Title = tw.h1`
text-4xl
font-bold
mb-10
`;

export const Explain = tw.h3`
text-xl
`;

export const Category = tw.div`
mt-10
w-96
flex
justify-center
mx-auto
gap-8
items-center
`;

export const ImageContainer = tw.div`
  flex
  flex-col
  items-center
`;

export const Text = tw.span`
  mt-2
  text-center
`;
