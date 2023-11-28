import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function TagEdit({value, isNew,id, onClick,placeholder,...rest}){
    return(
        <Container className="tag-wrapper" $isNew={isNew} {...rest}>
                <label htmlFor={id} className="sr-only">{value ? value : "Adicionar um novo ingrediente"}</label>
                <input 
                    id={id}
                    type="text"
                    value={value}
                    readOnly={!isNew}
                    placeholder={placeholder} 
                    onChange={e=> e.target.value}
                    />
                <button
                    type="button"
                    onClick={onClick}
                    className={isNew ? 'button-add' : 'button-delete'}
                > 
                    {isNew ?  <FiPlus/> : <FiX/>} 
                </button>
        </Container>
    )
}