import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';



const Header = ({image}) => {
  
  const [price, setPrice] = useState(0.00);
  const [cartValue, setCartValue] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  

  return (
    <>
        {/* Header Container */}

      <div className='dark:bg-black  bg-white h-20 flex justify-between items-center shadow-md'>

        {/* left side of the header section */}

        <ul className='flex justify-between items-center w-1/3'>
          <img src={image} className='h-12 m-3 dark:text-white' alt='Logo'/>

          <li className='dark:text-white sm:text-xs max-sm:text-xs  text-base max-sm:hidden cursor-pointer font-normal text-black hover:text-[#8bc34a] font-sans'>

            <NavLink to='/'
             className={({isActive}) =>
             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#8bc34a]  text-sm font-medium" : "text-gray-700  dark:text-white dark:hover:text-[#8bc34a]"}  lg:hover:bg-transparent lg:border-0 hover:text-[#8bc34a] lg:p-0`}>
            Home
            </NavLink>

          </li>

          <li className='dark:text-white sm:text-xs max-sm:text-xs  text-base max-sm:hidden cursor-pointer font-normal text-black hover:text-[#8bc34a] font-sans'>

            <NavLink to='/groceries'
             className={({isActive}) =>
             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#8bc34a]  text-sm font-medium" : "text-gray-700 dark:text-white dark:hover:text-[#8bc34a]"} border- lg:hover:bg-transparent lg:border-0 hover:text-[#8bc34a] lg:p-0`}>
              Groceries
              </NavLink>

          </li>

          <li className='dark:text-white sm:text-xs max-sm:text-xs  text-base max-sm:hidden cursor-pointer font-normal text-black hover:text-[#8bc34a] font-sans'>
            <NavLink to='/juice'
             className={({isActive}) =>
             `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#8bc34a]  text-sm font-medium" : "text-gray-700 dark:text-white dark:hover:text-[#8bc34a]"} lg:hover:bg-transparent lg:border-0 hover:text-[#8bc34a] lg:p-0`}
            >Juice</NavLink>
          </li>

        </ul>

        {/* right section of the header elements */}

          
          {/* Sidebar when responsive triggered */}

          {sidebarVisible && (
            <div className='fixed top-0 left-0 h-full  w-52 z-10 bg-gray-100 dark:bg-black'>
              {/* sidebar content  */}

              <ul className='flex justify-between flex-col items-center h-1/2 pt-5'>
              <li className='w-full py-2 shadow-md text-lg text-center hover:bg-[#8bc34a]'>
            <NavLink to='/user'><FaUser className='m-auto dark:text-white' /></NavLink>
          </li>
                <li className='w-full py-2 shadow-md text-lg text-center hover:bg-[#8bc34a] dark:text-white'>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li className='w-full py-2 shadow-md text-lg text-center hover:bg-[#8bc34a] dark:text-white'>
                  <NavLink to='/groceries'>Groceries</NavLink>
                </li>
                <li className='w-full py-2 shadow-md text-lg text-center hover:bg-[#8bc34a] dark:text-white'>
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li className='w-full py-2 shadow-md text-lg text-center hover:bg-[#8bc34a] dark:text-white'>
                  <NavLink to='/contact'>Contact</NavLink>
                </li>
              
              </ul>
            </div>
          )}

        <ul className='flex justify-around items-center w-1/3 '>

          <li className='sm:text-xs max-sm:text-xs max-sm:hidden  text-base cursor-pointer font-medium text-black hover:text-[#8bc34a] font-sans  dark:text-white'>
            <NavLink to='/about'>About</NavLink>
          </li>

          <li className='sm:text-xs max-sm:text-xs max-sm:hidden  text-base cursor-pointer font-medium text-black hover:text-[#8bc34a] font-sans dark:text-white'>
            <NavLink to='/contact'>Contact</NavLink>
          </li>

          <li className='sm:text-xs max-sm:text-xs text-base cursor-pointer font-extrabold text-[#8bc34a] font-sans'>
            <NavLink to='/price'>${price}</NavLink>
          </li>

          <li className='sm:text-base max-sm:text-sm text-xl cursor-pointer text-[#8bc34a] font-sans'>
            <NavLink to='/basket' className='flex'>
            <RiShoppingBasketFill className='text-xl '/>
              <sup className='bg-[#8bc34a] px-2 py-1  rounded-full text-white text-xs font-semibold'>{cartValue}</sup>
            </NavLink>
          </li>

          <svg
            className='dark:text-white sm:hidden max-sm:visible  max-sm:h-9 max-sm:w-9  max-sm:bg-[#8bc34a] p-3 rounded cursor-pointer text-black'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            onClick={toggleSidebar}
          >
            <path d='M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z'></path>
          </svg>

          <li className='sm:text-base max-sm:text-xs max-sm:hidden  text-xl cursor-pointer font-extrabold text-black font-sans dark:text-white'>
            <NavLink to='/user'><FaUser /></NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
