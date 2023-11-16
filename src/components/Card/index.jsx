import { ButtonText } from "../ButtonText";
import { QuantityPicker } from "../QuantityPicker";
import { Container } from "./styles";
import { PencilSimple, Heart} from "@phosphor-icons/react";

export function Card({name, image, price, ...rest}){
   return( <Container {...rest}>
        <ButtonText icon={PencilSimple}/>

        <img src={image} alt= {`Imagem do prato ${name}`} />
        <h4>{name}</h4>
        <span>{price}</span>
        <QuantityPicker quantity="01"/>
    </Container>
    );
}