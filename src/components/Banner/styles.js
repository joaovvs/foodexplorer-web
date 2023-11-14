import styled from "styled-components";
import backgroundImage from "../../assets/banner.png"

export const Container = styled.div`
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
    

    h2{
        font-family: 'Poppins', sans-serif;
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 140%;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }
    p{
        max-width: 20.2rem;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 140%;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    #banner-img{
        position: absolute;
        width: 19.1rem;
        height: 14.9rem;
        z-index: 1;
        bottom: 0;

        margin-top: -6.5rem;
        margin-left: -18.3rem;
        background: url(${backgroundImage}) 0px 0px / 100% 170.598% no-repeat;;
        opacity: 0.8;

        transform: scaleX(-1);
    }
`;
