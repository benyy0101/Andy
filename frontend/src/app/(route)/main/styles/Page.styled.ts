import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
web:pl-0
web:pr-0
web:m-0
web:gap-15
web:flex-row
web:h-dvh
web:w-dvw

flex
flex-col 
h-dvh
w-[360px]
justify-center
`;

// 왼쪽 컨테이너
export const LeftContainer = tw.div`
:pt-24
web:p-20

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

web:pt-14
web:p-20


`;

// 왼: 위 글씨 (어른이 아니고/ ANDY / 유아를 위한 낱말학습 서비스)
export const TitleContainer = tw.div`
web:m-10
web:pt-20
justify-center
flex
flex-col

`;

// 어른이 아니고 
export const Text1 = tw.div`
web:text-3xl
web:w-[210px]
w-[120px]
mt-5
pt-5
text-right
mb-2
text-lg
`;

// ANDY
export const Text2 = tw.div`
web:w-[240px]
web:text-9xl
mb-3
w-[120px]
text-6xl
text-left
font-extrabold
`;



// 유아를 위한 낱말학습 서비스
export const Text3 = tw.div`
web:text-4xl
text-xl
text-left
font-bold
w-35
`;

// 왼: 카카오 로그인
export const KakaoContainer = tw.div`
web:p-5
web:justify-start 
flex
justify-center
`;



// 오: 앤디 그림
export const AndyContainer = tw.div`
flex
justify-center
h-[800px] 
w-[300px]
web:h-[400px]
`;


export const Character = tw.div`
flex
transform
rotate-45
web:w-[300px]
web:h-[800px]
web:m-0
w-[200px]
m-auto
`;
