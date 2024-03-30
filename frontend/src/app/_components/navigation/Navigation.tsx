import React from "react";
import Logo from "../logo/Logo";
import { Wrapper } from "./styles/navigation.styled";
import { MyProfile } from "../my_profile/MyProfile";
import { Music } from "../music/Music";

function Navigation() {
  return (
    <Wrapper>
      <Music />
      <Logo />
      <MyProfile />
    </Wrapper>
  );
}



export default Navigation;
