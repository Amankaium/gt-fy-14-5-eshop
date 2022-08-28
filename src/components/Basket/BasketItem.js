import { useState } from "react";
import { useDispatch } from 'react-redux';
import { newCounter } from "../../features/basket/basketSlice";

export default function BasketItem({ item }) {    
    const [counter, setCounter] = useState(item.counter)

    const style = {
        inputStyle: {
            width: '50px'
        }
    }

    const dispatch = useDispatch()

    const changeCounter = (event) => {
        const newValue = Number(event.target.value)
        setCounter(newValue)
        dispatch(newCounter(item, newValue))
    }

    return (
        <div>
            {item.name}
            <input
                style={style.inputStyle}
                type="number"
                value={counter}
                onChange={changeCounter}
            />
        </div>
    )
}