import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: auto;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas: "header"
    "navigate"
    "content"
    "footer";

    background: ${({theme}) => theme.COLORS.DARK_400};

    nav{
        display: flex;
        
        grid-area: navigate;

        margin: 1.2rem 5.6rem 3.5rem 3.2rem;

        button{
            align-items: center;
            font-family: 'Poppins', sans-serif;
            font-size: 1.6rem;

            svg{
                font-size: 2.2rem;
            }
        }

    }

   

`;

export const Form = styled.form`
    grid-area: content;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    width: 100%;


    gap: 2.4rem;
    
    padding: 0 3.2rem;

    margin-bottom: 3.3rem;
    
    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 2.7rem;

        color: ${({theme})=> theme.COLORS.LIGHT_300};
        font-weight: 500;
    }


`;