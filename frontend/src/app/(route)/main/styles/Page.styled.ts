import tw from 'tailwind-styled-components';


export const Wrapper = tw.div`
md:pl-0
md:pr-0
md:m-0
md:gap-15
md:flex-row
md:h-dvh
md:w-dvw

flex
flex-col 
h-dvh
w-[360px]
justify-center
`;

// 왼쪽 컨테이너
export const LeftContainer = tw.div`
md:pt-24
md:p-20

flex 
flex-col
pt-30
p-10

`;

// 오른쪽 컨테이너
export const RightContainer = tw.div`
flex 
flex-col
pt-5
pb-10

md:pt-14
md:p-20


`;

// 왼: 위 글씨 (어른이 아니고/ ANDY / 유아를 위한 낱말학습 서비스)
export const TitleContainer = tw.div`
md:m-10
md:pt-20
justify-center
flex
flex-col

`;

// 어른이 아니고 
export const Text1 = tw.div`
md:text-3xl
md:w-[210px]
w-[120px]
mt-5
pt-5
text-right
mb-2
text-lg
`;

// ANDY
export const Text2 = tw.div`
md:w-[240px]
md:text-9xl
mb-3
w-[120px]
text-6xl
text-left
font-extrabold
`;



// 유아를 위한 낱말학습 서비스
export const Text3 = tw.div`
md:text-4xl
text-xl
text-left
font-bold
w-35
`;

// 왼: 카카오 로그인
export const KakaoContainer = tw.div`
md:p-5
md:justify-start 
flex
justify-center
`;



// 오: 앤디 그림
export const AndyContainer = tw.div`
flex
justify-center
h-[800px] 
w-[300px]
md:h-[400px]
`;


export const Character = tw.div`
flex
transform
rotate-45
md:w-[300px]
md:h-[800px]
md:m-0
w-[200px]
m-auto
`;
