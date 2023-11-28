import { createGlobalStyle} from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
        

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
            font-size: 46.875%;
         }

         @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            font-size: 46.875%;
         }

         @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
            font-size: 62.5%;

         }
    }

    body, input, button, textarea{
        font-family: 'Roboto', serif;
        outline: none;
    } 
    
    body{
        background: ${({theme}) => theme.COLORS.DARK_400};
        font-size: 1.6rem;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
        border: none;
        text-decoration: none;
    }

    a:hover{
        filter: brightness(0.7);
    }

    .food-img:hover{
        filter: hue-rotate(7deg) brightness(1.5) saturate(200%);
    }

    

    ::-webkit-scrollbar{
        position: fixed;
        top: 6.4rem;
        right: .8rem;
        width: .6rem;
        background: transparent;


    }
    ::-webkit-scrollbar-track{
        background: transparent;
    }


    ::-webkit-scrollbar-thumb{
        background: ${({theme})=> theme.COLORS.LIGHT_300};
        border-radius: 1rem;
        width: 1rem;

        
    }

    @keyframes moveX{
        100%{
            transform: translateX(var(--startX));
        }
    }

    @keyframes moveY{
    100%{
        transform: translateY(var(--startY));
    }
    }
    @keyframes apear{
        0%{
            opacity: 0;
        }
        100%{ 
            opacity: 1;
        }
    }

`;