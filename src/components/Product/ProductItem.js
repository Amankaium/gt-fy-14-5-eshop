export default function ProductItem({item, addToBasket}) {
    return (
        <div>
            {item.name}
            <button onClick={() => addToBasket(item)}>+</button>
        </div>
    )
}