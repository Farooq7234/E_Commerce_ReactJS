import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const initialState = {
    cartItems:[],
}


export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add:(state,action)=>{
            const newItem = { ...action.payload, uniqueId: uuidv4() };
            state.cartItems.push(newItem);
        },
        remove:(state,action)=>{
            state.cartItems = state.cartItems.filter(item => item.uniqueId !== action.payload);
        },
    }
})


export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer