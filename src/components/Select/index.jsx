import { Container } from "./styles";




export function Select({title, ...rest}){
    return(
        <Container>
              <label htmlFor={title}>{title}</label> 
                <select name={title} id={title}  {...rest}>
                    <option value="refeição">Refeição</option>
                    <option value="sobremesa">Sobremesa</option>
                    <option value="bebida">Bebida</option>
                </select>
        </Container>

    );
};