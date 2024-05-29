import React, { useState, useEffect } from 'react';
import { products } from './mockData.js';
import { useParams } from 'react-router-dom';
import { add, setUserId } from '../redux/slice/cartSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, resetCount } from '../redux/slice/productSlice.js';
import { toast } from 'react-hot-toast';
import cartservice from '../appwrite/config.js';
import authService from '../appwrite/auth.js';

function ProductPage() {
    const authStatus = useSelector((state) => state.auth.status);
    const { count } = useSelector((state) => state.product);
    const { productDetails } = useParams();
    const dispatch = useDispatch();

    const product = products.find(product => product.productName === productDetails);

    if (!product) {
        return <div className="h-[80vh] flex justify-center items-center">Product Not found!</div>;
    }

    const getCurrentUser = async () => {
        try {
            const response = await authService.getCurrentUser();
            if (response && response.$id) {
                dispatch(setUserId(response.$id))
            }
            return response;
        } catch (error) {
            console.log(`error fetching the user ${error}`);
            return null;
        }
    };

    const handleAddtoCart = async () => {
        const user = await getCurrentUser();
        if (user && user.$id) {
            if (count > 0) {
                const cartItem = { ...product, quantity: count, userId: user.$id };
                dispatch(add(cartItem));
                try {
                    await cartservice.saveCartItems(cartItem);
                    toast.success(`${count} item(s) added to cart and synced to the cloud`);
                } catch (error) {
                    console.error('Error syncing cart item:', error);
                    toast.error('Failed to sync cart item to the cloud');
                }
            } else {
                toast.error('Please select a quantity before adding to cart');
            }
        } else {
            LoginAlert();
        }

    };

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    useEffect(() => {
        dispatch(resetCount());
    }, [productDetails, dispatch]);

    useEffect(() => {
        getCurrentUser();
    }, []);

    const LoginAlert = () => {
        toast.error("Login to add to cart");
    };

    return (
        <div className='flex justify-around items-center gap-5 min-h-[90vh] flex-wrap bg-[#f8f6f3] dark:bg-black dark:text-white pt-24'>
            <img
                src={product.productImage}
                alt={product.productName}
                className='rounded-md w-72 h-72 sm:w-96 sm:h-[350px]'
            />
            <div className='flex justify-start gap-5 flex-col w-[300px] md:w-[40%]'>
                <h2 className='text-3xl lg:text-4xl font-bold font-serif'>{product.productName}</h2>
                <div className='flex gap-3'>
                    <p className='font-bold text-lg sm:text-xl '>$ {product.price} </p>
                    <p className='text-lg font-bold sm:text-xl'>+</p>
                    <p className='text-lg font-bold sm:text-xl text-orange-400'>Free Shipping</p>
                </div>
                <p className='text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia, voluptas id quis, consectetur molestias culpa,</p>
                <p className='text-base'> Omnis in totam nobis alias explicabo molestias asperiores? Magni, aliquid molestiae.!</p>
                <div className='flex justify-start gap-5 items-center'>
                    <button
                        onClick={handleDecrement}
                        className='bg-[#6a9739] hover:bg-[#89c549] h-10 w-10 rounded-full text-2xl font-bold text-white'>
                        -
                    </button>
                    <span className='text-black dark:text-white text-xl font-bold'>
                        {count}
                    </span>
                    <button
                        onClick={handleIncrement}
                        className='bg-[#6a9739] hover:bg-[#89c549] h-10 w-10 rounded-full text-2xl font-bold text-white'>
                        +
                    </button>
                </div>
                <button
                    className='bg-[#6a9739] hover:bg-[#89c549] text-white p-2 rounded-md w-[50%]'
                    type='submit'
                    onClick={authStatus === false ? LoginAlert : handleAddtoCart}
                >Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductPage;
