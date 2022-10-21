import {Section} from "./Section";
import {Col} from "react-bootstrap";
import {MyCard} from "./MyCard";

function Drink(props) {
    const {drink} = props;
    return (
        <Col xs={6} sm={4} md={3} lg={2}>
            <MyCard title={drink.name}>
                <div>{drink.price}</div>
                <div>{drink.type}</div>
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
