import { Container, Header, Main } from "./styles";
import { ButtonText } from "../ButtonText";
import { Footer } from "../Footer";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi"
import { TfiClose } from "react-icons/tfi";

export function SideMenu({menuIsOpen, onCloseMenu}){
    return(
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                <ButtonText 
                type="button" 
                icon={TfiClose}
                onClick={onCloseMenu}/>
                <h2>Menu</h2>
            </Header>
            <Main>
                <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes"/>
                <nav>
                    <ul>
                        <li><ButtonText type="button" title="Novo prato"/></li>
                        <li><ButtonText type="button" title="Sair"/></li>
                    </ul>    
                </nav>
            </Main>

            <Footer/>
        </Container>
    )
}