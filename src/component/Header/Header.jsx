import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';



const Header = ({ image }) => {
  const {cartItems} = useSelector((state)=> state.cart)
  const [price, setPrice] = useState(0.00);
  const [totalQuantity,setTotalQuantity] = useState(0)
  const [sidebarVisible, setSidebarVisible] = useState(false); 


  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    setPrice(totalPrice);
    setTotalQuantity(totalQty);
  }, [cartItems]);
  

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      {/* HEADER CONTAINER */}

      <div className=' dark:bg-black  bg-white h-20 flex justify-between items-center shadow-md px-3'>

        {/* LEFT SECTION OF HEADER */}

        <ul className='flex justify-between items-center w-1/2 md:w-1/3 '>
          <img src={image} className='w-[100px] sm:w-[110px] sm:h-[50px]  dark:text-white' alt='Logo' />

          <li className='dark:text-white text-base  cursor-pointer font-normal text-black hover:text-[#8bc34a] font-sans'>

            <NavLink to='/'
              className={({ isActive }) =>
                `duration-200 max-sm:hidden ${isActive ? "text-[#8bc34a] " : "text-gray-700  dark:text-white dark:hover:text-[#8bc34a]"}  lg:hover:bg-transparent lg:border-0 hover:text-[#8bc34a] lg:p-0`}>
              Home
            </NavLink>

          </li>

          <li className='dark:text-white  text-base   cursor-pointer font-normal text-black hover:text-[#8bc34a] font-sans'>

            <NavLink to='/groceries'
              className={({ isActive }) =>
                `duration-200 max-sm:hidden ${isActive ? "text-[#8bc34a] " : "text-gray-700 dark:text-white dark:hover:text-[#8bc34a]"} border- lg:hover:bg-transparent lg:border-0 hover:text-[#8bc34a] lg:p-0`}>
              Groceries
            </NavLink>

          </li>

          <li className='dark:text-white  text-base   cursor-pointer font-normal text-black hover:text-[#8bc34a] font-sans'>
            <NavLink to='/juice'
              className={({ isActive }) =>
                `duration-200 max-sm:hidden ${isActive ? "text-[#8bc34a]  " : "text-gray-700 dark:text-white dark:hover:text-[#8bc34a]"} lg:hover:bg-transparent lg:border-0 hover:text-[#8bc34a] lg:p-0`}
            >Juice</NavLink>
          </li>

        </ul>

        {/* RIGHT SECTION OF HEADER  */}


        {/* SIDEBAR TRIGGERED ON MOBILE*/}

        {sidebarVisible && (
          <div className='fixed top-0 left-0 h-full  w-auto z-10 bg-gray-100 dark:bg-black sm:hidden'>
            {/* SIDEBAR CONTENT*/}

            <ul className='flex justify-between flex-col items-center h-1/2 pt-5' onClick={toggleSidebar}>
              <li className='w-full  text-lg text-center hover:bg-[#8bc34a]'>
                <NavLink to='/user'  className="px-20  "><FaUser className='m-auto dark:text-white' /></NavLink>
              </li>
              <li className='w-full py-2 text-lg text-center hover:bg-[#8bc34a] dark:text-white'>
                <NavLink to='/' className="px-20 py-3 ">Home</NavLink>
              </li>
              <li className='w-full py-2 text-lg text-center hover:bg-[#8bc34a] dark:text-white'>
                <NavLink to='/groceries' className="px-14 py-3  ">Groceries</NavLink>
              </li>
              <li className='w-full py-2 text-lg text-center hover:bg-[#8bc34a] dark:text-white'>
                <NavLink to='/about' className="px-20 py-3 ">About</NavLink>
              </li>
              <li className='w-full py-2 text-lg text-center hover:bg-[#8bc34a] dark:text-white'>
                <NavLink to='/github' className="px-20 py-3 ">Github</NavLink>
              </li>

            </ul>
          </div>
        )}

        <ul className='flex justify-around items-center w-[60%] md:w-1/3 '>

          <li className='text-base cursor-pointer font-medium text-black hover:text-[#8bc34a] font-sans  dark:text-white max-sm:hidden'>
            <NavLink to='/signup'>Signup</NavLink>
          </li>

          <li className='text-base cursor-pointer font-medium text-black hover:text-[#8bc34a] font-sans dark:text-white max-sm:hidden'>
            <NavLink to='/github'>Github</NavLink>
          </li>


          <li className='text-base cursor-pointer font-bold text-[#8bc34a] font-sans'>
            <NavLink to='/price'>${price.toFixed(2)}</NavLink>
          </li>

          <li className='cursor-pointer text-[#8bc34a] font-sans'>
            <NavLink to='/cart' className='flex'>
              <RiShoppingBasketFill className='text-2xl' />
              <sup className='bg-[#8bc34a] px-2 py-1 rounded-full text-white text-xs font-semibold animate-bounce'>{totalQuantity}</sup>
            </NavLink>
          </li>
        

          <svg className='dark:text-white sm:hidden max-sm:visible w-8 h-7  text-white max-sm:bg-[#8bc34a]  p-1 rounded cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            onClick={toggleSidebar}
          >
            <path d='M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z'></path>
          </svg>

          <li className='text-xl max-sm:hidden cursor-pointer font-extrabold text-black font-sans dark:text-white'>
            <NavLink to='/user'><FaUser /></NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
