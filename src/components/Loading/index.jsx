import { Container } from "./styles";
import { FadeLoader } from 'react-spinners'

export function Loading(){
    return(
        <Container>
            <FadeLoader/>
        </Container>
    )
}