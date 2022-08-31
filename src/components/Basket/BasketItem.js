import { useState } from "react";
import { useDispatch } from 'react-redux';
import { newCounter } from "../../features/basket/basketSlice";

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

    return (
        <div>
            {item.name}
            <input
                style={style.inputStyle}
                type="number"
                value={item.counter}
                onChange={changeCounter}
            />
        </div>
    )
}