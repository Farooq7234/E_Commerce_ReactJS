import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa6';
import LogoutBtn from './LogoutBtn';
import { useSelector } from 'react-redux';
import TotalCalculator from '../TotalCalculator';

const Header = ({ image }) => {
  const authStatus = useSelector(state => state.auth.status);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((total, item) => {
    if (typeof item.quantity !== 'number') {
        throw new Error('Item quantity should be a number');
    }
    return total + item.quantity;
}, 0);


  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  console.log(totalQuantity)
  return (
    <>
      <div className='fixed w-full dark:bg-black bg-white h-20 flex justify-between items-center shadow-md px-3 z-40'>

        <ul className='flex justify-between items-center sm:gap-5 lg:gap-10'>
          <img src={image} className='w-[80px] sm:w-[110px] sm:h-[50px] dark:text-white cursor-pointer' alt='Logo' onClick={handleLogoClick} />
          {['Everything', 'Groceries', 'Juice'].map((category, index) => (
            <li key={index} className='dark:text-white text-base cursor-pointer font-normal text-black hover:text-[#8bc34a] font-sans'>
              <NavLink to={`/${category.toLowerCase()}`} className={({ isActive }) => `duration-200 max-md:hidden ${isActive ? 'text-[#8bc34a] ' : 'text-gray-700 dark:text-white dark:hover:text-[#8bc34a]'}  lg:hover:bg-transparent lg:border-0 hover:text-[#8bc34a] lg:p-0`}>
                {category}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className='flex justify-around items-center gap-2 sm:gap-5 lg:gap-10'>
          <li className='text-base cursor-pointer font-medium text-black hover:text-[#8bc34a] font-sans dark:text-white max-md:hidden'>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className='text-base cursor-pointer font-medium text-black hover:text-[#8bc34a] font-sans dark:text-white max-md:hidden'>
            <NavLink to='/github'>Github </NavLink>
          </li>
          <TotalCalculator/>
          <li className='cursor-pointer text-[#8bc34a] font-sans'>
            <NavLink to='/cart' className='flex'>
              <RiShoppingBasketFill className='text-2xl' />
              <sup className='bg-[#8bc34a] px-2 py-1 rounded-full text-white text-xs font-semibold animate-bounce'>{totalQuantity || 0}</sup>
            </NavLink>
          </li>
          <svg className='dark:text-white sm:hidden max-sm:visible w-8 h-7  text-white max-sm:bg-[#8bc34a]  p-1 rounded cursor-pointer' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' onClick={toggleSidebar}>
            <path d='M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z'></path>
          </svg>
          <div className='max-sm:hidden'>
          <LogoutBtn />
          <Link to='/login'>Login</Link>
          </div>
        </ul>

        {sidebarVisible && (
          <div className='fixed top-0 left-0 h-full  w-auto z-10 bg-gray-100 dark:bg-black sm:hidden'>
            <ul className='flex justify-between flex-col items-center h-1/2 pt-5' onClick={toggleSidebar}>
              <li className='w-full  text-lg text-center hover:bg-[#8bc34a]'>
                <NavLink to='/user' className="px-20  "><FaUser className='m-auto dark:text-white' /></NavLink>
              </li>
              {['Home', 'Everything', 'Groceries', 'About', 'Github'].map((link, index) => (
                <li key={index} className='w-full py-2 text-lg text-center hover:bg-[#8bc34a] dark:text-white'>
                  <NavLink to={index === 0 ? '/' : `/${link.toLowerCase()}`} className={`px-${index === 0 ? '20' : '14'} py-3`}>{link}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
