import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function ProductCard({ productImage, productName, price, category }) {
  const starIcons = Array(5).fill(<FaRegStar />);

  return (
    <>
      <div className='shadow-lg flex flex-col justify-center items-center rounded-md gap-1 dark:bg-[#333333] w-[250px] sm:w-[300px]'>
        <img className='rounded-t-md h-[200px] sm:h-[250px] w-[250px] sm:w-[300px]' src={productImage} alt="" />
        <p className='capitalize text-gray-400 text-base'>{category}</p>
        <p className='text-lg font-bold font-serif dark:text-white'>{productName}</p>
        <ul className='flex'>
          {starIcons.map((star, index) => (
            <li className='text-orange-400' key={index}>{star}</li>
          ))}
        </ul>
        <p className='text-lg text-gray-800 font-bold dark:text-white'>${price}</p>
        <Link to={`/products/${productName}`} className='bg-black rounded-md text-white py-2 px-3 mb-5'>View Details</Link>
        
      </div>
    </>
  );
}

export default ProductCard;