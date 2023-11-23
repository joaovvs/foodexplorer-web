import { Container, Menu } from "./styles";
import { List, Receipt } from "@phosphor-icons/react";
import  logo from "../../assets/logo.svg"
import { ButtonText } from "../ButtonText";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from '../../utils/roles';
import { useNavigate } from "react-router-dom";



export function Header({onOpenMenu}){
    
    const { user } = new useAuth();
    
    const navigate = useNavigate();

    function handleClickAtLogo(){
        navigate("/");
    }

    return(
        <Container>
            
            <Menu className="menu" onClick={onOpenMenu}>
                <List/>
            </Menu>

            <div 
                className="logo" 
                onClick={handleClickAtLogo}>
                <img src={logo} alt="Logo Food Explorer" />
                <h1>food explorer</h1>
               {[USER_ROLE.ADMIN].includes(user?.role) &&<span>{user.role}</span>}
            </div>
           
            {[USER_ROLE.CUSTOMER].includes(user?.role) &&
                <div id="cart-wrapper">
                    <ButtonText 
                        className="btn-cart"
                        type="button"
                        icon={Receipt}>        
                    </ButtonText>
                    <span>0</span>
                </div>
            }
        </Container>
    )
}