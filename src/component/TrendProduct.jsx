import React from 'react'
import { FaRegStar } from "react-icons/fa";


function TrendProduct({category,productName,image,productPrice}) {


  return (
    <>
    <div className='mt-4 h-auto sm:w-56 max-sm:flex-wrap bg-white hover:bg-slate-50 hover:cursor-pointer flex flex-col justify-center items-center rounded shadow-2xl max-sm:w-auto border-black '>
      <img className='h-56 w-auto mt-4 rounded-2xl px-4' src={`https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/${image}-300x300.jpg`} alt="" />
      <p className='text-xs text-gray-500 mt-2'>{category}</p>
      <p className='text-xs font-semibold my-2'>{productName}</p>
      <ul className='flex'>
        <li><FaRegStar /></li>
        <li><FaRegStar /></li>
        <li><FaRegStar /></li>
        <li><FaRegStar /></li>
        <li><FaRegStar /></li>
      </ul>
    <p className='my-2 text-black text-sm'>${productPrice}</p>
    </div>
    </>
  )
}

export default TrendProduct