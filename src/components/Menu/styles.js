import styled from "styled-components";

export const Container = styled.div`
    

    display: grid;
    height: 100vh;
    width: 100%;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header"
    "content"
    "footer";

    background: ${({theme}) => theme.COLORS.DARK_400};


    position: absolute;
    z-index: 2;

    header{
        display: flex;
        align-items: center;

        grid-area: header;

        padding: 5.6rem 2.8rem 2.4rem;

        gap: 1.6rem;
        background:  ${({theme}) => theme.COLORS.DARK_700};

        h2{
            font-size: 2.1rem;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            font-weight: 400;
        }
    }

    main{
        grid-area: content;
        display: flex;
        flex-direction: column;
        padding: 0 2.8rem;

        gap: 3.6rem;
        ul li{
            list-style: none;
            border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};

            padding: 1rem;

            button{
                font-family: 'Poppins', sans-serif;
                font-size: 2.4rem;
                font-weight: 300;
            }
        }
    }

`;
