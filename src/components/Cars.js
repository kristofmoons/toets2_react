import PropTypes from "prop-types";
import {Card, Col, Container, Row} from "react-bootstrap";

function Car(props) {
    const {car} = props;
    return (
        <Col key={car.id}
             xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
             className={"text-center "}>
            <Card className="m-2 p-2 shadow-sm">
                <h5>{car.name}</h5>
                {car.brand && <div>merk: {car.brand}</div>}
                {car.type && <div>type: {car.type}</div>}
                {car.color && <div>kleur: {car.color}</div>}
            </Card>
        </Col>
    );
}

export function Cars(props) {
    const {cars, title} = props
    return (
        <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <h2 className="text-center">{title}</h2>
            <Container>
                <Row>
                    {cars.map(c => <Car car={c}/>)}
                </Row>
            </Container>
        </div>
    );
}

Cars.propTypes = {
    cars: PropTypes.array,
    title: PropTypes.string
};