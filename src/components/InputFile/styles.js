import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 1.6rem;



    >label{
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        background: none;
        line-height: 100%;
    }

    div{
        display: flex;
        width: 100%;
        padding: 1.2rem 3.2rem 1.2rem 7rem;
        position: relative;
        align-items: center;
        gap: .8rem;

        background: ${({theme}) => theme.COLORS.DARK_900};

        border-radius: .8rem;

        svg{
            
            color: ${({theme}) => theme.COLORS.LIGHT_400};
            position: absolute;
            left: 3.2rem;
            font-size: 3.2rem;
            transform: translateY(-50%);
            top: 50%;
        }

        label{
            font-family: 'Poppins', sans-serif;
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.LIGHT_400};
        }

    }

    #file-input{
        display:none;
    }

`;