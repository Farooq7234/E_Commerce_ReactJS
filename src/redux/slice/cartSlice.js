import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cartItems');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Could not load state from localStorage", err);
        return [];
    }
};

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartItems', serializedState);
    } catch (err) {
        console.error("Could not save state to localStorage", err);
    }
};

const initialState = {
    cartItems: loadFromLocalStorage(),
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            const newItem = { ...action.payload, uniqueId: uuidv4() };
            const existingItem = state.cartItems.find(item => item.productName === newItem.productName);

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.cartItems.push(newItem);
            }

            saveToLocalStorage(state.cartItems);
        },
        remove: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.uniqueId !== action.payload);
            saveToLocalStorage(state.cartItems);
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
