import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1.6rem;
    background: none;
    font-size: 1.4rem;
    line-height: 2.4rem;

    border-radius: .5rem;

    font-family: 'Poppins', sans-serif;
    color:  ${({theme})=> theme.COLORS.LIGHT_100};


    >textarea{
        padding: 1.4rem;
        border-radius: .5rem;
        height: 17.2rem;
        background: ${({theme})=> theme.COLORS.DARK_900};

        color:  ${({theme})=> theme.COLORS.LIGHT_100};

        border: none;

        resize: none;
        &placeholder{
            color:  ${({theme})=> theme.COLORS.LIGHT_500};

        }
    }


`