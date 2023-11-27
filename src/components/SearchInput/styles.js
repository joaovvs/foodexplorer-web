import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    gap: 1.6rem;

    width: 100%;


    >label{
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        background: none;
        line-height: 100%;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }

    >div{
        display: flex;
        padding: 1.4rem 1.4rem;
        align-items: center;
        gap: 1.4rem;

        background: ${({theme}) => theme.COLORS.DARK_900};

        border-radius: 0.8rem;

        svg{
            color: ${({theme}) => theme.COLORS.LIGHT_400};
        }

        input{
            width: 100%;
            border: none;

            border-radius: .8rem;
        
            background: ${({theme}) => theme.COLORS.DARK_900};

            color: ${({theme}) => theme.COLORS.LIGHT_400};



            &::placeholder{
                color: ${({theme}) => theme.COLORS.LIGHT_500};
            }
        }
    }

`;