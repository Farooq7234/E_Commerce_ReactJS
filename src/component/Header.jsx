import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";


const Header = ({ price, cartvalue }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className='  bg-white h-20 flex justify-between items-center shadow-md '>
        {/* left side of the header section */}
        <ul className='flex justify-center items-center'>
          <img
            src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg'
            className='sm:h-6 sm:w-20 h-12 m-3 mr-6'
            alt='Logo'
          />
          <li className='sm:text-xs max-sm:text-xs mr-9 text-base max-sm:hidden cursor-pointer font-normal text-black hover:text-[#8bc34a] font-sans'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='sm:text-xs max-sm:text-xs mr-9 text-base max-sm:hidden cursor-pointer font-normal text-black hover:text-[#8bc34a] font-sans'>
            <NavLink to='/groceries'>Groceries</NavLink>
          </li>
          <li className='sm:text-xs max-sm:text-xs mr-9 text-base max-sm:hidden cursor-pointer font-normal text-black hover:text-[#8bc34a] font-sans'>
            <NavLink to='/juice'>Juice</NavLink>
          </li>
        </ul>

        {/* right section of the header elements */}
        <ul className='flex justify-center items-center '>
          

          {/* Sidebar */}
          {sidebarVisible && (
            <div className='fixed top-0 left-0 h-full max-sm:w-62 w-64 bg-gray-100'>
              {/* sidebar content  */}
              <ul className='p-4'>
              <li className='py-4 shadow-md text-lg text-center hover:bg-[#8bc34a]'>
            <NavLink to='/user'><FaUser className='m-auto' /></NavLink>
          </li>
                <li className='py-4 shadow-md text-lg text-center hover:bg-[#8bc34a]'>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li className='py-4 shadow-md text-lg text-center hover:bg-[#8bc34a]'>
                  <NavLink to='/groceries'>Groceries</NavLink>
                </li>
                <li className='py-4 shadow-md text-lg text-center hover:bg-[#8bc34a]'>
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li className='py-4 shadow-md text-lg text-center hover:bg-[#8bc34a]'>
                  <NavLink to='/contact'>Contact</NavLink>
                </li>
              
              </ul>
            </div>
          )}

          <li className='sm:text-xs max-sm:text-xs max-sm:hidden mr-8 text-base cursor-pointer font-medium text-black hover:text-[#8bc34a] font-sans'>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className='sm:text-xs max-sm:text-xs max-sm:hidden mr-8 text-base cursor-pointer font-medium text-black hover:text-[#8bc34a] font-sans'>
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
            className='sm:hidden max-sm:visible mr-6 max-sm:h-9 max-sm:w-9 max-sm:mr-3 max-sm:bg-[#8bc34a] p-3 rounded cursor-pointer text-white'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            onClick={toggleSidebar}
          >
            <path d='M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z'></path>
          </svg>
          <li className='sm:text-base max-sm:text-xs max-sm:hidden mr-8 text-xl cursor-pointer font-extrabold text-black font-sans'>
            <NavLink to='/user'><FaUser /></NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
