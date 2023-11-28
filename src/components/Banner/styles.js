import styled from "styled-components";
import backgroundImage from "../../assets/banner.png"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.section`
    height: 12rem;

    background: ${({theme}) => theme.COLORS.GRADIENTS_200};

    padding: 3.6rem 2.1rem 2.2rem 15.3rem;
    padding-top: 3.6rem;
    padding-right: 2.1rem;
    border-radius: .3rem;

    display: flex;
    flex-direction: column;

    position: relative;

    margin-bottom: 3.8rem;

    animation: apear 1s;
    

    h2{
        font-family: 'Poppins', sans-serif;
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 140%;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        //animations
        --startX: 350%;
        --delay: .3s;
        animation: moveX 1s;
        animation-direction: reverse;
    }
    p{
        max-width: 20.2rem;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 140%;
        color: ${({theme}) => theme.COLORS.LIGHT_300};

        //animation
        --startX: 350%;
        animation: moveX 2s;
        animation-direction: reverse;

    }

    #banner-img{
        position: absolute;
        width: 19.1rem;
        height: 14.9rem;
        z-index: 1;
        bottom: 0;

        margin-left: -18.3rem;
        background: url(${backgroundImage}) 0px 0px / 100% 170.598% no-repeat;;
        opacity: 0.8;

        transform: scaleX(-1);

    }


    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        height: 26rem;

        background: ${({theme}) => theme.COLORS.GRADIENTS_200};

        padding: 8.8rem 10rem 9.2rem  59.8rem;
        border-radius: .3rem;

        display: flex;
        flex-direction: column;

        position: relative;

        margin-bottom: 3.8rem;


        h2{
            font-family: 'Poppins', sans-serif;
            font-size: 4rem;
            font-weight: 500;
            line-height: 140%;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
        }
        p{
            max-width: 100%;
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 140%;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            
        }

        #banner-img{
            position: absolute;
            width: 63.2rem;
            height: 40.6rem;
            z-index: 1;
            bottom: 0;


            margin-left: -70rem;
            background: url(${backgroundImage}) 0px 0px / 100% 197.562% no-repeat;;
            opacity: 0.8;

            transform: scaleX(-1);

        }
}
`;
