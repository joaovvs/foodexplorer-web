import { Container } from "./styles";
import {Plus, Minus } from "@phosphor-icons/react";
import { Button } from "../Button"; 
import { ButtonText } from "../ButtonText"; 
import { useEffect, useState } from "react";

export function QuantityPicker({icon : Icon, title, price, ...rest}){
    const [itemQuantity, setItemQuantity] = useState(1);
    const [totalRequest, setTotalRequest] = useState("");

    useEffect(()=> {

        async function calcTotalRequest(){
            const total =Number(await price)*Number(itemQuantity);
            return total;
        }
        console.log(calcTotalRequest());    
    },[])

    useEffect(()=>{
        setTotalRequest(Number(price)*Number(itemQuantity));
    },[itemQuantity])
    

   return( <Container {...rest}>
        <form>
            <ButtonText type="button" icon={Minus} onClick={() =>{ itemQuantity>0 && setItemQuantity(itemQuantity-1); } }/>
                <input  
                type="number" 
                value={itemQuantity.toLocaleString('pt-br', { minimumIntegerDigits: 2, useGrouping: false })} min="0" max="99"
                onChange={(e => setItemQuantity(Number(e.target.value)))}/>
            <ButtonText type="button" icon={Plus} onClick={() =>{ itemQuantity<100 && setItemQuantity(itemQuantity+1)}}/>
        </form>

        <Button type="button" title= { price ? `${title} - ${totalRequest.toLocaleString('pt-br', { style: "currency", currency: "BRL" })}`: title } icon={Icon}/>
    </Container>
   )
}