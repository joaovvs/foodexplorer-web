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
        if(!newIngredient){
            return alert("Digite o nome do ingrediente");
        }
        const newFood = {...food};
        newFood.ingredients=[...newFood.ingredients, newIngredient];
        setFood(newFood);
        setNewIngredient("");
    }

    function handleRemoveIngredient(ingredientIndex){
        const newFood = {...food};
        newFood.ingredients= (newFood.ingredients.filter((ingredient,index) => index!==ingredientIndex));
        setFood(newFood);
    }

    async function handleDeleteFood(){
        const confirm = window.confirm("Deseja realmente remover o prato?");
        try{
            await api.delete(`/foods/${food_id}`);
            alert("Prato removido com sucesso!");

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
            updatedFoodImage.image && await updateImage();
            await api.put("/foods", food);
            alert("Prato atualizado com sucesso!");
            navigate(-1);

        }catch(error){
                if(error.response){
                    alert(error.response.data.message);
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
            <main>
                <nav>
                    <ButtonText 
                    icon={CaretLeft} 
                    title="voltar"
                    onClick={handleBack}/>
                </nav>

                <Form id="food-update">
                    <h1>Editar prato</h1>

                    <div className="food-data">
                        <InputFile 
                            title="Imagem do prato" 
                            icon={UploadSimple}
                            filename={updatedFoodImage.image?.name ? updatedFoodImage.image.name: food.image}
                            onChange={handleUpload} 
                            accept="image/jpeg, image/png, image/gif, image/bmp"
                            />
                    
                        <Input 
                            id="food-name"
                            className="food-name"
                            type="text"
                            title="Nome"
                            placeholder="Ex. Salada Ceasar"
                            value={food.name}
                            onChange={e => setFood({...food, "name": e.target.value})} 
                            />

                        <Select 
                            className="food-category" 
                            title="Categoria" 
                            value={food.category} 
                            onChange={e => setFood({...food, "category": e.target.value})}
                        />
                    </div>
                    <div className="ingredients-and-price">
                        <div className="ingredients">
                            <label htmlFor="add-ingredient">Ingredientes</label>
                        
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
                                    id="add-ingredient"
                                    placeholder="Adicionar" 
                                    value={newIngredient}
                                    onChange={(e)=> setNewIngredient(e.target.value)}
                                    onClick={handleAddIngredient}
                                    isNew
                                    />
                            </div>
                        </div>
                    <Input 
                        id="food-price"
                        className="food-price"
                        type="text"
                        title="Preço"
                        value={food.price}
                        placeholder="R$ 00,00"
                        onChange={e => setFood({...food, "price": e.target.value})} 
                        />

                </div>
                    <TextArea 
                        id="food-description"
                        className="food-description"
                        label="Descrição"
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
            </main>
            <Footer/>
        </Container>
    );
}