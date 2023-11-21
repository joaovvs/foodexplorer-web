import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: auto;

    position: relative;

    align-items: center;
    padding: 1rem 1.6rem;
    border-radius: 1rem;
    gap: 1.6rem;
    background: ${({theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};
    border: ${({theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    
    >input {

        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background: transparent;

        width: 100%;

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

        position: absolute;
        top: 1rem;
        right: 1.6rem;

        width: 2.4rem;
        height: 2.4rem; 
        align-items: center;

        background: none;
        svg {
            color: ${({theme, $isNew}) =>  $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
            font-size: 2rem;
        }
    }
`;