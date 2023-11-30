import { Container } from "./styles";



export function TextArea({title, id, placeholder, ...rest}){
    return(
        <Container {...rest}>
           <label htmlFor={id}>{title}</label>
           <textarea id={id} placeholder={placeholder} {...rest}/>
        </Container>

    );
};