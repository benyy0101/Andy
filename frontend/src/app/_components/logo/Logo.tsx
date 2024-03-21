'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/app/asset/_img/Andylogo.png";
import {Wrapper, Title} from './styles/Logo.styled';

function Logo() {
    const router = useRouter();

    const routetoHome = () => {
        router.push('/main')
    }

    return (
        <Wrapper>
            <Title onClick={routetoHome}><Image width={350} height={350} src={logo} alt="andy" /></Title>
        </Wrapper>
    )
}

export default Logo;

