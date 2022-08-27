import { useState } from 'react';
import ProductList from '../Product/ProductList';
import BasketList from '../Basket/BasketList';


export default function Main() {

    return (
        <div>
            <ProductList/>
            <BasketList/>
        </div>
    )
}