import { Container } from "./styles";


export function InputFile({icon: Icon, title, filename, ...rest}){
    return(
        <Container >
            <label htmlFor="input-file">{title}</label>
            <div >
                
                <label htmlFor="input-file">{Icon && <Icon />}{filename ? filename: "Selecione imagem"}</label>
                
                <input id="input-file" className="input-file" type="file" {...rest}/>
            </div>
        </Container>
    )
}