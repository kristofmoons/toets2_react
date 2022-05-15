import {Section} from "./Section";
import {Button} from "react-bootstrap";

export function EventDemo() {
    return <Section title="events">
        <button className="m-2"
                onClick={() => {
                    alert("button is clicked");
                }}>click me please!
        </button>
        <Button className="m-2"
                onClick={() => {
                    alert("bootstrap button is clicked");
                }}>click me please!
        </Button>
    </Section>;
}