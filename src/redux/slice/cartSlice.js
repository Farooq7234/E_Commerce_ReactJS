import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

const initialState = {
    cartItems: [],
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            const newItem = { ...action.payload, uniqueId: uuidv4() };
            const existingItem = state.cartItems.find(item => item.productName === newItem.productName)

            if (existingItem) {
                existingItem.quantity += newItem.quantity
            } else {
                state.cartItems.push(newItem)
            }

        },
        remove: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.uniqueId !== action.payload);
        },
    }
})


export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer