import { Container } from "./styles";



export function TextArea({label, id, placeholder, ...rest}){
    return(
        <Container {...rest}>
           <label htmlFor={id}>{label}</label>
           <textarea id={id} placeholder={placeholder}/>
        </Container>

    );
};