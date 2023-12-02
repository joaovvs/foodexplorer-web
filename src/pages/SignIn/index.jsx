import { useState } from "react";

import { Container, Form } from "./styles";
import logo from "../../assets/logo.svg";
import { Input} from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth"


export function SignIn(){
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const { signIn }= useAuth();
    const navigate = new useNavigate();


    function handleSignUp(){
        navigate("/singup");
    }
    function handleSignIn(){
        signIn({ email, password });
    }

    return(
    <Container>

        <header>
            <img src={logo} alt="Logo" />
            <h1>food explorer</h1>
        </header>
        <Form id="signin" >
            <h2>Faça login</h2>
            <Input 
                id="email-input"
                type="email"
                title="Email" 
                placeholder="Exemplo: exemplo@exemplo.com.br"
                onChange={e => setEmail(e.target.value)} 
                />
            <Input 
                id="password-input"
                type="password" 
                title="Senha" 
                placeholder="No mínimo 6 caracteres"
                minLength="6"
                onChange={e => setPassword(e.target.value)} 
                />
            
            <Button 
                htmlFor="signin"
                type="button" 
                title="Entrar"
                onClick={handleSignIn}
                />

            <ButtonText 
                type="button" 
                title="Criar uma conta"
                onClick= {handleSignUp}/>
        </Form>
        
    </Container>)
}