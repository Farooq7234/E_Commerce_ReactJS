import React from 'react'
import { products } from './mockData.js'
import { useParams } from 'react-router-dom'


function ProductPage() {

    const { productDetails } = useParams()

    const product = products.find(product => product.productName === productDetails)


    if (!product) {
        return <div>Product Not found!</div>
    }
    return (
        <>
            <div className='flex justify-around items-center gap-5 py-10 flex-wrap bg-[#f8f6f3] dark:bg-black dark:text-white'>
                <img
                    src={product.productImage}
                    alt={product.productName}
                    className=' rounded-md'
                />
                <div className='flex justify-start gap-2 flex-col w-[300px] md:w-[40%]'>
                    <h2 className='text-5xl font-medium font-serif'>{product.productName}</h2>
                    <div className='flex gap-3'>
                        <p className='font-bold text-lg  sm:text-2xl  '>$ {product.price} </p>
                        <p className='text-lg font-bold sm:text-2xl'>+</p>
                        <p className='text-lg font-bold sm:text-2xl dark:text-orange-400'>Free Shipping</p>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia, voluptas id quis, consectetur molestias culpa, numquam vel officia similique corporis sit laudantium. Omnis in totam nobis alias explicabo molestias asperiores? Magni, aliquid molestiae.!</p>
                </div>
            </div>
        </>
    )
}

export default ProductPage