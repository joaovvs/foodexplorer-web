import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Banner } from "../../components/Banner";
import { Section } from "../../components/Section";
import { SideMenu } from "../../components/SideMenu";
import { useState } from "react";



export function Home(){
    const [menuIsOpen, setMenuIsOpen] = new useState(false);



    return(
        <Container> 
            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />
            <Header onOpenMenu={()=> setMenuIsOpen(true)}/>
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