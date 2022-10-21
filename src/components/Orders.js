import {useState} from "react";

export function Orders(props) {
    const {orders} = props;
    const [order, setOrder] = useState();
    return (
        <div className="mx-3">
            <Orders orders={[...new Set(orders)]} title="alle getallen"
                    isInitiallyOpen={true}
                    markedOrder={order}
                    onSelectOrder={o => setOrder(order + o)}/>
            <div>{order ?? ""}</div>
        </div>
    );
}