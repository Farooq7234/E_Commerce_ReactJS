import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { add } from '../redux/slice/cartSlice';
import cartservice from '../appwrite/config';

function ProductPage() {
    const products = useSelector((state) => state.product.products);
    const { productDetails } = useParams();
    const dispatch = useDispatch();

    const product = products.find(product => product.productName === productDetails);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (!product) {
            setQuantity(1);
        }
    }, [product]);

    if (!product) {
        return <div className="h-[80vh] flex justify-center items-center">Product Not found!</div>;
    }

    const saveCartItemsToCloud = async (cartItem) => {
        try {
            await cartservice.saveCartItems(cartItem);
            toast.success("Cart item saved to the cloud");
        } catch (error) {
            toast.error("Failed to save to the cloud");
        }
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (product) {
            const cartItem = { ...product, quantity };
            dispatch(add(cartItem));
            saveCartItemsToCloud(cartItem);
        }
    };

    return (
        <div className='flex justify-around items-center gap-5 min-h-[90vh] flex-wrap bg-[#f8f6f3] dark:bg-black dark:text-white pt-24'>
            <img
                src={product.productImage}
                alt={product.productName}
                className='rounded-md w-72 h-72 sm:w-96 sm:h-[350px]'
            />
            <div className='flex justify-start gap-5 flex-col w-[300px] md:w-[40%]'>
                <h2 className='text-3xl lg:text-4xl font-bold font-serif'>{product.productName}</h2>
                <div className='flex gap-3'>
                    <p className='font-bold text-lg sm:text-xl '>$ {product.price} </p>
                    <p className='text-lg font-bold sm:text-xl'>+</p>
                    <p className='text-lg font-bold sm:text-xl text-orange-400'>Free Shipping</p>
                </div>
                <p className='text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia, voluptas id quis, consectetur molestias culpa,</p>
                <p className='text-base'> Omnis in totam nobis alias explicabo molestias asperiores? Magni, aliquid molestiae.!</p>
                <div className='flex justify-start gap-5 items-center'>
                    <button
                        onClick={handleDecrement}
                        className='bg-[#6a9739] hover:bg-[#89c549] h-10 w-10 rounded-full text-2xl font-bold text-white'
                    >
                        -
                    </button>
                    <span className='text-black dark:text-white text-xl font-bold'>
                        {quantity}
                    </span>
                    <button
                        onClick={handleIncrement}
                        className='bg-[#6a9739] hover:bg-[#89c549] h-10 w-10 rounded-full text-2xl font-bold text-white'
                    >
                        +
                    </button>
                </div>
                <button
                    className='bg-[#6a9739] hover:bg-[#89c549] text-white p-2 rounded-md w-[50%]'
                    type='button'
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductPage;
