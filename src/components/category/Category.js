import React, {useEffect, useState} from 'react';
import CategoryItem from "./CategoryItem";
import ProductItem from "../Product/ProductItem";
function Category(props) {

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
            { products.map(
                product => <ProductItem
                    item={product}
                    key={product.id}
                />
            ) }
        </div>
    );
}

export default Category;