import { Container, Menu } from "./styles";
import { List, Receipt } from "@phosphor-icons/react";
import  logo from "../../assets/logo.svg"
import { ButtonText } from "../ButtonText";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from '../../utils/roles';



export function Header({onOpenMenu}){
    const {user} = new useAuth();

    return(
        <Container>
            
            <Menu onClick={onOpenMenu}>
                <List/>
            </Menu>
            <div>
                <img src={logo} alt="Logo Food Explorer" />
                <h1>food explorer</h1>
               {[USER_ROLE.ADMIN].includes(user.role) &&<span>{user.role}</span>}
            </div>
            <ButtonText 
                type="button"
                icon={Receipt}>
                    
            </ButtonText>

        </Container>
    )
}