import { Container, Form } from "./styles";

import { useEffect, useState } from "react";
import { useNavigate , useParams} from "react-router-dom";

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


import { CaretLeft, UploadSimple } from "@phosphor-icons/react";

export function Update(){
    const [menuIsOpen, setMenuIsOpen] = new useState(false);
    const [food, setFood] = new useState({
        id: "",
        name: "",
        image: "",
        category: "",
        ingredients: [],
        description: "",

    });
    const params = useParams();
    const {food_id} = params;

    const [newIngredient, setNewIngredient] = useState("");
    const [updatedFoodImage, setUpdatedFoodImage] = useState({});

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

    function handleAddIngredient(){
        const newFood = {...food};
        newFood.ingredients=[...newFood.ingredients, newIngredient];
        setFood(newFood);
        setNewIngredient("");
    }
    function handleRemoveIngredient(removed){
        const newFood = {...food};
        newFood.ingredients= (newFood.ingredients.filter(ingredient => ingredient!=removed));
        setFood(newFood);
    }

    async function handleDeleteFood(){
        const confirm = window.confirm("Deseja realmente remover o prato?");
        try{
            await api.delete(`/foods/${food_id}`);
            alert("Prado removido com sucesso!");

            setFood( {id: "",
                name: "",
                image: "",
                category: "",
                ingredients: [],
                description: "",
            });
            navigate("/");
        } catch (error){
            if(error.response){
                alert(error.response.data.message);
            }else {
                alert("Não foi possível deletar o filme");
                setId("");
            }
        }
    }

    async function fetchFood(){
        try{
            const foodSearch = await api.get(`foods/${food_id}`);
            setFood(foodSearch.data);
            }catch (error) {
                if(error.response){
                      return  alert(error.response.data.message);
                }else{
                    alert("Prato não encontrado!");
                    navigate("/");
                    return;
                }
            }
    }

    function handleUpload(event){
        const file = event.target.files[0];
        if(file){
            setUpdatedFoodImage({"image": file})
            console.log(updatedFoodImage);
        }
        else setUpdatedFoodImage({"image": ""});
    }

    async function updateImage(){
        console.log(food.image);
        console.log(updatedFoodImage.image);
       if(food.image != updatedFoodImage.image){
            const fileUploadForm = new FormData();
            fileUploadForm.append("image", updatedFoodImage.image);
            const response= await api.patch(`foods/image/${food.id}`, fileUploadForm);
            setFood({...food, "image": response.data.image});
        }
    }

    async function handleUpdate(){
        try{
            await updateImage();
            await api.put("/foods", food)
            .fetch(()=>alert("Prato atualizado com sucesso!"));
            
        }catch(error){
            if(error.response){
                return  alert(error.response.data.message);
            }else{
                alert("Não foi possível atualizar o prato, tente novamente!");
            }
        }
    }

    useEffect(()=> {
            fetchFood();
    },[]);
    


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

            <Form id="food-update">
                    <h1>Editar prato</h1>


                    <InputFile 
                        title="Imagem do prato" 
                        icon={UploadSimple}
                        filename={updatedFoodImage.image.name? updatedFoodImage.image.name: food.image}
                        onChange={handleUpload} 
                        accept="image/jpeg, image/png, image/gif, image/bmp"
                        />
                    
                    <Input 
                        type="text"
                        title="Nome"
                        id="food-name"
                        placeholder="Ex. Salada Ceasar"
                        value={food.name}
                        onChange={e => setFood({...food, "name": e.target.value})} 
                        />

                    <Select title="Categoria" 
                        value={food.category} 
                        onChange={e => setFood({...food, "category": e.target.value})}
                    />

                    <div id="ingredients-wrapper">
                        <h3>Ingredientes</h3>
                    
                        <div id="tags-wrapper"> 
                            { food.ingredients.map((ingredient, index) => 
                                (<TagEdit 
                                    id={ingredient}
                                    key={String(index)}
                                    value={ingredient}
                                    onClick={() => handleRemoveIngredient(ingredient)}
                                />))
                                
                            }
                            <TagEdit 
                                id="new-tag"
                                placeholder="Adicionar" 
                                value={newIngredient}
                                onChange={(e)=> setNewIngredient(e.target.value)}
                                onClick={handleAddIngredient}
                                isNew
                                />
                        </div>

                    </div>
                    <Input 
                        type="text"
                        title="Preço"
                        id="food-price"
                        value={food.price}
                        placeholder="R$ 00,00"
                        onChange={e => setFood({...food, "price": e.target.value})} 
                        />
                    <TextArea 
                        label="Descrição"
                        id="food-description"
                        value={food.description}
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={e => setFood({...food, "description": e.target.value})} 
                    />
                    <div className="btn-wrapper">
                        <Button 
                            type="button"
                            title="Excluir prato"
                            onClick={handleDeleteFood} 
                            isDelete 
                        />
                        <Button 
                            type="button"
                            title="Salvar alterações" 
                            htmlFor="food-update"
                            onClick={handleUpdate}
                        />
                    </div>
            </Form>
            <Footer/>
        </Container>
    );
}