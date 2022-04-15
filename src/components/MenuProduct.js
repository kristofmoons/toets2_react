function ProductSize(props) {
    const {product} = props;
    if (!product.size) return;

    return (
        <span style={{fontSize: "small", color: "blue"}}>
            &nbsp;({product.size}cl)
        </span>
    );
}


function ProductNote(props) {
    const {product} = props;
    if (!product.note) return;

    return (
        <div style={{fontSize: "small", color: "blue"}}>
            {product.note}
        </div>
    );
}

const menuProductStyles = {
    outerDiv: {margin: "2vw", fontSize: "larger"},
    mainRowDiv: {display: "flex"},
};

export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name) return;

    return (
        <div style={menuProductStyles.outerDiv}>
            <div style={menuProductStyles.mainRowDiv}>
                <div style={{flex: 1}}>
                    {product.name}
                    <ProductSize product={product}/>
                </div>
                <div style={{flex: 1}}>{product.price} &euro;</div>
            </div>
            <ProductNote product={product}/>
        </div>
    );
}

