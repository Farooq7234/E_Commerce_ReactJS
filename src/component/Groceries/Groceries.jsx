import React from 'react'
import ProductCard from '../ProductCard';
import { products } from '../mockData';
import Search from "../Search.jsx"



function Groceries() {


  return (
    <>
      <div className='flex flex-col justify-center items-center gap-10 py-10 bg-[#f8f6f3] dark:bg-black '>
        <div className='flex flex-wrap gap-10 justify-around items-center w-full'>
        <p className='text-4xl font-medium text-[#8bc34a]'>Groceries</p>
        <Search/>
        </div>
        <div className='grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols- xl:grid-cols-4 gap-10'>
        {
    products
        .filter(item => item.category === "Groceries")
        .map((grocery, index) =>
            <ProductCard
                productImage={grocery.productImage}
                category={grocery.category}
                productName={grocery.productName}
                price={grocery.price}
                key={index}
            />
        )
}
        </div>
      </div>
    </>
  )
}

export default Groceries