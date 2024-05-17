import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems:[],
}


export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.cartItems.push(action.payload)
        },
        remove:(state,action)=>{
            const id = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== id);
        }
    }
})


export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer