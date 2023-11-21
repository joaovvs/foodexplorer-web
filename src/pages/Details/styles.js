import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: auto;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas: "header"
    "navigate"
    "content"
    "footer";

    background: ${({theme}) => theme.COLORS.DARK_400};

    nav{
        display: flex;
        justify-items: center;
        grid-area: navigate;

        margin: 3.75rem 5.6rem 1.6rem 5.6rem;

        button{
        font-family: 'Poppins', sans-serif;
        font-size: 2.4rem;
        }

    }

   

`;

export const Main = styled.main`
    grid-area: content;
    overflow-y: auto;

    display: flex;
    flex-direction: column;

    align-items: center;

    padding: 0 5.6rem;

    margin-bottom: 3.3rem;
    
    img{
        width: 26.4rem;
    }
    
    section{
        display: flex;
        flex-direction: column;

        align-items: center;
        

        gap: 2.4rem;

        margin-bottom: 4.8rem;

        h1{
            font-family: 'Poppins', sans-serif;
            font-size: 2.7rem;

            color: ${({theme})=> theme.COLORS.LIGHT_300};
            font-weight: 500;
        }

        p{
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-size: 1.62rem;
            color: ${({theme})=> theme.COLORS.LIGHT_300};
        }
    }

    .tag-list{
        display: flex;
        flex-wrap: wrap;
        gap: 2.4rem;

        justify-content: center;

    }

    >div:last-child{
        display: flex;
        flex-direction: row;

       margin-bottom: 2rem;


        button{
            font-size: .9rem;
            gap: .54rem;
        }

    }
`;