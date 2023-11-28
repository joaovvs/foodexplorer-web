import { Container, Header, Main } from "./styles";
import { ButtonText } from "../ButtonText";
import { Footer } from "../Footer";
import { SearchInput } from "../SearchInput";
import { TfiClose } from "react-icons/tfi";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function SideMenu({menuIsOpen, onCloseMenu, onSearchChange}){
    const { signOut, user} = useAuth();


    const navigate = new useNavigate();

    function handleNew(){
        navigate("/create");
    }


    function handleSignOut(){
        signOut();
        navigate("/");
    }

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
                <SearchInput
                    id="menu-search"
                    placeholder="Busque por pratos ou ingredientes"
                    onSearchChange={onSearchChange}/>
                <nav>
                    <ul>
                       {
                        user.role =="admin" && 
                        <li>
                            <ButtonText 
                            type="button" 
                            title="Novo prato"
                            onClick={handleNew}/>
                            </li>
                       }
                        <li><ButtonText 
                            type="button" 
                            title="Sair"
                            onClick={handleSignOut}/></li>
                    </ul>    
                </nav>
            </Main>

            <Footer/>
        </Container>
    )
}