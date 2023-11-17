import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 1.6rem;

    >label{
        font-size: 1.6rem;

        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        line-height: 100%;
    }

    >select{
        appearance: none;


        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1.4rem' height='1.4rem' fill='%23C4C4CC' viewBox='0 0 256 256'%3E%3Cpath d='M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z'%3E%3C/path%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 1.6rem top 50%;

        background-color: ${({theme}) => theme.COLORS.DARK_900};
        border: none;

        border-radius: 0.8rem;
        
        padding: 1.35rem 1.4rem;

        font-family: 'Roboto', sans-serif;
        
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        font-size: 1.4rem;
   
        option{
            color: ${({theme}) => theme.COLORS.LIGHT_400};
            font-size: 1.4rem;
        }
    }

`;