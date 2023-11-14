import { Container } from "./styles";

export function Card({name, image, price, ...rest}){
   return( <Container {...rest}>
        <img src={image} alt= {`Imagem do prato ${name}`} />
        <h4>{name}</h4>
        <span>{price}</span>
    </Container>
    );
}