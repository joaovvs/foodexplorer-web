import { Container } from "./styles";
import {Plus, Minus } from "@phosphor-icons/react";
import { Button } from "../Button"; 
import { ButtonText } from "../ButtonText"; 

export function QuantityPicker({quantity, ...rest}){
   return( <Container>
        <form>
            <ButtonText type="button" icon={Minus}/>
                <input  type="number" defaultValue={quantity} readOnly/>
                <ButtonText type="button" icon={Plus}/>
        </form>

        <Button type="button" title= "incluir"/>
    </Container>
   )
}