import { useNavigate } from "react-router-dom";

import { ButtonText } from "../ButtonText";
import { QuantityPicker } from "../QuantityPicker";
import { Container } from "./styles";
import { PencilSimple} from "@phosphor-icons/react";
import noImage from "../../assets/no image.png";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from '../../utils/roles';

export function Card({food, isFavorite,onFavoriteChange, ...rest}){
    const navigate = useNavigate();
    const { user } = useAuth();

    function handleDetails(){
        navigate(`/details/${food.id}`);
    }

    function handleFavoriteToggle(){
        onFavoriteChange(food.id);
    }



   return( <Container $isFavorite={isFavorite}
        id={food.id}
        {...rest} 
        >

        { [USER_ROLE.ADMIN].includes(user.role) && <ButtonText 
            className="pencil"
            icon={PencilSimple} 
            onClick={handleDetails}
        /> }

        { [USER_ROLE.CUSTOMER].includes(user.role) && 
            <button className="toogleFavorite favorite" 
                    onClick={handleFavoriteToggle}
                > 
            <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 256 256"><rect width="256" height="256" 
                fill="none"/><path 
                d="M128,216S24,160,24,94A54,54,0,0,1,78,40c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,160,128,216,128,216Z" 
                fill="none" stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="16"/>
            </svg>
            </button> }



        <img className="food-img" src={food.image ?`${api.defaults.baseURL}/files/${food.image}` : noImage} alt= {`Imagem do prato ${food.name}`}/>
        <ButtonText 
            className="btn-food-name"
            type="button"
            title={`${food.name} >` }
            onClick={handleDetails}
            />
        <p>{food.description}</p>
        <span>{Number(food.price).toLocaleString('pt-br', { style: "currency", currency: "BRL" })}</span>

      { [USER_ROLE.CUSTOMER].includes(user.role) &&
        <QuantityPicker id={`picker-${food.id}`}title="incluir"/>}
        
    </Container>
    );
}