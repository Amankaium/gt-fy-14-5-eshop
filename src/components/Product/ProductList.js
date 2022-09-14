import ProductItem from "./ProductItem";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap'


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

    function getAxiosData() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => setProducts(response.data))
    }

    useEffect(getAxiosData, [])

    return (
        <div>
            <h1>Список товаров</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Добавить</th>
                </tr>
            </thead>
            <tbody>
                { products.map(
                    product => <ProductItem
                        item={product}
                        key={product.id}
                    />
                ) }
            </tbody>
        </Table>
        </div>
    )
}

export default ProductList;
