import tw from "tailwind-styled-components";
import kakao_logo from "../../../asset/_img/kakao_logo.png"

export const KakaoLogin = () => {
    return (
        <div>
            <LoginBtn>
                <Symbol>
                    <img src={kakao_logo.src} style={{ width: "24px", height: "21px", filter: "invert(0%) sepia(1%) saturate(4%) hue-rotate(25deg) brightness(98%) contrast(101%)" }}></img>
                </Symbol>
                <Label>카카오 로그인</Label>
            </LoginBtn>
        </div>
    )
}

const LoginBtn = tw.button`
w-[230px]
h-[60px]
absolute
left-[50%]
bottom-[15%]
transform
-translate-x-1/2
bg-[#FEE500]
rounded-[12px]
flex
flex-row
justify-center
items-center
border-[3px]
border-[white]
`

const Symbol = tw.div`
color-[#000000]
w-[18%]
`

const Label = tw.div`
color-[#000000]
opacity-[85%]
w-[65%]
font-bold
text-[16px]
`