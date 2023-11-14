import { Container } from "./styles";
import { ButtonText } from "../ButtonText";
import { Input } from "../Input";
import { X, FiSearch } from "react-icons/fi"

export function Menu({...rest}){
    return(
        <Container>
            <header>
                <ButtonText icon={X}/>
                <h2>Menu</h2>
            </header>

            <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes"/>

            <ButtonText title="Sair"/>
            
        </Container>
    )
}