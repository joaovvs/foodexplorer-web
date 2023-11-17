import { Container, Form } from "./styles";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { SideMenu } from "../../components/SideMenu";
import { ButtonText } from "../../components/ButtonText";

import { Input } from "../../components/Input";
import { InputFile } from "../../components/InputFile";
import { Select } from "../../components/Select";
import { TextArea } from "../../components/TextArea";


import { CaretLeft, UploadSimple } from "@phosphor-icons/react";

export function Create({food_id, ...rest}){
    const [menuIsOpen, setMenuIsOpen] = new useState(false);
    const [foodName, setFoodName] = new useState({});
    const [foodPrice, setFoodPrice] = new useState({});
    const [foodDescription, setFoodDescription] = new useState({});
    const [foodImageName, setFoodImageName] = new useState("");

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

    function handleUpload(event){
        const file = event.target.files[0];
        if(file){
        setFoodImageName(file.name);
        }
        else setFoodImageName("");

    }


    useEffect(()=>{
        console.log(foodImageName);
    },[foodImageName])
    


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
                    <h1>Novo prato</h1>


                    <InputFile 
                        title="Imagem do prato" 
                        icon={UploadSimple}
                        filename={foodImageName}
                        onChange={handleUpload} 
                        accept="image/jpeg, image/png, image/gif, image/bmp"
                        />
                    
                    <Input 
                        type="text"
                        title="Nome"
                        className="food-name"
                        placeholder="Ex. Salada Ceasar"
                        onChange={e => setFoodName(e.target.value)} 
                        />

                    <Select title="Categoria"/>

                    <Input 
                        type="text"
                        title="Preço"
                        className="food-price"
                        placeholder="R$ 00,00"
                        onChange={e => setFoodPrice(e.target.value)} 
                        />
                    <TextArea 
                        label="Descrição"
                        className="food-description"
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={e => setFoodDescription(e.target.value)} 
                        />
            </Form>
            <Footer/>
        </Container>
    );
}