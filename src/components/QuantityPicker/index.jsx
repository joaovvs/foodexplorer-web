import { Container } from "./styles";
import {Plus, Minus } from "@phosphor-icons/react";
import { Button } from "../Button"; 
import { ButtonText } from "../ButtonText"; 
import { useEffect, useState } from "react";

export function QuantityPicker({quantity, icon : Icon, title, ...rest}){
    const [itemQuantity, setItemQuantity] = useState(Number(quantity));


    useEffect(()=>{},[itemQuantity]);

   return( <Container {...rest}>
        <form>
            <ButtonText type="button" icon={Minus} onClick={() =>{ itemQuantity>0 && setItemQuantity(itemQuantity-1)} }/>
                <input  
                type="number" 
                value={itemQuantity.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })} min="0" max="99"
                onChange={(e => setItemQuantity(Number(e.target.value)))}/>
                <ButtonText type="button" icon={Plus} onClick={() =>{ itemQuantity<100 && setItemQuantity(itemQuantity+1)}}/>
        </form>

        <Button type="button" title= {title} icon={Icon}/>
    </Container>
   )
}