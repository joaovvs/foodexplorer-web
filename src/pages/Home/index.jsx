import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Banner } from "../../components/Banner";
import { Section } from "../../components/Section";
import { Menu } from "../../components/Menu";

export function Home(){
    return(
        <Container> 
            <Menu/>
            <Header/>
            <Content>
                
                <Banner/>

                <Section title="Refeições"/>
                <Section title="Sobremesas"/>
                <Section title="Bebidas"/>
            </Content>
            <Footer/>
        </Container>
    );
}