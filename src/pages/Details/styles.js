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
        justify-items: center;
        grid-area: navigate;

        margin: 3.75rem 5.6rem 1.6rem 5.6rem;

        button{
        font-family: 'Poppins', sans-serif;
        font-size: 2.4rem;
        }

    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        nav{
            margin-top: 2.5rem;
            margin-left: 12.2rem;
            
        }
    }
   

`;

export const Main = styled.main`
    grid-area: content;
    overflow-y: auto;

    display: flex;
    flex-direction: column;

    align-items: center;

    padding: 0 5.6rem 3.3rem;

    animation: apear 3s;
    
    img{
        width: 26.4rem;
        border-radius: 50%;
    }
    
    

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        display: flex;
        flex-direction: row;

        align-content: center;

        gap: 4.7rem;

        padding: 0 12.1rem;

        img{
            width: 39rem;
            height: 39rem;
            border: 50%;

            
        }

    }
`;

export const Section = styled.section`
        display: flex;
        flex-direction: column;

        align-items: center;
        
        gap: 4.8rem;

        #food-data{
                display: flex;
                flex-direction: column;
                gap: 2.4rem;
                align-items: center;

                
                h1{
                    font-family: 'Poppins', sans-serif;
                    font-size: 2.7rem;

                    color: ${({theme})=> theme.COLORS.LIGHT_300};
                    font-weight: 500;
                }

                p{
                    font-size: 2.4rem;
                    color: ${({theme})=> theme.COLORS.LIGHT_300};

                    
                }

                .tag-list{
                    display: flex;
                    flex-wrap: wrap;
                    gap: 2.4rem;

                    justify-content: center;

                }
            }

        .btn-edit{
            font-size: 1.4rem;
        }

        .picker{
            display: flex;
            flex-direction: row;

            margin-bottom: 2rem;

            .btn-add-cart{
                font-size: .9rem;

                padding: .8rem 1.6rem; 
                gap: .54rem;
                svg{
                    font-size: 2.1rem;
                }
            }
            

        }

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            #food-data{
                align-items: flex-start;
                h1{
                    font-size: 4rem;
                }
            }
            .btn-edit{
                font-size: 1.4rem;
                max-width: max-content;

                align-self: flex-start;
            }
            .picker{
                .btn-add-cart{
                    font-size: 1.4rem;
                    max-width: max-content;

                    padding: 1.2rem 2.4rem;
                    svg{
                        display: none;
                    }
                }
            }
        }

`;