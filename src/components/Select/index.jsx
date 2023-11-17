import { Container } from "./styles";




export function Select({title, ...rest}){
    return(
        <Container>
              <label htmlFor="category">{title}</label> 
                <select name="category" id="category">
                    <option value="refeição">Refeição</option>
                    <option value="sobremesa">Sobremesa</option>
                    <option value="bebida">Bebida</option>
                </select>
        </Container>

    );
};