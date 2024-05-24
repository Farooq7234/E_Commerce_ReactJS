import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function TotalCalculator() {
  const { cartItems } = useSelector((state) => state.cart)
  const [price, setPrice] = useState(0.00);



  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setPrice(totalPrice);
  }, [cartItems]);

  return (

    <>
      <p
        className={`text-[#333] dark:text-white font-bold`}
      >${price.toFixed(2)}</p>
    </>

  )
}

export default TotalCalculator