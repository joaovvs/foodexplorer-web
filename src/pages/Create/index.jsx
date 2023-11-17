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
    const [food, setFood] = new useState({});
    const [foodImage, setFoodImage] = new useState("");

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

    function handleUpload(event){
        const file = event.target.files[0];
        setFoodImage(file);

    }


    useEffect(()=>{
        console.log(foodImage);
    },[foodImage])
    


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
                        id="file-input"
                        className="file-input"
                        type="file"
                        title="Imagem do prato" 
                        icon={UploadSimple}
                        fileName={foodImage.name}
                        onChange={handleUpload} 
                        />
                    <Input 
                        type="text"
                        title="Nome" 
                        placeholder="Ex. Salada Ceasar"
                        on={e => setFood({name: e.target.value})} 
                        />

                    <Select title="Categoria"/>

                    <Input 
                        type="number"
                        step="0,01"
                        title="Preço" 
                        placeholder="R$ 00,00"
                        onChange={e => setFood({price: e.target.value})} 
                        />
                    <TextArea 
                        label="Descrição" 
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={e => setFood({description: e.target.value})} 
                        />
            </Form>
            <Footer/>
        </Container>
    );
}