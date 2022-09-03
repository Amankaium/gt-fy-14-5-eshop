import { useDispatch } from "react-redux";
import { addProduct } from "../../features/basket/basketSlice";
import { Button } from 'react-bootstrap';


export default function ProductItem({item, addToBasket}) {
    const dispatch = useDispatch()
    return (
        <tr onClick={() => {dispatch(addProduct(item))}}>
            <td>{item.name}</td>
            <td>105</td>
            <td>
                <Button onClick={() => {dispatch(addProduct(item))}}>
                    +
                </Button>
            </td>
        </tr>
    )
}