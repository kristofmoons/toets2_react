import PropTypes from "prop-types";
import {MenuCard} from "../components/MenuCard";

export function MenuCardPage(props) {
    const {products} = props;
    return <MenuCard products={products}/>
}


MenuCardPage.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}