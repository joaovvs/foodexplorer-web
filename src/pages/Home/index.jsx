import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Banner } from "../../components/Banner";

export function Home(){
    return(
        <Container> 
            <Header/>
            <Content>
                <Banner/>
                
            </Content>
            <Footer/>
        </Container>
    );
}