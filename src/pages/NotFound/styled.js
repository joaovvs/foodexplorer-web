import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header"
    "content"
    "footer";
`;


export const Main = styled.main`
    grid-area: content;

    display: flex;
    gap: 1.6rem;
    justify-content: center;
    align-items: center;

    //animation
    animation: apear 3s;

    svg{
        color: ${({theme})=> theme.COLORS.LIGHT_100};
        font-size: 4rem;
    }
    h1{
          color: ${({theme})=> theme.COLORS.LIGHT_100};
    }
`;