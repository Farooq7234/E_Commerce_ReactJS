import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/slice/cartSlice.js';
import TotalCalculator from '../TotalCalculator.jsx';
import cartservice from '../../appwrite/config.js';
import toast from 'react-hot-toast';

function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const userId = useSelector((state) => state.cart.userId)
    const dispatch = useDispatch();

    const handleRemove = async (id) => {
        try {
            if (userId) {
                const cartResponse = await cartservice.getCartItems(userId);
                const documents = cartResponse.documents.find(doc => doc.id === id);
                if (documents) {
                    await cartservice.deleteCartItems(documents.$id, userId);
                    dispatch(remove(id));
                    toast.success("Item removed Successfully");
                } else {
                    throw new Error('Document not found');
                }
            }
        } catch (error) {
            console.error('Failed to delete item from Appwrite:', error);
        }
    };

    if (cartItems.length === 0) {
        return <div className="h-[90vh] flex justify-center items-center">
            <p className='text-xl font-bold'>Your cart is empty!</p>
        </div>;
    }

    return (
        <div className='flex flex-col items-center gap-5 p-5 pt-24 min-h-[90vh]'>
            <h1 className='text-3xl font-bold mb-5'>Your Shopping Cart</h1>
            {cartItems.map((item, index) => (
                <div key={index} className='flex flex-col sm:flex-row bg-white dark:bg-[#333] dark:text-yellow-50  rounded-md w-full max-w-[600px] h-auto p-4 shadow-lg'>
                    <img src={item.productImage} className='h-[150px] sm:h-full w-full sm:w-[20%] object-cover rounded-md' alt={item.productName} />
                    <div className='flex flex-col justify-between mt-3 sm:mt-0 ml-0 sm:ml-4 w-full'>
                        <div>
                            <h2 className='text-xl font-bold'>{item.productName}</h2>
                            <p className='text-lg'>${item.price} x {item.quantity}</p>
                            <p className='text-lg font-semibold'>Total: ${item.price * item.quantity}</p>
                        </div>
                        <button
                            onClick={() => handleRemove(item.id)}
                            className='self-end bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md mt-3 sm:mt-0'
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            <div className='w-full max-w-[600px] mt-5 bg-white shadow-md rounded-md p-4 flex flex-col items-center sm:flex-row justify-between'>
                <p className='text-xl font-bold'>Total Cost: $<TotalCalculator /></p>
                <button className='bg-[#6a9739] hover:bg-[#89c549] text-white py-2 px-4 rounded-md mt-3 sm:mt-0'>
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;
