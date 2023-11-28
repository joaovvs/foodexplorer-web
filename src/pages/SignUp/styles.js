import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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

        //animation
        animation: apear 1s;

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
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        height: 100vh;

        padding: 0 10.8rem 0 15.3rem; 

        h1{
            font-size: 4.2rem;
        }

        img{
            width: 4.9rem;
            height: 4.9rem;
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

    //animation
    animation: apear 2s;

    h2{
        display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        padding: 6.4rem;
        border-radius: 1.6rem;
        background: ${({theme}) => theme.COLORS.DARK_700};
        width: 47.6rem;
        

        h2{
            display: block;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            font-size: 3.2rem;
            font-weight: 500;
            line-height: 140%;
        }
    }
`;