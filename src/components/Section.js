import {Button, Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";

export function Section(props) {
    const {title, children} = props;
    return (
        <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <h2 className="text-center">{title}
                <Button variant="outline-primary" size="sm" className="ms-2 mt-1"
                        onClick={() => {
                            alert("klik klik klik");
                        }}>klik</Button>
            </h2>
            <Container>
                <Row>
                    {children}
                </Row>
            </Container>
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}