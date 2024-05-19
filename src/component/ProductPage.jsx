import React from 'react'
import { products } from './mockData.js'
import { useParams } from 'react-router-dom'
import { add } from '../redux/slice/cartSlice.js'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'


function ProductPage() {

    const dispatch = useDispatch()
    const { productDetails } = useParams()

    const product = products.find(product => product.productName === productDetails)

    if (!product) {
        return <div className="h-[80vh] flex justify-center items-center">Product Not found!</div>
    }

    const handleAddtoCart = () => {
        dispatch(add(product))
        toast.success("Item added")
    }
    return (
        <>

            <div className='flex justify-around items-center gap-5  md:h-[80vh] flex-wrap bg-[#f8f6f3] dark:bg-black dark:text-white'>
                <img
                    src={product.productImage}
                    alt={product.productName}
                    className=' rounded-md w-72 h-72 sm:w-96 sm:h-[350px]'
                />
                <div className='flex justify-start gap-5 flex-col w-[300px] md:w-[40%]'>
                    <h2 className='text-3xl  lg:text-4xl font-bold font-serif'>{product.productName}</h2>
                    <div className='flex gap-3'>
                        <p className='font-bold text-lg  sm:text-xl '>$ {product.price} </p>
                        <p className='text-lg font-bold sm:text-xl'>+</p>
                        <p className='text-lg font-bold sm:text-xl text-orange-400'>Free Shipping</p>
                    </div>
                    <p className='text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia, voluptas id quis, consectetur molestias culpa,</p>
                    <p className='text-base'> Omnis in totam nobis alias explicabo molestias asperiores? Magni, aliquid molestiae.!</p>
                    <button
                        className='bg-[#6a9739] hover:bg-[#89c549] text-white p-2 rounded-md w-[50%]'
                        type='submint'
                        onClick={handleAddtoCart}
                    >Add to Cart</button>
                </div>
            </div>

        </>
    )
}

export default ProductPage