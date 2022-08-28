import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addProduct: (state, product) => {
            const newProduct = product.payload
            const basket = state.value
            const res = basket.find((element) => { return element.id === newProduct.id})
            if (!res) {
                newProduct.counter = 1
                state.value = [...state.value, newProduct]
            } else {
                const newBasket = basket.map((item) => {
                    if (item.id === res.id) {
                        item.counter += 1
                        return item
                    }
                })
                state.value = newBasket
            }
        },
        newCounter: (state, product, newValue) => {
            console.log(product)
            console.log(newValue)
        }
    }
})

export const { addProduct, newCounter } = basketSlice.actions
export default basketSlice.reducer
