import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    padding: 1.2rem 3.2rem;

    border-radius: .5rem;

    background-color: ${({theme, $isDelete}) => $isDelete ? theme.COLORS.DARK_900 : theme.COLORS.TOMATO_100};

    font-family: 'Poppins', sans-serif;

    font-size: 1.4rem;
    font-weight: 500;

    line-height: 2.4rem;

    color: ${({theme}) => theme.COLORS.LIGHT_100};


    &:disabled{
        background-color: ${({theme}) => theme.COLORS.TOMATO_400};

    }

    &:hover {
        background-color: ${({theme}) => theme.COLORS.TOMATO_200};
    }
`;


