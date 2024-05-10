import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { products } from './mockData';

function ProductCard({ productImage, productName, price, category }) {
  const starIcons = Array(5).fill(<FaRegStar />);

  return (
    <>
      <div className='shadow-lg flex flex-col justify-center items-center gap-2 rounded-md  dark:bg-[#333333] w-[300px]'>
        <img className='rounded-t-md h-[250px] w-[300px]' src={productImage} alt="" />
        <p className='capitalize text-gray-400 text-base'>{category}</p>
        <p className='text-lg font-bold font-serif dark:text-white'>{productName}</p>
        <ul className='flex'>
          {starIcons.map((star, index) => (
            <li className='dark:text-orange-400' key={index}>{star}</li>
          ))}
        </ul>
        <p className='text-base text-gray-800 font-normal dark:text-white py-2'>${price}</p>
        <Link to={`/products/${productName}`} className='bg-black rounded-md text-white p-3 mb-5'>View Details</Link>
        {console.log(products.productName)}

      </div>
    </>
  );
}

export default ProductCard;
