import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 100%;

    gap: 1.6rem;
    >form{
        display: flex;
        align-items: center;

        padding: .4rem 0;

        gap: 1.4rem;

        input{
            display: block;
            font-size: 1.6rem;
            font-family: 'Roboto', sans-serif;

            font-weight: 400;
            line-height: 100%;

            width: 2.3rem;

            border: none;
            background-color: transparent;

            color: ${({theme}) => theme.COLORS.LIGHT_300};
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    svg{
        font-size: 2.4rem;
        color: ${({theme})=> theme.COLORS.LIGHT_100};
        
    }


`