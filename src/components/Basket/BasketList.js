import BasketItem from "./BasketItem";

export default function BasketList( {basket, addToBasket} ) {
    return (
        <div>
            <h2>Корзина</h2>
            <div>{basket.map((product, index) => <BasketItem item={product} key={index} addToBasket={addToBasket}/>)}</div>
        </div>
    )
}