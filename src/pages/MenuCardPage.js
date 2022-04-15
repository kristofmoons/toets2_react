import PropTypes from "prop-types";
import {MenuCard} from "../components/MenuCard";

export function MenuCardPage(props) {
    const {products} = props;
    return (
        <div style={{margin: "0 2vw"}}>
            <MenuCard products={products}/>
        </div>
    );
}


MenuCardPage.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}