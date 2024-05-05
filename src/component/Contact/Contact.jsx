import React from 'react'
import Banner from '../Banner'
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";


const ContactMsg = "Get in Touch"

const data = [
  { icon: <IoIosMail  className='text-green-700 ' />, 
    contactDetail: '+91 723893930' },
  { icon: <FaLocationDot className='text-green-700 ' /> , 
    contactDetail: 'info@gmail.com' },
  { icon: <FaPhone  className='text-green-700 ' />  ,
    contactDetail: 'c1569 Ave, New York' },
];

function Contact() {
  return (
    <>
    <Banner ContactValue = {ContactMsg}/>
    </>
  )
}

export default Contact