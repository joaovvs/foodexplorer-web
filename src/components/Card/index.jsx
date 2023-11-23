import { useNavigate } from "react-router-dom";

import { ButtonText } from "../ButtonText";
import { QuantityPicker } from "../QuantityPicker";
import { Container } from "./styles";
import { PencilSimple, Heart} from "@phosphor-icons/react";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from '../../utils/roles';

export function Card({name, image,cardId, price, ...rest}){
    const navigate = useNavigate();
    const { user } = useAuth();

    function handleDetails(){
        navigate(`/details/${cardId}`);
    }
   return( <Container 
        {...rest}
        
        >

        { [USER_ROLE.ADMIN].includes(user.role) && <ButtonText 
            icon={PencilSimple} 
            onClick={handleDetails}
        /> }

        { [USER_ROLE.CUSTOMER].includes(user.role) && <ButtonText 
            icon={Heart} 
            onClick={handleDetails}
        /> }



        <img src={image} alt= {`Imagem do prato ${name}`} 
        onClick={handleDetails}/>
        <ButtonText onClick={handleDetails}
        title={`${name} >` }/>
        <span>{Number(price).toLocaleString('pt-br', { style: "currency", currency: "BRL" })}</span>

      { [USER_ROLE.CUSTOMER].includes(user.role) &&
        <QuantityPicker title="incluir"/>}
        
    </Container>
    );
}