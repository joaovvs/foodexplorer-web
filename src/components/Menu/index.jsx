import { Container } from "./styles";
import { ButtonText } from "../ButtonText";
import { Input } from "../Input";
import { FiX, FiSearch } from "react-icons/fi"
import { Footer } from "../Footer";

export function Menu({...rest}){
    return(
        <Container>
            <header>
                <ButtonText icon={FiX}/>
                <h2>Menu</h2>
            </header>
            <main>
                <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes"/>
                <nav>
                    <ul>
                        <li><ButtonText title="Novo prato"/></li>
                        <li><ButtonText title="Sair"/></li>
                    </ul>    
                </nav>
            </main>
            <Footer/>
        </Container>
    )
}