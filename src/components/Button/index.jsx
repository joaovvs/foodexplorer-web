import { Container } from "./styles";


export function Button({icon: Icon, isDelete, title,...rest}){
    return(
        <Container 
            $isDelete={isDelete}
            {...rest}
            >
                {Icon && <Icon />}
                {title}      
        </Container>
    
    )
}