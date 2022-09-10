import { useState } from "react";
import { useDispatch } from 'react-redux';
import { deleteProduct, newCounter } from "../../features/basket/basketSlice";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Dropdown } from 'react-bootstrap';


export default function BasketItem({ item }) {    

    const style = {
        inputStyle: {
            width: '50px'
        }
    }

    const dispatch = useDispatch()

    const changeCounter = (event) => { 
        const newValue = Number(event.target.value)
        item = {
            ...item,
            counter: newValue
        }
        dispatch(newCounter(item))
    }
		const deleteItem = (event) => {
			dispatch(deleteProduct(item))
		}

    return (
        <Dropdown.Item>
            <FloatingLabel controlId="floatingInput" label={item.name}>
                <Form.Control type="number" placeholder={item.name} value={item.counter} onChange={changeCounter}/>
								{/* <button onClick={deleteItem}>Delete</button> */}
								<button type="button" class="btn btn-outline-primary">Delete</button>
            </FloatingLabel>
        </Dropdown.Item>
    )
}