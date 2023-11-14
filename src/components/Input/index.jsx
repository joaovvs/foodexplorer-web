import { Container } from "./styles";


export function Input({icon: Icon, title, ...rest}){
    return(
        <Container>
            <label>{title}</label>
            <div>
                {Icon && <Icon size={20}/>}
                <input {...rest}></input>
            </div>
        </Container>
    )
}