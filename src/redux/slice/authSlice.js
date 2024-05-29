import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
            localStorage.setItem('authStatus', JSON.stringify(state))
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            localStorage.removeItem('authStatus'); 
        },
        loadAuthState: (state, action) => {
            state.status = action.payload.status;
            state.userData = action.payload.userData;
        }
    }
});

export const { login, logout, loadAuthState } = authSlice.actions;

export default authSlice.reducer;
