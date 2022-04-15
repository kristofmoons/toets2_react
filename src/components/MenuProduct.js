export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name) return;

    const size = product.size && ` (${product.size}cl)`;
    return (
        <div style={{margin: "2vw", fontSize: "larger", display: "flex"}}>
            <div style={{flex: 1}}>
                {product.name}
                <span style={{fontSize: "small", color: "blue"}}>{size}</span>
            </div>
            <div style={{flex: 1}}>{product.price} &euro;</div>
        </div>
    );
}

