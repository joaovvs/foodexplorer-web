import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    padding: 15.8rem 4.7rem 0 6.5rem; 

    header{
        display: flex;
        flex-direction: row;

        gap: 1rem;

        margin-bottom: 7.3rem;

        img{
            width: 4.3rem;
            height: 4.3rem;
        }

        h1{
            font-family: 'Roboto', sans-serif;
            font-size: 3.72rem;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
        }
    }

`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;

    align-items: center;

    gap: 3.2rem;
`;