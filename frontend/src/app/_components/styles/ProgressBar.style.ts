import tw from "tailwind-styled-components";

export const Progress = tw.progress`
    w-11/12
    h-20
    rounded-full
    [&::-webkit-progress-bar]:rounded-full 
    [&::-webkit-progress-value]:rounded-full   
    [&::-webkit-progress-bar]:bg-slate-100 
    [&::-webkit-progress-value]:bg-amber-600 
    [&::-moz-progress-bar]:bg-violet-400
    [&::-webkit-progress-value]:transition-all 
    [&::-webkit-progress-value]:duration-500
`;
