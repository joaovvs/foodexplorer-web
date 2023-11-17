import { Container } from "./styles";



export function TextArea({label, placeholder, ...rest}){
    return(
        <Container {...rest}>
           <label >{label}</label>
           <textarea placeholder={placeholder}/>
        </Container>

    );
};