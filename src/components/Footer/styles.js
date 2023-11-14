import styled from "styled-components";

export const Container = styled.div`
    grid-area: footer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2.9rem 2.7rem;

    width: 100%;

    background: ${({theme})=> theme.COLORS.DARK_600};;



    >div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .8rem;

        svg{
            width: 2.2rem;
            height: 2.2rem;

            path{
            fill: ${({theme})=> theme.COLORS.LIGHT_700};  
            }
        }

        span{
            font-size: 1.5rem;
            font-weight: bold;
            color: ${({theme})=> theme.COLORS.LIGHT_700};
        }

    
    }
  
    p{
            font-family: 'DM Sans', sans-serif;
            font-size: 1.2rem;
            color: ${({theme})=> theme.COLORS.LIGHT_200};
        }

    

`;