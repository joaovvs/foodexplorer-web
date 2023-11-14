import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    width: 100%;

    gap: .8rem;

    >label{
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        background: none;
        line-height: 100%;
    }

    input{
        width: 100%;
        padding: 1.2rem 1.4rem;
        border: none;

        border-radius: .8rem;
        background: ${({theme}) => theme.COLORS.DARK_900};

        color: ${({theme}) => theme.COLORS.LIGHT_400};



        &::placeholder{
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }

`;