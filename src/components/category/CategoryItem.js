import React from 'react';
import {useDispatch} from "react-redux";
import {addProduct} from "../../features/basket/basketSlice";
import {Button} from "react-bootstrap";

function CategoryItem(item, addProduct) {
    const dispatch = useDispatch()
    return (
        <div>
            <tr onClick={() => {dispatch(addProduct(item))}}>
                <td>{item.name}</td>
            </tr>
        </div>
    );
}

export default CategoryItem;