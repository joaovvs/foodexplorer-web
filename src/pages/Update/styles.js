import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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
        
        grid-area: navigate;

        margin: 1.2rem 5.6rem 3.5rem 3.2rem;

        button{
            align-items: center;
            font-family: 'Poppins', sans-serif;
            font-size: 1.6rem;

            svg{
                font-size: 2.2rem;
            }
        }
    }

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            main{
                padding: 4rem 12.3rem;
            }

         }

     
`;

export const Form = styled.form`
    grid-area: content;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    width: 100%;


    gap: 2.4rem;
    
    padding: 0 3.2rem;


    //animation
    animation: apear 3s;
    
    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 2.7rem;

        color: ${({theme})=> theme.COLORS.LIGHT_300};
        font-weight: 500;
    }

    h3{
            color: ${({theme})=> theme.COLORS.LIGHT_400};
            font-size: 1.6rem;
            font-weight: 400;
            margin-bottom: 1.6rem;
    }

    .food-data{
        display: flex;
        flex-direction: column;

        gap: 1.6rem;
    }

    .ingredients-and-price{
        display: flex;
        flex-direction: column;

        gap: 1.6rem;
    }
    .ingredients{
        display: flex;
        flex-direction: column;

        gap: 1.6rem;

        width: 100%;

        label{
            font-size: 1.6rem;
            color: ${({theme})=> theme.COLORS.LIGHT_400};
        }
        
    }

    .tags-wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        align-items: center;

        background: ${({theme})=> theme.COLORS.DARK_900};

        border-radius: 0.8rem;

        padding: 0.4rem;
        gap: 1.6rem;

        input{
            display: flex;
            flex:1;
        }

    }

    .btn-wrapper{
        display: flex;
        gap: 3.2rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {

        align-items: flex-start;

        gap: 3.2rem;

        h1{
            font-size: 3.2rem;
        }

        .food-data{
            flex-direction: row;
            width: 100%;

            gap: 3.2rem;

            .inputFile{
                display: flex;
                width: fit-content;

                label{
                    width: max-content;
                }
            }

        }


        .ingredients-and-price{
            flex-direction: row;
            width: 100%;

            align-items: center;

            gap: 3.2rem;

            .food-price{            
                font-size: 1.6rem;
                line-height: 100%;
                width: 40%;
            }

        }

        .food-description{
            width: 100%;
        }

        .btn-wrapper{
            align-self: last baseline;
            button{
                display: flex;
                width: max-content;
            }
        }
    }
`;