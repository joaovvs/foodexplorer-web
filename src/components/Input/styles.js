import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 1.6rem;

    >label{
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        background: none;
        line-height: 100%;
    }
    >div{
        display: flex;
        width: 100%;
        padding: 1.4rem 1.4rem;

        align-items: center;
        gap: 1.4rem;

        background: ${({theme}) => theme.COLORS.DARK_900};

        border-radius: 0.8rem;

        svg{
            color: ${({theme}) => theme.COLORS.LIGHT_400};
        }

        input{

            border: none;
            flex:1;
            border-radius: .8rem;

        
            background: ${({theme}) => theme.COLORS.DARK_900};

            color: ${({theme}) => theme.COLORS.LIGHT_400};x

            &::placeholder{
                color: ${({theme}) => theme.COLORS.LIGHT_500};
            }

        }
    }

`;