import BasketItem from "./BasketItem";
import { useSelector } from "react-redux";

export default function BasketList() {
    const basket = useSelector((state) => state.basket.value)
    return (
        <div>
            <h2>Корзина</h2>
            <div>{basket.map((product, index) => <BasketItem item={product} key={index}/>)}</div>
        </div>
    )
}
