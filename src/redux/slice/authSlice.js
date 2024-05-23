import { createSlice } from "@reduxjs/toolkit";


const getInitialAuthState = () => {
  const savedAuthState = localStorage.getItem('authState');
  return savedAuthState ? JSON.parse(savedAuthState) : { status: false, userData: null };
};

const initialState = getInitialAuthState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
      localStorage.setItem('authState', JSON.stringify(state));
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
      localStorage.removeItem('authState');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
