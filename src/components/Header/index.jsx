import { Container, Menu } from "./styles";
import { PiReceipt } from "react-icons/pi";
import { List } from "@phosphor-icons/react";
import  logo from "../../assets/logo.svg"
import { ButtonText } from "../ButtonText";



export function Header({onOpenMenu}){
    return(
        <Container>
            
            <Menu onClick={onOpenMenu}>
                <List/>
            </Menu>
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