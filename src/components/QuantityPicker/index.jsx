import { Container } from "./styles";
import {Plus, Minus } from "@phosphor-icons/react";
import { Button } from "../Button"; 
import { ButtonText } from "../ButtonText"; 
import { useEffect, useState } from "react";

export function QuantityPicker({icon : Icon, title, id, price, ...rest}){
    const [itemQuantity, setItemQuantity] = useState(1);
    const [totalRequest, setTotalRequest] = useState("");


    function handleAddItemOnCart(){
        alert("To do!");
    }
    useEffect(()=> {

        async function calcTotalRequest(){
            const total =Number(await price)*Number(itemQuantity);
            return total;
        }   
    },[])

    useEffect(()=>{
        setTotalRequest(Number(price)*Number(itemQuantity));
    },[itemQuantity])
    

   return( 
    <Container className="picker" {...rest}>
        <form id={id}>
            <ButtonText className="minus" type="button" icon={Minus} onClick={() =>{ itemQuantity>0 && setItemQuantity(itemQuantity-1); } }/>
                <input  
                id={`input-${id}`}
                type="number" 
                value={itemQuantity.toLocaleString('pt-br', { minimumIntegerDigits: 2, useGrouping: false })} min="0" max="99"
                onChange={(e => setItemQuantity(Number(e.target.value)))}/>
            <ButtonText className="plus" type="button" icon={Plus} onClick={() =>{ itemQuantity<100 && setItemQuantity(itemQuantity+1)}}/>
        </form>

        <Button 
            className="btn-add-cart"
            type="button" 
            htmlFor={id} 
            title= { price ? `${title} - ${totalRequest.toLocaleString('pt-br', { style: "currency", currency: "BRL" })}`: title } 
            icon={Icon}
            onClick={handleAddItemOnCart}
            />
    </Container>
   )
}