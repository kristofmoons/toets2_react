import {Button, Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import {useState} from "react";

function SectionContent(props) {
    const {isOpen, children} = props;
    if (!isOpen) return;
    return (
        <Container>
            <Row>
                {children}
            </Row>
        </Container>
    );
}

export function Section(props) {
    const {title, children} = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="my-3 p-1 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <h2 className="text-center">{title}
                <Button variant="outline-primary" size="sm" className="ms-2 mt-1"
                        onClick={() => {
                            alert("klik klik klik");
                        }}>klik</Button>
            </h2>
            <SectionContent isOpen={isOpen}>{children}</SectionContent>
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}