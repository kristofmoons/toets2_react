import {MenuProduct} from "./MenuProduct";
import PropTypes from "prop-types";

export function MenuCard(props) {
    const {products} = props;
    return (
        <div>
            <h1>Menu</h1>
            {products.map(p => <MenuProduct key={p.name} product={p}/>)}
        </div>
    );
}

MenuCard.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}