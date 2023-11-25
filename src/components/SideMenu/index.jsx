import { Container, Header, Main } from "./styles";
import { ButtonText } from "../ButtonText";
import { Footer } from "../Footer";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi"
import { TfiClose } from "react-icons/tfi";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function SideMenu({menuIsOpen, onCloseMenu, onSearchChange}){
    const { signOut, user} = useAuth();
    const [searchTimeout, setSearchTimeout] = useState(null);

    const navigate = new useNavigate();

    function handleNew(){
        navigate("/create");
    }


    function handleSignOut(){
        signOut();
        navigate("/");
    }

    const handleSearchChange = (e) =>{
        const newSearch = e.target.value;
        onSearchChange(newSearch);

        // Cancels any search
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        // Define a new timer to init seach as delay
        const timer = setTimeout(() => {
            onSearchChange(newSearch); // Challs callback function at Home
        }, 1000); // Await 1000 ms = 1s
    
        setSearchTimeout(timer);
    };

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
                <Input icon={FiSearch} 
                placeholder="Busque por pratos ou ingredientes"
                onChange={handleSearchChange}/>
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