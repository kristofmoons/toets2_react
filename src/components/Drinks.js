import {Section} from "./Section";
import {Col, Row} from "react-bootstrap";
import {MyCard} from "./MyCard";

function DrinkNote(props) {
    const {drink} = props;
    if (!drink.note) return;

    return (
        <Row className="fs-6">
            <Col>
               opm: {drink.note}
            </Col>
        </Row>
    );
}

function DrinkType(props) {
    const {drink} = props;
    if (!drink.warm !==true) return  <Row className="fs-6">
        <Col>
            type: Warm
        </Col>
    </Row>;

    return ( <Row className="fs-6">
            <Col>
                type: Koud
            </Col>
        </Row>

    );
}


function Drink(props) {
    const {drink} = props;
    return (
        <Col xs={6} sm={4} md={3} lg={2}>
            <MyCard title={drink.name}>
                <div>prijs: {drink.price}</div>
                <DrinkNote drink={drink}/>
                <DrinkType drink={drink}/>
            </MyCard>
        </Col>
    );
}

export function Drinks(props) {
    const {drinks, title, isInitiallyOpen} = props;
    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {drinks.map(d => <Drink key={d.name} drink={d} />)}
        </Section>
    );
}
