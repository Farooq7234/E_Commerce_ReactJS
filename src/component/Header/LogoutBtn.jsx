import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../redux/slice/authSlice";
import toast from "react-hot-toast";
import { clearCart, setUserId } from "../../redux/slice/cartSlice";


function LogoutBtn() {
    const dispatch = useDispatch()

    
    const logoutHandler = () => {
       try {
        authService.logout().then(() => {
            dispatch(logout())
            dispatch(setUserId(null))
            dispatch(clearCart())
            toast.error("Logout Succesfully")
        })
    } catch (error) {
        toast.error("Logout Failed");
       }
    }
    
    return (
        <button
            className='px-4 py-2 bg-red-500 text-base text-white rounded-full'
            onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn