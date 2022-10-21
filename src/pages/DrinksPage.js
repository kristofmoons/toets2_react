import {Drinks} from "../components/Drinks";


export function DrinksPage(props) {
    const {drinks} = props;
    console.log(drinks)
    return (
        <div className="mx-3">

            <Drinks drinks={drinks} title="DrankenKaart" isInitiallyOpen={true}/>

        </div>
    );
}