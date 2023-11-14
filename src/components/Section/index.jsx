import { Container } from "./styles";
import { Card } from "../Card";
import foodImage from "../../assets/Mask group-10.png"

export function Section({title, ...rest}){


    return(
    <Container {...rest}>
        <h3>{title}</h3>
        <div id="card-list">
                <Card  name="Salada Ravanello1" price="49,97" image={foodImage}/>
                <Card  name="Salada Ravanello2" price="49,97" image={foodImage}/>
                <Card  name="Salada Ravanello3" price="49,97" image={foodImage}/>
                <Card  name="Salada Ravanello4" price="49,97" image={foodImage}/>
                <Card  name="Salada Ravanello5" price="49,97" image={foodImage}/>
        </div>
    </Container>
    );
}