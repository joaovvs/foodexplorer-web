import styled from "styled-components";


export const Container = styled.div`
    background: ${({theme})=> theme.COLORS.DARK_1000};
    font-size: 1.4rem;
    line-height: 2.4rem;

    border-radius: .5rem;

    font-family: 'Poppins', sans-serif;
    padding: .4rem .8rem ;
    color:  ${({theme})=> theme.COLORS.LIGHT_100};
`