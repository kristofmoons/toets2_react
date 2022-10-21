import {Drinks} from "../components/Drinks";
import {Form} from "react-bootstrap";
import {useState} from "react";
import {Orders} from "../components/Orders";


export function DrinksPage(props) {
    const {drinks} = props;
    const [warm, setWarm] = useState(0);
    return (
        <div className="mx-3">
            <div className="m-3">
                <Form className="mx-3">
                    <Form.Label>Warme dranken?</Form.Label><br/>
                    <Form.Check inline checked={warm ===0} label="geen voorkeur" name="warm"
                                type="radio" id="warm-1" onChange={() => setWarm(0)}/>
                    <Form.Check inline checked={warm === 1} label="neen" name="warm"
                                type="radio" id="warm-2" onChange={() => setWarm(1)}/>
                    <Form.Check inline checked={warm ===2} label="ja" name="warm"
                                type="radio" id="warm-3" onChange={() => setWarm(2)}/>
                </Form>
            </div>

            <Drinks drinks={drinks} title="DrankenKaart" isInitiallyOpen={true} />
            {/*<Drinks drinks={drinks.filter(d => d.warm===false)} title="DrankenKaart (koud)" isInitiallyOpen={true} style={warm !==1? {  visibility:"hidden"}:{  visibility:"hidden"}}/>*/}
            {/*<Drinks drinks={drinks.filter(d => d.warm===true)} title="DrankenKaart (warm)" isInitiallyOpen={true} style={warm !==2? {  visibility:"hidden"}:{  visibility:"hidden"}}/>*/}
            <Orders drinks={drinks}/>



        </div>
    );
}