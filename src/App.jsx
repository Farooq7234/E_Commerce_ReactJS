import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './component/Header'
import HeroSection from './component/HeroSection';
import Service from './component/Service';
import { FaTruck } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { RiRecycleFill } from "react-icons/ri";
import TrendProduct from './component/TrendProduct';
import { FaRegStar } from "react-icons/fa";
import FeatureSection from './component/FeatureSection';
import OfferSection from './component/OfferSection';
import CustomerReview from './component/CustomerReview';
import LogoContainer from './component/LogoContainer';






function App() {

  const [price,setPrice]= useState(0.00)
  const [cartValue,setCartvalue]= useState(0)


  // services data

  const delivery = "Free Shipping"
  const delCon = "Above $5 Only"

  const certificate = "Certified Organic"
  const guarantee = "100% Guarantee"

  const savings = "Huge Savings"
  const cost = "At Lowest Price"

  const returns = "Easy Return"
  const questions = "No Question Asked"

  const category = ['Groceries', 'Juice']
  const productName = ['Assorted Coffee', 'Hand Sanitizer', 'Handpicked redchillies', 'Extracted Edible Oil']
  const img = ['coffee-asorted','sanitizer', 'red-chillies', 'edible-oil']

  const productPrice={
    'Assorted Coffee':35.00,
    'Hand Sanitizer':45.00,
    'Handpicked redchillies':45.00,
    'Natural Extracted Edible Oil':95.00,
  }

  // featured section data here

  const products = ['farm fresh fruits', 'fresh vegetables', 'fresh legume']


  // Customer Review Sections data 

  const custName = ['Mila Kunis','Loki']
  const clients = ['client01','client02']


  return (
    <>
    <Router>
    <Header price={price} cartvalue = {cartValue} setCartvalue = {setCartvalue} />
    </Router>    
    <HeroSection/>
    <div className='flex flex-row max-sm:flex-col'>
    <Service  value1={delivery} value2 = {delCon} value3={<FaTruck className='text-3xl text-[#8bc34a]' />}/>
    <Service value1={certificate}  value2={guarantee}  value3={<PiCertificateFill className='text-3xl text-[#8bc34a]' />}  />
    <Service value1= {savings} value2={cost } value3={<FaMoneyBillAlt  className='text-3xl text-[#8bc34a]' />} />
    <Service value1={returns} value2={questions}  value3={<RiRecycleFill className='text-3xl text-[#8bc34a]' />}/>
    </div>
      <h2 className='font-bold text-2xl py-10 text-center'>Trending Products</h2>
    <div className='h-auto flex flex-row max-sm:flex-col justify-evenly flex-wrap items-center p-6'>
    <TrendProduct category={category[0]}  productName={productName[0]}    image={img[0]} productPrice = {productPrice['Assorted Coffee']} />
    <TrendProduct category={category[1]}  productName={productName[1]}   image={img[1]}  productPrice = {productPrice['Hand Sanitizer']} />
    <TrendProduct category={category[0]}  productName={productName[2]}   image={img[2]}  productPrice = {productPrice['Handpicked redchillies']} />
    <TrendProduct category={category[0]}  productName={productName[3]}   image={img[3]}  productPrice = {productPrice['Natural Extracted Edible Oil']} />
    </div>
    <div
    className='w-full flex flex-row max-sm:flex-wrap sm:flex-wrap '>
    <FeatureSection products= {products[0]}/>
    <FeatureSection products= {products[1]}/>
    <FeatureSection products= {products[2]}/>
    </div>
    <OfferSection/>
      <h2 className='mt-10 font-serif text-3xl text-center font-medium'>Customers Reviews</h2>
    <div className='flex justify-around flex-wrap py-5 h-auto bg-white'>
    <CustomerReview custName={custName[0]} clients={clients[1]}/>
    <CustomerReview custName={custName[1]} clients={clients[0]} />
    <CustomerReview custName={custName[1]} clients={clients[0]}/>
    </div>
    <LogoContainer/>
    </>
  )
}

export default App
