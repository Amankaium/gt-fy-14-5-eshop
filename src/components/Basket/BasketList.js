import React from 'react';
import BasketItem from "./BasketItem";
import {useSelector} from "react-redux";
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Button} from "react-bootstrap";
import {Stack} from "react-bootstrap"

function BasketList() {
    const basket = useSelector((state) => state.basket.value)
    return (
        <div class="d-flex p-2 bd-highlight" class="d-flex flex-row-reverse bd-highlight">
            <DropdownButton id="dropdown-item-button" title="Корзина">
                {basket.map((product, index) => <BasketItem item={product} key={index}/>)}
            </DropdownButton>
        </div>
    );
}

export default BasketList;
