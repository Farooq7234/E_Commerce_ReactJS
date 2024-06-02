import React from 'react'
import { useSelector } from 'react-redux'

function TotalCalculator() {
    const cartItems = useSelector((state)=> state.cart.cartItems)

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  return (
   <>
   <p className='font-bold text-base'>$ {calculateTotal()}</p>
   </>
  )
}

export default TotalCalculator