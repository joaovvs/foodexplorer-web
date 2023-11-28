import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    position: relative;

    align-items: center;
    padding: 1rem 1.6rem;
    border-radius: 1rem;
    gap: 1.6rem;
    background: ${({theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};
    border: ${({theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    input{
        display: flex;
        flex: 1;
        background: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
    #remover-estilo { 
        display: flex;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: none;

        font-size: 1.6rem;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }



    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }

    >button{  
        width: 2.4rem;
        height: 2.4rem; 
        align-items: center;

        background: none;
        svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 1.6rem;
            color: ${({theme, $isNew}) =>  $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
            font-size: 2rem;
        }
    }
`;