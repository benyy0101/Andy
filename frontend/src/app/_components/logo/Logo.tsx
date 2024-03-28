"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/app/asset/_img/Andylogo.png";
import { Wrapper, Title } from "./styles/Logo.styled";

function Logo() {
  const router = useRouter();

  const routetoHome = () => {
    router.push("/main");
  };

  return (
    <Wrapper>
      <Title onClick={routetoHome}>
        <div className="w-40 h-12">
          <Image src={logo} alt="andy" />
        </div>
      </Title>
    </Wrapper>
  );
}

export default Logo;
