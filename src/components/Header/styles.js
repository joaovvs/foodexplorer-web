import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.header`
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
            display: flex;
            font-size: 2.1rem;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            flex-wrap: nowrap;

            width: max-content;
            
        }

        span{
            color: ${({theme})=> theme.COLORS.CAKE_200};
            font-size: 1.2rem;
            line-height: 160%;
        }
        
    }

    .header-search{
        display: none;
    }

    #cart-wrapper{
        
        .btn-cart-desktop{
            display: none;
        }
        
       
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

    .btn-new{
        display: none;
    }

    .btn-sign-out{
            display:none;
        }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        background: ${({theme}) => theme.COLORS.DARK_600};
        justify-content: space-between;
        padding: 2.4rem 12.3rem;

        gap: 3.2rem;

        .logo{
         
            img{
                width: 3rem;
                height: 3rem;
            }

            gap: 1rem;
        }

        .header-search{
            display: flex;
            width: 100%;
            align-items: center;


        }

        #cart-wrapper{
            position: unset;

            .btn-cart-mobile{
                display: none;
            }

            .btn-cart-desktop{
                display: flex;
                padding: 1.2rem 3.2rem;
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                font-size: 1.4rem;
                line-height: 2.4rem;
                gap: .8rem;

                width: max-content;

            }
        }

        .btn-new{
            display: flex;
            max-width: max-content;
            line-height: 2.4rem;
        }

        .btn-sign-out{
                display:flex;
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

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        display: flex;
        align-items: center;
        position: absolute;
        left: 2.8rem;

    }
`;