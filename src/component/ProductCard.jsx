import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ProductCard({ productImage, productName, price, category }) {
  const starIcons = Array(5).fill(<FaRegStar />);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-[#333] w-[250px] sm:w-[300px]">
      <img className="w-full h-48 object-cover object-center" src={productImage} alt={productName} />
      <div className="p-4">
        <p className="text-gray-500 text-xs uppercase dark:text-gray-50">{category}</p>
        <h2 className="mt-1 font-semibold text-gray-900 dark:text-gray-200">{productName}</h2>
        <div className="flex items-center mt-1">
          {starIcons.map((star, index) => (
            <span className="text-yellow-400 mr-1" key={index}>{star}</span>
          ))}
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-200 font-semibold">${price}</p>
        <div className="mt-4">
          <Link to={`/products/${productName}`} className="block px-3 py-2 bg-gray-950  text-white text-center rounded-md transition duration-300 ease-in-out hover:bg-gray-900">View Details</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
