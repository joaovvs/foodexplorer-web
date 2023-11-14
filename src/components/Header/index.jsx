import { Container } from "./styles";
import { PiReceipt } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import  logo from "../../assets/logo.svg"
import { ButtonText } from "../ButtonText";


export function Header({...rest}){
    return(
        <Container>
            
            <ButtonText 
            type="button"
            icon={FiMenu} />
            <div>
                <img src={logo} alt="Logo Food Explorer" />
                <h1>food explorer</h1>
            </div>
            <ButtonText 
                type="button"
                icon={PiReceipt} 
            />

        </Container>
    )
}