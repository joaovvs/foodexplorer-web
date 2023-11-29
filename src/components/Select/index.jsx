import { Container } from "./styles";




export function Select({title, ...rest}){
    return(
        <Container {...rest}>
              <label htmlFor={title}>{title}</label> 
                <select name={title} id={title} defaultValue="">
                    <option value="" disabled >Seleciona uma categoria</option>
                    <option value="refeição" >Refeição</option>
                    <option value="sobremesa">Sobremesa</option>
                    <option value="bebida">Bebida</option>
                </select>
        </Container>

    );
};