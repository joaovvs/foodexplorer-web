import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
    grid-area: header;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 6.4rem 2.8rem 2.4rem;

    width: 100%;

    background: ${({theme}) => theme.COLORS.DARK_700};


    button svg{
        width: 3.2rem;
        height: 3.2rem;
    }


    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .8rem;

        cursor: pointer;

        img{
            width: 2.461rem;
            height: 2.461rem;
        }

        h1{
            font-size: 2.1rem;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
        }

        span{
            color: ${({theme})=> theme.COLORS.CAKE_200};
            font-size: 1.2rem;
            line-height: 160%;
        }
        
    }
    #cart-wrapper{
        display: flex;
        position: absolute;
        right: 2.8rem;

        span{
            background: ${({theme})=> theme.COLORS.TOMATO_100};
            color: ${({theme})=> theme.COLORS.LIGHT_100};
            border-radius: 5rem;
            position: absolute;
            top: .2rem;
            right: .2rem;
            width: 2rem;
            height: 2rem;
            padding: 1.2rem 1.2rem;
            display: flex;

            align-items: center;
            justify-content: center;

            font-size: 1.4rem;

            margin-top: -1rem;
            margin-right: -1rem;
        }

        svg{
            width: 3.2rem;
            height: 3.2rem;
        }
    }

    

`;


export const Menu = styled.button`
    display: none;
    background: none;
    border: none;

   

    svg{
        font-size: 2.4rem;
        color: ${({theme})=> theme.COLORS.LIGHT_100};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        align-items: center;
        position: absolute;
        left: 2.8rem;

    }
`;