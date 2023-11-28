import { Container, Menu } from "./styles";
import { List, Receipt, SignOut } from "@phosphor-icons/react";
import  logo from "../../assets/logo.svg"
import { ButtonText } from "../ButtonText";
import { Button } from "../Button";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from '../../utils/roles';
import { useNavigate } from "react-router-dom";
import { SearchInput } from "../SearchInput";



export function Header({onOpenMenu,onSearchChange}){
    
    const { user, signOut } = new useAuth();
    
    const navigate = useNavigate();

    function handleClickAtLogo(){
        navigate("/");
    }

    function handleNew(){
        navigate("/create");
    }

    function handleSignOut(){
        signOut();
        navigate("/");
    }

    return(
        <Container >    
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


            <SearchInput 
                id="header-search"
                placeholder="Busque por pratos ou ingredientes"
                onSearchChange={onSearchChange}/>
           
            {[USER_ROLE.CUSTOMER].includes(user?.role) &&
                <div id="cart-wrapper">
                    <Button
                        className="btn-cart-desktop"
                        type="button"
                        icon={Receipt}
                        title={`Pedidos (${0})`}/>        
                    
                    <div className="btn-cart-mobile">
                        <ButtonText  
                            type="button"
                            icon={Receipt}>       
                        </ButtonText>
                            <span>0</span>  
                    </div>
                </div>
            }
             {[USER_ROLE.ADMIN].includes(user?.role) && 
                <Button
                type="button"
                className="btn-new"
                title={"Novo prato"}
                onClick={handleNew}/>

            }
            <ButtonText
                aria-label="logout"
                className="btn-sign-out"
                type="button"
                icon={SignOut}
                onClick={handleSignOut}/>

            
        </Container>
    )
}