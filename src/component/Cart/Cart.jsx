import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../../redux/slice/cartSlice';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


function Cart() {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const removeItem = (uniqueId) => {
    dispatch(remove(uniqueId))
    toast.error("Item removed")

  }

  return (
    <>
      {cartItems.length == 0 ?
        (

          <div className='h-[80vh] flex flex-col gap-5 justify-center items-center bg-[#f8f6f3] dark:bg-black dark:text-white'>
            <p className='font-bold text-xl'>Cart is empty</p>
            <Link to={'/'} className='py-2 px-4 bg-green-600 text-white rounded-md'>Go back</Link>
          </div>
        ) : (

          <div className='flex flex-col gap-5 justify-center items-center bg-[#f8f6f3] dark:bg-black dark:text-white py-10 min-h-[80vh]'>
            {
              cartItems.map((item, index) =>
                <div className='w-[95%] sm:w-[600px] bg-white dark:bg-[#333] h-32 flex justify-around flex-wrap items-center px-5 rounded-md shadow-lg'
                  key={index}
                >
                  <div>
                    <img
                      src={item.productImage}
                      className='h-[50px] w-[50px] sm:w-[150px] sm:h-24  rounded-sm'
                      alt="" />
                  </div>
                  <div>
                    <p className='text-base sm:text-2xl font-medium'>{item.productName}</p>
                    <p className='text-lg sm:text-lg font-bold '>${item.price}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => removeItem(item.uniqueId)}
                      className='bg-red-500 p-2 sm:py-2 sm:px-5 rounded-md text-white'
                    >Remove</button>
                  </div>
                </div>
              )
            }
          </div>
        )

      }
    </>
  )
}

export default Cart