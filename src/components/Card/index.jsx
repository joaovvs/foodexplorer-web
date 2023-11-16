import { useNavigate } from "react-router-dom";

import { ButtonText } from "../ButtonText";
import { QuantityPicker } from "../QuantityPicker";
import { Container } from "./styles";
import { PencilSimple, Heart} from "@phosphor-icons/react";

export function Card({name, image, price, ...rest}){
    const navigate = useNavigate();

    function handleEdition(){
        navigate("/details");
    }
   return( <Container {...rest}>
        <ButtonText 
            icon={PencilSimple} 
            onClick={handleEdition}
        />

        <img src={image} alt= {`Imagem do prato ${name}`} />
        <h4>{name}</h4>
        <span>{price}</span>
        <QuantityPicker quantity="01" title="incluir"/>
    </Container>
    );
}