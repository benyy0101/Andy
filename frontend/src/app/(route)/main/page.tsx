import tw from "tailwind-styled-components";
import { Logo } from "../../_components/logo/Logo"
import { KakaoLogin } from "./_components/KakaoLogin"
import Main_Character from "../../asset/_img/character.png"

export default function Main() {
    return (
        <Wrapper>
            <Logo />
            <Character>
                <img src={Main_Character.src} style={{ width: '300px', height: 'auto' }}/>
            </Character>
            <KakaoLogin />
        </Wrapper>
    )
};

const Wrapper = tw.div`
flex
flex-col
justify-center
h-[100vh]
`

const Character = tw.div`
flex
justify-center
mt-30
`