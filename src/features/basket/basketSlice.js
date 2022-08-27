import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addProduct: (state, product) => {
            state.value.push(product)
        }
    }
})

export const { addProduct } = basketSlice.actions
export default basketSlice.reducer
