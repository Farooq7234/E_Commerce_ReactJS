import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/slice/cartSlice.js';
import toast from 'react-hot-toast';
import TotalCalculator from '../TotalCalculator.jsx';
import Button from '../Button.jsx'
import { Link } from 'react-router-dom';




function Cart() {
   
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleRemove = (uniqueId) => {
        dispatch(remove(uniqueId));
        toast.error('item is removed')
    };

    const handleProceedClick = ()=>{
        toast.error("Feature not yet ready :)")
    }


    return (
        <>
         <div className="py-4 min-h-[100vh] flex flex-col  justify-around items-center dark:text-white bg-[#f8f6f3] dark:bg-[#000]">
            {cartItems.length === 0 ? (
            
               <div className='flex flex-col items-center gap-10'>
                 <p className='text-[#333] dark:text-white text-4xl'>Your cart is currently empty.</p>
           <Link 
           to={'/everything'} 
           className="p-2 bg-[#6a9739] hover:bg-[#8bc34a] rounded-md text-white"
           >RETURN TO SHOP</Link>
               </div>
            ) : (
                <div className='flex justify-around items-start gap-5 flex-wrap w-full'>
                    <div className="w-[500px]  dark:text-white px-5 sm:px-0">
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
                <div className='flex flex-col justify-around  h-[250px] w-[90%] sm:w-[400px] bg-[#f8f6f3] dark:bg-[#333] border border-[#dbdbdb] shadow-md rounded-sm p-2'>
                <p className='text-2xl p-3 '>Cart Totals</p>
               <div className='flex flex-col gap-2'>
               <p className='text-xl flex justify-around'>Total :  <TotalCalculator/></p>
               <hr />
               </div>
              

               <Button
                onClick={handleProceedClick}
               className='text-base sm:text-lg uppercase w-[70%]'
               >PROCEED TO CHECKOUT</Button>

            </div>
                </div>
            )}
            
        </div>
        </>
       
    );
}

export default Cart;
