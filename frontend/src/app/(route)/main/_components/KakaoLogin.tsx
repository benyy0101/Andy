import tw from "tailwind-styled-components";
import login from "../../../asset/_img/kakao_login_btn.png"

export const KakaoLogin = () => {
    return (
        <div>
            <LoginBtn>
                <img src={login.src} style={{ border: 'solid white 3px', borderRadius: '10px' }}></img>
            </LoginBtn>
        </div>
    )
}

const LoginBtn = tw.button`
w-[250px]
absolute
left-[50%]
bottom-[15%]
transform
-translate-x-1/2
`