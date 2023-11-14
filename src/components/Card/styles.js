import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.4rem;

    gap: 1.2rem;

    min-width: 21rem;

    align-items: center;
    justify-content: center;
    border-radius: .8rem;
    border: 1px solid ${({theme})=> theme.COLORS.DARK_300};

    background: ${({theme})=> theme.COLORS.DARK_200};

    img{
        width: 8.8rem;
        height: 8.8rem;
    }

    h4{ 
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;

        overflow-wrap: inherit;
    

        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    span{
        color: ${({theme}) => theme.COLORS.CAKE_200};
    }
`;