import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cartSlice.js";


export const store = configureStore({
    reducer:{
        cart:cartSlice,
    }
})