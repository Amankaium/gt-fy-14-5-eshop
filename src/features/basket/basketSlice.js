import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newProduct = action.payload
            const basket = state.value
            const res = basket.find((element) => { return element.id === newProduct.id})
            if (!res) {
                newProduct.counter = 1
                state.value = [...state.value, newProduct]
            } else {
                const newBasket = basket.map((item) => { 
                    // [{id: 1, name: Apple, counter: 1}, {id: 2, name: Banana, counter: 1}, ]
                    if (item.id === res.id) {
                        item.counter += 1
                        return item
                    }
                    return item
                })
                state.value = newBasket
            }
        },
        newCounter: (state, action) => {
            const newProduct = action.payload // {id: 2, counter: 33}
            const basket = state.value // [{id: 1, ...}, {id: 2, counter: 8}]
            basket.map(product => {
                product.id === newProduct.id ? product.counter = newProduct.counter : product.counter = product.counter
                // if ( product.id === newProduct.id ) {
                //     product.counter = newProduct.counter
                // }
                return product
            })

        }
    }
})

export const { addProduct, newCounter } = basketSlice.actions
export default basketSlice.reducer
