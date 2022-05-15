import {Section} from "./Section";

export function EventDemo() {
    return <Section title="events">
        <button className="m-2"
                onClick={() => {
                    alert("button is clicked");
                }}>click me please!
        </button>
    </Section>;
}