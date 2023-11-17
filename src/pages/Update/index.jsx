import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";
import { useEffect, useState } from "react";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

import { CaretLeft, UploadSimple } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export function Update({food_id, ...rest}){
    const [menuIsOpen, setMenuIsOpen] = new useState(false);
    const [food, setFood] = new useState({});
    const [foodImage, setFoodImage] = new useState("");

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }


    useEffect(()=>{
        setFood({name: "Salada Ravanello"});
    },[])
    


    return(
        <Container> 
            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />

           
            <Header onOpenMenu={()=> setMenuIsOpen(true)}/>
            
            <nav>
                <ButtonText 
                icon={CaretLeft} 
                title="voltar"
                onClick={handleBack}/>
            </nav>

            <Form>
                <section>
                    <h1>Editar prato</h1>


                    <Input 
                        type="text"
                        title="Imagem do prato" 
                        icon={UploadSimple}
                        value="Selecione imagem para alterá-la"
                        onChange={e => setFoodImage(e.target.value)} 
                        />
                    <Input 
                        type="text"
                        title="Nome" 
                        value={food.name}
                        onChange={e => setFood({name: e.target.value})} 
                        />

                    <Input 
                        type="text"
                        title="Preço" 
                        value={food.price}
                        onChange={e => setFood({price: e.target.value})} 
                        />
                    <Input 
                        type="text"
                        title="Descrição" 
                        placeholder={food.description}
                        onChange={e => setFood({description: e.target.value})} 
                        />

                </section>
                

            
            </Form>
            <Footer/>
        </Container>
    );
}