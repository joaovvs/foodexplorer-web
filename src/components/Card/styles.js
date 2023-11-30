import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.4rem;
    position: relative;
    gap: 1.2rem;



    align-items: center;
    justify-content: center;
    border-radius: .8rem;
    border: 1px solid ${({theme})=> theme.COLORS.DARK_300};

    background: ${({theme})=> theme.COLORS.DARK_200};

    .favorite path{
        fill:  ${({theme,$isFavorite})=> $isFavorite ? theme.COLORS.LIGHT_300: "none"};
    }

    
    .favorite, .pencil{
        display: flex;
        position: absolute;
        top: 1.6rem;
        right: 1.8rem;
        background-color: transparent;
        width: 2.4rem;
        height: 2.4rem;
        color: ${({theme})=> theme.COLORS.LIGHT_300};
        font-size: 2.4rem;
    }

    img{
        width: 8.8rem;
        height: 8.8rem;

        margin-top: 4.6rem;
    }

    h4{ 
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;

        overflow-wrap: inherit;
    

        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    p{
        display: none;
    }

    span{
        color: ${({theme}) => theme.COLORS.CAKE_200};
    }


    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {

        gap: 1.5rem;
        
        img{
        width: 17.6rem;
        height: 17.6rem;

        border-radius: 50%;

        }

        .btn-food-name{
            font-size: 2.4rem;
        }

        p{
            display: flex;
            font-family: "Roboto", sans-serif;
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 160%;
            color: ${({theme}) => theme.COLORS.LIGHT_400};
        }

        span{
            font-size: 3.2rem;
        }

        .picker{
            display: flex;
            flex-direction: row;
            gap: 1.6rem;
            justify-content: center;

            button{
                max-width: max-content;
            }
        }
        
    }
`;