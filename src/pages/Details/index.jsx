import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";
import { useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { QuantityPicker } from "../../components/QuantityPicker";
import { Tag } from "../../components/Tag";
import blank from "../../assets/blank.svg"

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from '../../utils/roles';

import { CaretLeft, Receipt } from "@phosphor-icons/react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

export function Details(){
    const { user } = useAuth();
    const [menuIsOpen, setMenuIsOpen] = new useState(false);
    const [food, setFood] = new useState({});

    const navigate = useNavigate();

    const params = useParams();
    const {food_id} = params;

    const foodImageUrl = food.image ? `${api.defaults.baseURL}/files/${food.image}` : blank;   


    function handleBack(){
        navigate(-1);
    }

    function handleEdit(){
        navigate(`/update/${food_id}`);
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


    useEffect(()=>{
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
                
          

                <img src={foodImageUrl} alt={`Imagem de ${food.name}`} />

                <section>
                    <h1>{food.name}</h1>

                    <p>{food.description}</p>

                    <div className="tag-list">
                        { food.ingredients && food.ingredients.map((ingredient,index)=> 
                            (
                            <Tag 
                                key={String(index)}
                                title={ingredient}
                                />
                           )
                        )}
                    </div>
                </section>
                
              {[USER_ROLE.COSTUMER].includes(user.role) &&
                <QuantityPicker 
                    quantity="01" 
                    title={`pedir - R$ ${food.price}`} 
                    icon={Receipt}/>
              }

              {[USER_ROLE.ADMIN].includes(user.role) &&
               <Button 
                title="Editar prato"
                onClick={handleEdit}/>
               }
            </Main>
            <Footer/>
        </Container>
    );
}