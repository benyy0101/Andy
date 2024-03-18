import Image from "next/image";
import Logo from "../../_components/logo/Logo";
import { KakaoLogin } from "./_components/KakaoLogin";
import Main_Character from "../../asset/_img/character.png";
import { Character, Wrapper } from "./styles/Page.styled";

export default function Main() {
  return (
    <Wrapper>
      <Logo />
      <Character>
        <Image alt="ANDY" src={Main_Character} height={800} width={300} />
      </Character>
      <KakaoLogin />
    </Wrapper>
  );
}
