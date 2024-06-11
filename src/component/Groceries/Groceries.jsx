import React, { useState } from 'react';
import ProductCard from '../ProductCard.jsx';
import { products } from '../mockData';
import Search from "../Search.jsx";
import ThemeBtn from '../ThemeBtn.jsx';
import NoproductPage from '../../component/NoproductPage.jsx';




function Groceries() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm.toLowerCase());
  };

  const filteredProducts = products.filter(item => {
    if (searchTerm === "") {
      return item.category === "Groceries";
    } else {
      return item.category === "Groceries" && item.productName.toLowerCase().includes(searchTerm);
    }
  });

  return (
    <>
      <ThemeBtn />
      <div className='flex flex-col justify-center items-center gap-10 py-10 bg-[#f8f6f3] dark:bg-black pt-24'>
        <div className='flex flex-wrap gap-10 justify-around items-center w-full'>
          <p className='text-4xl font-medium text-[#8bc34a] font-serif'>Groceries</p>
          <Search onSearch={handleSearch} />
        </div>
        <div className='grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols- xl:grid-cols-4 gap-10'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((grocery, index) => (
              <ProductCard
                productImage={grocery.productImage}
                category={grocery.category}
                productName={grocery.productName}
                price={grocery.price}
                key={index}
              />
            ))
          ) : (
           <NoproductPage/>
          )}
        </div>
      </div>
    </>
  );
}

export default Groceries;
