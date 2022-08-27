import { useDispatch } from "react-redux";
import { addProduct } from "../../features/basket/basketSlice";


export default function ProductItem({item, addToBasket}) {
    const dispatch = useDispatch()
    return (
        <div>
            {item.name}
            <button onClick={() => dispatch(addProduct(item))}>+</button>
        </div>
    )
}