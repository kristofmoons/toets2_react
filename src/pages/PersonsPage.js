import * as PropTypes from "prop-types";
import {Persons} from "../components/Persons";
import {Numbers} from "../components/Numbers";

Persons.propTypes = {title: PropTypes.string};

export function PersonsPage(props) {
    const {persons} = props;
    return (
        <div className="mx-3">
            <Persons persons={persons} title="alle personen"/>
            <Persons persons={[...persons].sort((pl, pr) => pr.age-pl.age)} title="alle personen volgens leeftijd"/>
            <Numbers numbers={persons.map(p => p.age)} title="leeftijden"/>
            <Numbers numbers={[...new Set(persons.map(p => p.age))].sort((nl,nr)=>nr-nl)} title="unieke leeftijden gesorteerd"/>

        </div>
    );
}