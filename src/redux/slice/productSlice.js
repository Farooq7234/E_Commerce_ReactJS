import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
};

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        increment:(state) => {
            if (state.count >= 0 &&  state.count <=9) {
                state.count += 1
            }
        },
        decrement:(state)=>{
            if(state.count > 0 ){
                state.count -= 1
            }
        }
    }
});

export const {increment,decrement} = productSlice.actions;
export default productSlice.reducer;

