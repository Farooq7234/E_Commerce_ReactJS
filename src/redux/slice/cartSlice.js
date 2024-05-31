import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    userId: null,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        add: (state, action) => {
            const newItem = { ...action.payload, userId: state.userId };
            const existingItem = state.cartItems.find(item => item.productName === newItem.productName);

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.cartItems.push(newItem);
            }
        },
        remove: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
    },
});

export const { add, remove, setUserId, clearCart } = cartSlice.actions;
export default cartSlice.reducer;