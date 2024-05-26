import React, { useState } from 'react'
import authService from '../appwrite/auth.js'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../redux/slice/authSlice.js'
import Input from './Input'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import Button from './Button.jsx'
import toast from 'react-hot-toast'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()


    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData))
                navigate('/')
                toast.success("Account created")
            }
        } catch (error) {
            setError(error.message)
            toast.error(error.message)
        }
    }


    return (
        <>
            <div className="flex items-center justify-center  dark:bg-black dark:text-white bg-[#f8f6f3] min-h-[110vh]">
                <div className={`mx-auto w-full max-w-lg flex flex-col gap-2 bg-white dark:bg-[#333] rounded-xl p-10 border border-black/10`}>
                    <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>

                    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                    <form onSubmit={handleSubmit(create)}>
                        <div className='space-y-5'>
                            <Input
                                label="Full Name: "
                                placeholder="Enter your full name"
                                {...register("name", {
                                    required: true,
                                })}
                            />
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
                                Already have an account?&nbsp;
                                <Link
                                    to="/login"
                                    className="font-medium text-primary text-green-600 transition-all duration-200 hover:underline"
                                >
                                    Sign In
                                </Link>
                            </p>
                            <Button type="submit" className="w-full"
                            >
                                Create Account
                            </Button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Signup