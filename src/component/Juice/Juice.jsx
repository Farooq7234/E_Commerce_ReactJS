import React, { useState } from 'react';
import { products } from '../mockData.js';
import ProductCard from '../ProductCard.jsx';
import Search from '../Search.jsx';

function Juice() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = () => {
    const filteredProducts = products.filter(product =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  // Initially, show all products if no search term is entered
  const productsToDisplay = searchTerm ? filteredProducts : products.filter(item => item.category === 'Juice');

  

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-10 py-5 dark:bg-black bg-[#f8f6f3]'>
        <div className='flex flex-wrap gap-10 justify-around items-center w-full'>
          <p className='text-4xl font-medium text-[#8bc34a] font-serif'>Juice</p>
          <Search onSearch={handleSearch} />
        </div>
        <div className='grid place-items-center gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
          {productsToDisplay.map((juice, index) => (
            <ProductCard
              productImage={juice.productImage}
              category={juice.category}
              productName={juice.productName}
              price={juice.price}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Juice;
