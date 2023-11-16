import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.aside`

    display: none;
    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){

        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;

        background: ${({theme}) => theme.COLORS.DARK_400};

        position: absolute;
        z-index: 2;

        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;

        &[data-menu-is-open="true"]{
            transform: translateX(0);
        }
    }
`;

export const Header = styled.header`
        display: flex;
        align-items: center;
        width: 100%;


        padding: 5.6rem 2.8rem 2.4rem;

        gap: 1.6rem;
        background:  ${({theme}) => theme.COLORS.DARK_700};


        svg{
            font-size: 2rem;
        }

        h2{
            font-size: 2.1rem;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            font-weight: 400;
        }


`

export const Main = styled.main`
        display: flex;
        flex-direction: column;
        padding: 0 2.8rem;
        width: 100%;
        height: 100%;
        margin-top: 3.6rem;

        gap: 3.6rem;
        ul li{
            list-style: none;
            border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};

            padding: 1rem;

            button{
                font-family: 'Poppins', sans-serif;
                font-size: 2.4rem;
                font-weight: 300;
            }
        }

`;
