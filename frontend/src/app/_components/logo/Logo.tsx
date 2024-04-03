"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/app/asset/_img/Andylogo.png";
import { Wrapper, Title } from "./styles/Logo.styled";

function Logo() {
  const router = useRouter();

  const routetoHome = () => {
    router.push("/main_quiz");
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isServer = typeof window === "undefined";

  return (
    <Wrapper>
      <Title onClick={routetoHome}>
        <Image src={logo} alt="andy" height={200} width={200} />
      </Title>
    </Wrapper>
  );
}

export default Logo;
