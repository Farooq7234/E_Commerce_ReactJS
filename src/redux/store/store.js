import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cartSlice.js";
import productSlice from "../slice/productSlice.js";
import authSlice from "../slice/authSlice.js";


export const store = configureStore({
    reducer:{
        auth: authSlice,
        cart : cartSlice,
        product :productSlice,
    }
})