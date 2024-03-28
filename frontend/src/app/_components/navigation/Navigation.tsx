import React from "react";
import tw from "tailwind-styled-components";
import Logo from "../logo/Logo";

function Navigation() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
}

const Wrapper = tw.div`
h-fit
`;

export default Navigation;
