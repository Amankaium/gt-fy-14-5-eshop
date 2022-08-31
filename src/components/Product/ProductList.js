import ProductItem from "./ProductItem";
import { useState, useEffect } from 'react';


const ProductList = () => {
    // const products = [
    //     {
    //         id: 1,
    //         name: "Яблоко"
    //     },
    //     {
    //         id: 2,
    //         name: "Груша"
    //     },
    // ]

    const [products, setProducts] = useState([])
    
    function getData() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setProducts(data)
                const date = new Date()
                console.log(date)
            })
    }

    useEffect(getData, [])

    return (
        <div>
            <h1>Список товаров</h1>
            { products.map(
                product => <ProductItem
                    item={product}
                    key={product.id}
                />
            ) }
        </div>
    )
}

export default ProductList;
