import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiShoppingBasketFill,FaUser } from '../icons/index'

const LOGO_URL_DARK = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg';

const LOGO_URL_LIGHT = 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png'


const Header = ({ price, cartvalue,themeMode }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  

  return (
    <>
      <div className='dark:bg-black  bg-white h-20 flex justify-between items-center shadow-md'>
        {/* left side of the header section */}
        <ul className='flex justify-center items-center'>
        <img
      src={LOGO_URL_DARK}
      className='h-12 m-3 mr-6 dark:text-white'
      alt='Logo'
    />
          <li className='dark:text-white sm:text-xs max-sm:text-xs mr-9 text-base max-sm:hidden cursor-pointer font-normal text-black hover:text-[#8bc34a] font-sans'>
            <NavLink to='/'
             className={({isActive}) =>
             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#8bc34a]  text-sm font-medium" : "text-gray-700  dark:text-white dark:hover:text-[#8bc34a]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#8bc34a] lg:p-0`}
            >Home</NavLink>
          </li>
          <li className='dark:text-white sm:text-xs max-sm:text-xs mr-9 text-base max-sm:hidden cursor-pointer font-normal text-black hover:text-[#8bc34a] font-sans'>
            <NavLink to='/groceries'
             className={({isActive}) =>
             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#8bc34a]  text-sm font-medium" : "text-gray-700 dark:text-white dark:hover:text-[#8bc34a]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#8bc34a] lg:p-0`}
            >Groceries</NavLink>
          </li>
          <li className='dark:text-white sm:text-xs max-sm:text-xs mr-9 text-base max-sm:hidden cursor-pointer font-normal text-black hover:text-[#8bc34a] font-sans'>
            <NavLink to='/juice'
             className={({isActive}) =>
             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#8bc34a]  text-sm font-medium" : "text-gray-700 dark:text-white dark:hover:text-[#8bc34a]"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#8bc34a] lg:p-0`}
            >Juice</NavLink>
          </li>
        </ul>

        {/* right section of the header elements */}
        <ul className='flex justify-center items-center '>
          

          {/* Sidebar */}
          {sidebarVisible && (
            <div className='fixed top-0 left-0 h-full max-sm:w-62 w-64 bg-gray-100 dark:bg-black'>
              {/* sidebar content  */}
              <ul className='p-4'>
              <li className='py-4 shadow-md text-lg text-center hover:bg-[#8bc34a]'>
            <NavLink to='/user'><FaUser className='m-auto dark:text-white' /></NavLink>
          </li>
                <li className='py-4 shadow-md text-lg text-center hover:bg-[#8bc34a] dark:text-white'>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li className='py-4 shadow-md text-lg text-center hover:bg-[#8bc34a] dark:text-white'>
                  <NavLink to='/groceries'>Groceries</NavLink>
                </li>
                <li className='py-4 shadow-md text-lg text-center hover:bg-[#8bc34a] dark:text-white'>
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li className='py-4 shadow-md text-lg text-center hover:bg-[#8bc34a] dark:text-white'>
                  <NavLink to='/contact'>Contact</NavLink>
                </li>
              
              </ul>
            </div>
          )}

          <li className='sm:text-xs max-sm:text-xs max-sm:hidden mr-8 text-base cursor-pointer font-medium text-black hover:text-[#8bc34a] font-sans  dark:text-white'>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className='sm:text-xs max-sm:text-xs max-sm:hidden mr-8 text-base cursor-pointer font-medium text-black hover:text-[#8bc34a] font-sans dark:text-white'>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li className='sm:text-xs max-sm:text-xs mr-8 max-sm:mr-4 text-base cursor-pointer font-extrabold text-[#8bc34a] font-sans'>
            <NavLink to='/price'>${price.toFixed(2)}</NavLink>
          </li>
          <li className='sm:text-base max-sm:text-sm  mr-8 max-sm:mr-4 text-xl cursor-pointer text-[#8bc34a] font-sans'>
            <NavLink to='/basket' className='flex'>
            <RiShoppingBasketFill className='text-xl '/>
              <sup className='bg-[#8bc34a] px-2 py-1  rounded-full text-white text-xs font-semibold'>{cartvalue}</sup>
            </NavLink>
          </li>
          <svg
            className='dark:text-white sm:hidden max-sm:visible mr-6 max-sm:h-9 max-sm:w-9 max-sm:mr-3 max-sm:bg-[#8bc34a] p-3 rounded cursor-pointer text-black'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            onClick={toggleSidebar}
          >
            <path d='M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z'></path>
          </svg>
          <li className='sm:text-base max-sm:text-xs max-sm:hidden mr-8 text-xl cursor-pointer font-extrabold text-black font-sans dark:text-white'>
            <NavLink to='/user'><FaUser /></NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
