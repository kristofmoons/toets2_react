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
                onClick={e => {
                    alert(`bootstrap button is clicked - pos: (${e.clientX}, ${e.clientY})`);
                }}>click me please!
        </Button>
        <div style={{backgroundColor: "pink"}}
             onClick={() => {
                 alert("DIV is clicked");
             }}>
            <p>Dit is een div. Op deze div zit een event handler.</p>
            <a href="http://google.com"
               onClick={(e) => {
                   e.preventDefault();
                   e.stopPropagation();
                   alert("link is clicked");
               }}>dit is een link met een href</a>
            &nbsp;- en -&nbsp;
            <Button
                onClick={(e) => {
                    e.stopPropagation();
                    alert("button is clicked");
                }}>
                dit is een button
            </Button>
        </div>
    </Section>;
}