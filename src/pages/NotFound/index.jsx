import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Main } from "./styled";
import { SmileyXEyes } from "@phosphor-icons/react";


export function NotFound(){
    return(
        <Container>
            <Header/>
                <Main>
                    <SmileyXEyes/><h1>404 Página não encontrada!</h1>
                </Main>
            <Footer/>
        </Container>
    )
}