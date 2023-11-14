import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    
    width: max-content;

    background-color: transparent;

    font-family: 'Poppins', sans-serif;

    font-size: 1.4rem;
    font-weight: 500;

    line-height: 2.4rem;

    color: ${({theme}) => theme.COLORS.LIGHT_100};
`;


