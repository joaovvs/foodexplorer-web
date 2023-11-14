import styled from "styled-components";



export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    

    h3{
        font-family: 'Poppins', sans-serif;
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 140%;

        margin-bottom: 2.4rem;

        color: ${({theme})=> theme.COLORS.LIGHT_300};
    }

    #card-list{
        display: flex;

        overflow-x: auto;

        gap: 1.6rem;
    }
`;


