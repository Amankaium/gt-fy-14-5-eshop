import ProductItem from "./ProductItem";


const ProductList = ({addToBasket}) => {
    const products = [
        {
            id: 1,
            name: "Яблоко"
        },
        {
            id: 2,
            name: "Груша"
        },
    ]

    return (
        <div>
            <h1>Список товаров</h1>
            { products.map(
                product => <ProductItem
                    item={product}
                    key={product.id}
                    addToBasket={addToBasket}
                />
            ) }
        </div>
    )
}

export default ProductList;
