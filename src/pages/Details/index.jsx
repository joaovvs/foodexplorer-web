import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";
import { useEffect, useState } from "react";
import { ButtonText } from "../../components/ButtonText";
import { QuantityPicker } from "../../components/QuantityPicker";
import  foodImage from "../../assets/Mask group-10.png"
import { Tag } from "../../components/Tag";

import { CaretLeft, Receipt } from "@phosphor-icons/react";
import { useNavigate, useParams } from "react-router-dom";

export function Details({food_id, ...rest}){
    const [menuIsOpen, setMenuIsOpen] = new useState(false);
    const [food, setFood] = new useState({});

    const navigate = useNavigate();

    const params = useParams();
    const {food_id} = params;

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

            <Main>
                
          

                <img src={foodImage} alt={`Imagem de ${food.name}`} />

                <section>
                    <h1>{food.name}</h1>

                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                    <div className="tag-list">
                        <Tag title="alface"/>
                        <Tag title="cebola"/>
                        <Tag title="pão naan"/>
                        <Tag title="pepino"/>
                        <Tag title="rabanete"/>
                        <Tag title="tomate"/>
                    </div>
                </section>
                
                <QuantityPicker quantity="01" title={`pedir - R$ ${"25,00"}`} icon={Receipt}/>
            
            </Main>
            <Footer/>
        </Container>
    );
}