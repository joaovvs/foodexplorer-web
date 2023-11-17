import { Container } from "./styles";


export function InputFile({icon: Icon, title,className, fileName, ...rest}){
    return(
        <Container >
            <label >{title}</label>
            <div >
                
                <label htmlFor={className}>{Icon && <Icon />}{fileName ? fileName: "Selecione imagem"}</label>
                
                <input className={className} {...rest}></input>
            </div>
        </Container>
    )
}