import BasketItem from "./BasketItem";
import { useSelector } from "react-redux";
import { DropdownButton } from 'react-bootstrap';

export default function BasketList() {
    const basket = useSelector((state) => state.basket.value)
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title="Корзина">
                {basket.map((product, index) => <BasketItem item={product} key={index}/>)}
            </DropdownButton>
        </div>

    )
}
