import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";



export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    justify-content: center;

    h3{
        font-family: 'Poppins', sans-serif;
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 140%;
        text-transform: capitalize;
        margin-bottom: 2.4rem;

        color: ${({theme})=> theme.COLORS.LIGHT_300};
    }


    .gradient-left{
            background: linear-gradient(90deg, black , transparent);
            position: absolute;
            border-radius: .5rem;
            top: 0;
            width: 33%;
            height: 100%;
            opacity: .8;
            z-index: 1;
    }

    .gradient-right{
            background: linear-gradient(90deg, transparent, black);
            position: absolute;
            border-radius: .5rem;
            top: 0;
            right: 0;
            width: 34%;
            height: 100%;
            opacity: .8;
            z-index: 1;
    }

    .wrapper {
        position: relative;
        overflow: hidden;

        .swiper-wrapper{
            z-index: 0;
        }
    }

    

    .swiper-button-prev, .swiper-button-next {
        width: 3rem;
        height: 3rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        cursor: pointer;

        
        svg{
            fill: ${({theme})=> theme.COLORS.LIGHT_200};
            font-size: 3rem;
        }

        &:hover{
            filter: brightness(0.7);
        }
    }


    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    
        h3{
            font-size: 3.2rem;
        }


        .swiper-button-prev, .swiper-button-next{
            width: 4rem;
            height: 4rem;
        }

    }
`;


