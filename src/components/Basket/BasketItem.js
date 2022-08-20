import { useState, useEffect } from "react"

export default function BasketItem({item, addToBasket}) {    
    const style = {
        inputStyle: {
            width: '50px'
        }
    }

    const changeCounter = (event) => {
        const newValue = event.target.value
        addToBasket(item, Number(newValue))
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