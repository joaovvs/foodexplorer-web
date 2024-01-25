import { Container, Main, Section } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";
import { useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { QuantityPicker } from "../../components/QuantityPicker";
import { Tag } from "../../components/Tag";
import noImage from "../../assets/no image.png" 

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from '../../utils/roles';

import { CaretLeft, Receipt } from "@phosphor-icons/react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Loading } from "../../components/Loading";

export function Details(){
    const { user } = useAuth();
    const [menuIsOpen, setMenuIsOpen] = new useState(false);
    const [food, setFood] = new useState({});
    const [isLoading, setIsLoading] = new useState(true);

    const navigate = useNavigate();

    const params = useParams();
    const {food_id} = params;

    const foodImageUrl = food.image ? `${api.defaults.baseURL}/files/${food.image}` : noImage;   


    function handleBack(){
        navigate(-1);
    }

    function handleEdit(){
        navigate(`/update/${food_id}`);
    }




    useEffect(()=>{
        async function fetchFood(){
            try{
                setIsLoading(true);
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
                }finally {
                    setIsLoading(false);
                }
        }
        fetchFood();
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
                { isLoading ? <Loading /> : (
                <><img className="food-img" src={foodImageUrl} alt={`Imagem de ${food.name}`} /><Section>
                        <div id="food-data">
                            <h1>{food.name}</h1>

                            <p>{food.description}</p>

                            <div className="tag-list">
                                {food.ingredients && food.ingredients.map((ingredient, index) => (
                                    <Tag
                                        key={String(index)}
                                        title={ingredient} />
                                )
                                )}
                            </div>
                        </div>
                        {[USER_ROLE.CUSTOMER].includes(user.role) && food.price &&
                            <QuantityPicker
                                price={food.price}
                                title={`incluir`}
                                icon={Receipt} />}

                        {[USER_ROLE.ADMIN].includes(user.role) &&
                            <Button
                                className="btn-edit"
                                title="Editar prato"
                                onClick={handleEdit} />}
                    </Section></>
                
            )}
            </Main>
            <Footer/>
        </Container>
    );
}