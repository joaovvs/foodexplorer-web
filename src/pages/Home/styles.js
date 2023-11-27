import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header"
    "content"
    "footer";

    background: ${({theme}) => theme.COLORS.DARK_400};

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {

    }
`;

export const Content = styled.main`
    grid-area: content;
    overflow-y: auto;

    display: flex;
    flex-direction: column;

    gap: 2.4rem;
    

    padding: 4.4rem 1.6rem 2.4rem 3.6rem;
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        padding: 16.4rem 12.4rem;
    }
`;