import React from "react";
import { Wrapper, Copyright } from "./styles/Footer.styled";

function Footer() {
  return (
    <Wrapper>
      <Copyright>
        <div>Copyright © 2024, Mondy All Rights Reserved.</div>
        <div>
          SSAFY & TEAM Mondy | 이동훈 김아린 김태수 박수민 유현종 이윤정
        </div>
      </Copyright>
    </Wrapper>
  );
}

export default Footer;
