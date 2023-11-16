import { Container } from "./styles";
import {Plus, Minus } from "@phosphor-icons/react";
import { Button } from "../Button"; 
import { ButtonText } from "../ButtonText"; 

export function QuantityPicker({quantity, icon : Icon, title, ...rest}){
   return( <Container {...rest}>
        <form>
            <ButtonText type="button" icon={Minus}/>
                <input  type="number" defaultValue={quantity} readOnly/>
                <ButtonText type="button" icon={Plus}/>
        </form>

        <Button type="button" title= {title} icon={Icon}/>
    </Container>
   )
}