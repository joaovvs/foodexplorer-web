import styled from "styled-components";



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

        margin-bottom: 2.4rem;

        color: ${({theme})=> theme.COLORS.LIGHT_300};
    }

    #card-list{
        display: flex;
        position: relative;

    

    }

    .gradient{
            background: linear-gradient(90deg, black 3%, transparent 30% 70%, black 97%);
            position: absolute;
            border-radius: .5rem;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: .8;
    }

    .navigation-wrapper {
        position: relative;
        overflow: hidden;
    }
    

    .arrow {
        width: 3rem;
        height: 3rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        cursor: pointer;

        
        svg{
            fill: ${({theme})=> theme.COLORS.LIGHT_200};
            font-size: 3rem;
        }

        &:hover{
            filter: brightness(0.7);
        }
    }

    .arrow--left {
        left: 5px;
    }

    .arrow--right {
        left: auto;
        right: 5px;
    }

    .arrow--disabled {
        fill: ${({theme})=> theme.COLORS.LIGHT_100};
        opacity: 0.5;
    }
`;


