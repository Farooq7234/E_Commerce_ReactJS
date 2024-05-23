import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../redux/slice/authSlice";
import toast from "react-hot-toast";

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            toast.error("Logout Succesfully")
        })
    }

    return (
        <button
            className='px-4 py-2 bg-red-500 text-base text-white rounded-full'
            onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn