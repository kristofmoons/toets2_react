export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name) return;

    const size = product.size && `(${product.size}cl)`;
    return (
        <div>{product.name} {size} -- {product.price} &euro;</div>
    );
}

