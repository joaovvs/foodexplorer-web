import { useState } from "react";

import { Container, Form } from "./styles";
import logo from "../../assets/logo.svg";
import { Input} from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function SignUp(){
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const navigate = new useNavigate();


    function handleBack(){
        navigate(-1);
    }

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos");
         }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate(-1);
        }).catch(error => {
            if(error.response){
                alert(error.response.data.message);
            }else {
                alert ("Não foi possível cadastrar o usuário, tente novamente");
            }
        });    
    }

    return(
    <Container>

        <header>
            <img src={logo} alt="Logo" />
            <h1>food explorer</h1>
        </header>
        <Form>
            <h2>Crie sua conta</h2>
            <Input 
                type="text"
                title="Seu nome" 
                placeholder="Exemplo: Maria da Silva"
                onChange={e => setName(e.target.value)} 
            />
            <Input 
                type="text"
                title="Email" 
                placeholder="Exemplo: exemplo@exemplo.com.br"
                onChange={e => setEmail(e.target.value)} 
            />
            <Input type="password" 
                title="Senha" 
                placeholder="No mínimo 6 caracteres"
                onChange={e => setPassword(e.target.value)} 
            />
            
            <Button 
                type="button" 
                title="Criar Conta"
                onClick={handleSignUp}
            />

            <ButtonText 
                type="button" 
                title="Já tenho uma conta"
                onClick= {handleBack}/>
        </Form>
        
    </Container>)
}