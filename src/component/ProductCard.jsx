import React from 'react';
import { FaRegStar } from 'react-icons/fa';


function ProductCard({ productImage, productName, price, category }) {
  const starIcons = Array(5).fill(<FaRegStar />);

  return (
    <>
      <div className='shadow-lg flex flex-col justify-center 0 items-center gap-1  rounded-md  dark:bg-[#333333] w-[300px]'>
        <img className='rounded-t-md h-[250px] w-[300px]' src={productImage} alt="" />
        <p className='capitalize text-gray-400 text-base'>{category}</p>
        <p className='text-lg font-bold font-serif dark:text-white'>{productName}</p>
        <ul className='flex'>
          {starIcons.map((star, index) => (
            <li className='dark:text-orange-400' key={index}>{star}</li>
          ))}
        </ul>
        <p className='text-base text-gray-800 font-normal dark:text-white py-2'>${price}</p>
      </div>
    </>
  );
}

export default ProductCard;
