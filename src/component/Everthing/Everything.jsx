import React, { useState } from 'react';
import ProductCard from '../ProductCard.jsx';
import { products } from '../mockData';
import Search from '../Search.jsx';

function Everthing() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm.toLowerCase());
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const filteredProducts = products.filter(item => {
    if (searchTerm === "") {
      return item;
    } else {
      return item.productName.toLowerCase().includes(searchTerm);
    }
  });

  const shuffledProducts = shuffleArray(filteredProducts);

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-10 py-10 bg-[#f8f6f3] dark:bg-black'>
        <div className='flex flex-wrap gap-10 justify-around items-center w-full'>
          <p className='text-4xl font-medium text-[#8bc34a] font-serif'>Shop</p>
          <Search onSearch={handleSearch} />
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols- xl:grid-cols-4 gap-10'>
          {shuffledProducts.length > 0 ? (
            shuffledProducts.map((grocery, index) => (
              <ProductCard
                productImage={grocery.productImage}
                category={grocery.category}
                productName={grocery.productName}
                price={grocery.price}
                key={index}
              />
            ))
          ) : (
            <div className="flex justify-center items-center col-span-full min-h-[60vh]">
              <p className="text-gray-600 text-3xl">No product found.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Everthing;