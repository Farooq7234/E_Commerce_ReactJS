import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Input from './Input.jsx';
import Button from './Button.jsx';
import { login as authLogin, logout } from '../redux/slice/authSlice.js';
import { setCartItems, setUserId } from '../redux/slice/cartSlice.js';
import authService from '../appwrite/auth.js';
import cartservice from '../appwrite/config.js';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const userId = useSelector((state) => state.cart.userId);

    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(authLogin(userData))
                    dispatch(setUserId(userData.$id))
                    toast.success("Login successful")
                    navigate("/");
                }
                else {
                    dispatch(logout())
                }
            }
        } catch (error) {
            setError(error.message);
            toast.error(error.message);
        }
    };


    useEffect(() => {
        if (userId) {
            cartservice.getCartItems(userId).then((cartProducts) => {
                if (cartProducts) {
                    dispatch(setCartItems(cartProducts.documents));
                }
            }).catch(error => {
                console.error('Error fetching cart items:', error);
            });
        }
    }, [userId, dispatch]);

    return (
        <div className='flex justify-center items-center w-full dark:bg-black dark:text-white bg-[#f8f6f3] shadow-lg min-h-[100vh]'>
            <div className='mx-auto  sm:w-full max-w-lg dark:bg-[#333] bg-white border-2 border-gray-200 rounded-xl p-10 '>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <p className="mt-2 text-center text-base ">
                            Don&apos;t have any account?&nbsp;
                            <Link
                                to="/signup"
                                className="font-medium text-primary text-green-600 transition-all duration-200 hover:underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                        <Button
                            type="submit"
                            className="w-full"
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
