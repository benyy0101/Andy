import React from "react";
import Logo from "../logo/Logo";
import { Wrapper } from "./styles/navigation.styled";
import { MyProfile } from "../my_profile/MyProfile";

function Navigation() {
  return (
    <Wrapper>
      <div className="w-1/12" />
      <Logo />
      <MyProfile />
    </Wrapper>
  );
}

export default Navigation;
