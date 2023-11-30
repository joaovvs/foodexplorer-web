import { Container } from "./styles";




export function Select({title, value, ...rest}){
    return(
        <Container {...rest}>
              <label htmlFor={title}>{title}</label> 
                <select name={title} id={title} value={value ? value: ""} {...rest}>
                    <option value="" disabled >Seleciona uma categoria</option>
                    <option value="refeição" >Refeição</option>
                    <option value="sobremesa">Sobremesa</option>
                    <option value="bebida">Bebida</option>
                </select>
        </Container>

    );
};