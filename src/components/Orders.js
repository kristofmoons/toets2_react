import {useState} from "react";

export function Orders(props) {
    const {orders} = props;
    const [order, setOrder] = useState();
    return (
        <div className="mx-3">

            <div>Volgende bestelling werd genoteerd: {order ?? "(nog niet gekozen)"}</div>
        </div>
    );
}