function ProductSize(props) {
    const {product} = props;
    if (!product.size) return;

    return (
        <span style={{fontSize: "small", color: "blue"}}>
            &nbsp;({product.size}cl)
        </span>
    );
}

export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name) return;

    return (
        <div style={{margin: "2vw", fontSize: "larger", display: "flex"}}>
            <div style={{flex: 1}}>
                {product.name}
                <ProductSize product={product}/>
            </div>
            <div style={{flex: 1}}>{product.price} &euro;</div>
        </div>
    );
}

