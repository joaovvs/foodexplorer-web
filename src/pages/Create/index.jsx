import { Container, Form } from "./styles";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { SideMenu } from "../../components/SideMenu";
import { ButtonText } from "../../components/ButtonText";

import { InputFile } from "../../components/InputFile";
import { Input } from "../../components/Input";
import { TagEdit } from "../../components/TagEdit";
import { Select } from "../../components/Select";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth"


import { CaretLeft, UploadSimple } from "@phosphor-icons/react";

export function Create(){
    const { user } = useAuth();
    const [menuIsOpen, setMenuIsOpen] = new useState(false);
    const [food, setFood] = new useState({
        name: "",
        image: "",
        category: "",
        price: "",
        ingredients: [],
        description: "",

    });

    const [newIngredient, setNewIngredient] = useState("");


    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

    function handleUpload(event){
        const file = event.target.files[0];
        console.log(file);
        if(file){
            setFood({...food, "image": file})
        }
        else setFood({...food, "image": ""});
    }

    function handleAddIngredient(){
        if(!newIngredient){
            return alert("Digite o nome do ingrediente");
        }
        const newFood = {...food};
        newFood.ingredients=[...newFood.ingredients, newIngredient];
        setFood(newFood);
        setNewIngredient("");
        console.log(newFood);
    }

    function handleRemoveIngredient(ingredientIndex){
        const newFood = {...food};
        newFood.ingredients= (newFood.ingredients.filter((ingredient,index) => index!==ingredientIndex));
        setFood(newFood);
    }

    function handleSaveFood(){
        if(user.role==="admin")
            createFood();
        else
            alert("apenas administradores podem cadastrar pratos!");
    }

    async function createFood(){
        try {
            const newFood = await api.post("/foods", food);
            setFood(newFood.data);
                // food image upload 
                if(food.image){
                    const fileUploadForm = new FormData();
                    fileUploadForm.append("image", food.image);
                    const response= await api.patch(`foods/image/${newFood.data.id}`, fileUploadForm);
                    setFood({...food, "image": response.data.image});
                }
            alert("Prato criado com sucesso!");
            navigate(`/details/${newFood.data.id}`);
        } catch (error) {
            if(error.response){
                alert(error.response.data.message)

            } else{
                alert("Não foi possível criar o prato!");
            }
            
        }

 
    }

    return(
        <Container> 
            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />

           
            <Header onOpenMenu={()=> setMenuIsOpen(true)}/>
            
            <main>
                <nav>
                    <ButtonText 
                    icon={CaretLeft} 
                    title="voltar"
                    onClick={handleBack}/>
                </nav>
                <Form id="food-create">
                    <h1>Adicionar prato</h1>

                <div className="food-data">
                    <InputFile 
                        title="Imagem do prato" 
                        icon={UploadSimple}
                        filename={food?.image?.name}
                        onChange={handleUpload} 
                        accept="image/jpeg, image/png, image/gif, image/bmp"
                        />
                    
                    <Input 
                        id="food-name"
                        className="food-name"
                        type="text"
                        title="Nome"
                        placeholder="Ex. Salada Ceasar"
                        onChange={e => setFood({...food, "name": e.target.value})} 
                        required/>

                    <Select className="food-category" title="Categoria" 
                        onChange={e => setFood({...food, "category": e.target.value})}
                    />
                </div>

                    <div className="ingredients-and-price">
                        <div className="ingredients">
                            <label htmlFor="add-food">Ingredientes</label>
                    
                            <div className="tags-wrapper"> 
                                { food.ingredients.map((ingredient, index) => 
                                    (<TagEdit 
                                        id={ingredient+String(index)}
                                        key={String(index)}
                                        value={ingredient}
                                        isNew={false}
                                        onClick={() => handleRemoveIngredient(index)}
                                    />))
                                    
                                }
                                <TagEdit 
                                id="add-food"
                                placeholder="Adicionar" 
                                value={newIngredient}
                                onChange={(e)=> setNewIngredient(e.target.value)}
                                onClick={handleAddIngredient}
                                isNew/>
                            </div>
                        </div>

                        <Input 
                        id="food-price"
                        className="food-price"
                        type="text"
                        title="Preço"
                        placeholder="R$ 00,00"
                        onChange={e => setFood({...food, "price": e.target.value})} 
                        required/>
                    </div>
                    
                    <TextArea 
                        id="food-description"
                        className="food-description"
                        label="Descrição"
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={e => setFood({...food, "description": e.target.value})} 
                        required/>

                    <Button 
                        type="button"
                        onClick={handleSaveFood}
                        title="Salvar alterações" 
                        htmlFor="food-create" disabled={!food.name || !food.price || !food.category || !food.description || !food.ingredients.length>0}/>
                </Form>
            </main>
            <Footer/>
        </Container>
    );
}