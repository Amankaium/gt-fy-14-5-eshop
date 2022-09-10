import { useDispatch } from 'react-redux';
import { newCounter, deleteProduct } from "../../features/basket/basketSlice";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Dropdown } from 'react-bootstrap';
import {Button} from "react-bootstrap";


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
                <Button onClick={deleteItem}>x</Button>
            </FloatingLabel>
        </Dropdown.Item>
    )
}