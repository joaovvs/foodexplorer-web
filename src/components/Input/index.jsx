import { Container } from "./styles";


export function Input({icon: Icon,id, title, ...rest}){
    return(
        <Container >
            <label htmlFor={id}>{title}</label>
            <div>
                {Icon && <Icon />}
                <input id={id} {...rest}></input>
            </div>
        </Container>
    )
}