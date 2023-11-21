import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 6.4rem 2.8rem 2.4rem;

    width: 100%;

    background: ${({theme}) => theme.COLORS.DARK_700};


    button svg{
        width: 2.4rem;
        height: 2.4rem;
    }


    >div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .8rem;

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
    }
`;