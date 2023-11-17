import { Container } from "./styles";


export function Input({icon: Icon, title, ...rest}){
    return(
        <Container {...rest}>
            <label >{title}</label>
            <div>
                {Icon && <Icon />}
                <input {...rest}></input>
            </div>
        </Container>
    )
}