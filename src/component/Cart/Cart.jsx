import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/slice/cartSlice.js';
import toast from 'react-hot-toast';

function Cart() {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleRemove = (uniqueId) => {
        dispatch(remove(uniqueId));
        toast.error('item is removed')
    };

    return (
        <div className="min-h-[80vh] flex flex-col justify-start items-center dark:text-white bg-[#f8f6f3] dark:bg-[#000]">
            <h1 className="text-3xl font-bold my-5 ">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className='text-[#333] text-4xl'>Your cart is empty</p>
            ) : (
                <div className="w-full max-w-2xl dark:text-white px-5 sm:px-0">
                    {cartItems.map(item => (
                        <div key={item.uniqueId} className="flex justify-between items-center border-b py-2">
                            <div className="flex items-center gap-4">
                                <img src={item.productImage} alt={item.productName} className="w-16 h-16 rounded" />
                                <div>
                                    <h2 className="text-sm sm:text-xl font-bold">{item.productName}</h2>
                                    <p className="text-gray-600  text-base sm:text-xl">Quantity: {item.quantity}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="font-bold text-sm sm:text-xl">${item.price * item.quantity}</p>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 sm:px-4 sm:py-2 rounded"
                                    onClick={() => handleRemove(item.uniqueId)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;
