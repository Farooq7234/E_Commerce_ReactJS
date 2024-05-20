import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cartSlice.js";
import productSlice from "../slice/productSlice.js";


export const store = configureStore({
    reducer:{
        cart : cartSlice,
        product :productSlice,
    }
})