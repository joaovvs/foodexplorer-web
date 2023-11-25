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

`;