import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cartState');
        if (serializedState === null) {
            return { cartItems: [], userId: null };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Could not load state from localStorage", err);
        return { cartItems: [], userId: null };
    }
};

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartState', serializedState);
    } catch (err) {
        console.error("Could not save state to localStorage", err);
    }
};

const initialState = loadFromLocalStorage();

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
            saveToLocalStorage(state);
        },
        add: (state, action) => {
            const newItem = { ...action.payload, userId: state.userId };
            const existingItem = state.cartItems.find(item => item.productName === newItem.productName);

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.cartItems.push(newItem);
            }

            saveToLocalStorage(state);
        },
        remove: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            saveToLocalStorage(state);
        },
        clearCart: (state) => {
            state.cartItems = [];
            saveToLocalStorage(state);
        },
    },
});

export const { add, remove, setUserId, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
