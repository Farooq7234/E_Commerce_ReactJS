import { useState,useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import Service from './component/Service';
import { FaTruck, FaMoneyBillAlt } from 'react-icons/fa';
import { PiCertificateFill } from 'react-icons/pi';
import { RiRecycleFill } from 'react-icons/ri';
import TrendProduct from './component/TrendProduct';
import FeatureSection from './component/FeatureSection';
import OfferSection from './component/OfferSection';
import CustomerReview from './component/CustomerReview';
import LogoContainer from './component/LogoContainer';
import Footer from './component/Footer';
import ThemeBtn from './component/ThemeBtn';
import { ThemeProvider } from './context/theme';

const SERVICE_DATA = [
  { value1: 'Free Shipping', value2: 'Above $5 Only', icon: <FaTruck className='text-3xl text-[#8bc34a]' /> },
  { value1: 'Certified Organic', value2: '100% Guarantee', icon: <PiCertificateFill className='text-3xl text-[#8bc34a]' /> },
  { value1: 'Huge Savings', value2: 'At Lowest Price', icon: <FaMoneyBillAlt className='text-3xl text-[#8bc34a]' /> },
  { value1: 'Easy Return', value2: 'No Question Asked', icon: <RiRecycleFill className='text-3xl text-[#8bc34a]' /> },
];

const PRODUCT_DATA = {
  'Assorted Coffee': { category: 'Groceries', img: 'coffee-asorted', price: 35.00 },
  'Hand Sanitizer': { category: 'Juice', img: 'sanitizer', price: 15.00 },
  'Handpicked redchillies': { category: 'Groceries', img: 'red-chillies', price: 45.00 },
  'Natural Extracted Edible Oil': { category: 'Groceries', img: 'edible-oil', price: 95.00 },
};

const FEATURE_DATA = [
  { product: 'farm fresh fruits', img: 'th.bing.com/th/id/OIP.D-1bRjZ4nMhhkZZuVkKXbgAAAA?rs=1&pid=ImgDetMain' },
  { product: 'Fresh Vegetables', img: 'th.bing.com/th/id/OIP._ODH2iTy29mQC-vajICn4QAAAA?pid=ImgDet&w=153&h=100&c=7' },
  { product: 'Organic Legume', img: 'th.bing.com/th/id/OIP.x2WN12zQM3dJevMrSCDffQAAAA?pid=ImgDet&w=153&h=96&c=7' },
  // Add more feature data as needed
];

const CUSTOMER_REVIEW_DATA = [
  { custName: 'Mila Kunis', clients: 'client02' },
  { custName: 'Loki', clients: 'client01' },
  { custName: 'Loki', clients: 'client02' },
  // Add more customer review data as needed
];

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  const [price, setPrice] = useState(0.00);
  const [cartValue, setCartValue] = useState(0);

  return (
    <>
     <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <Router>
        <Header price={price} cartvalue={cartValue} setCartvalue={setCartValue} />
        <div className="w-full  bg-gray-50 dark:bg-black ">
              <div className="w-full flex justify-end py-4">
                  <ThemeBtn />
              </div>
              </div>
      </Router>
      <HeroSection />
      <div className='flex flex-row max-sm:flex-col'>
        {SERVICE_DATA.map(({ value1, value2, icon }, index) => (
          <Service key={index} value1={value1} value2={value2} value3={icon} />
        ))}
      </div>
      <h2 className='font-bold text-3xl max-sm:text-xl py-10 text-center font-serif dark:text-white dark:bg-black'>Trending Products</h2>
      <div className='h-auto w-full flex flex-row max-sm:flex-col justify-evenly max-sm:justify-center max-sm:flex-wrap items-center max-sm:mx-10 py-8 dark:bg-black'>
        {Object.entries(PRODUCT_DATA).map(([productName, { category, img, price }]) => (
          <TrendProduct
            key={productName}
            category={category}
            productName={productName}
            image={img}
            productPrice={price}
          />
        ))}
      </div>
      <div className='flex justify-around w-full py-6 max-sm:flex-wrap h-auto bg-gray-200 dark:bg-black '>
        {FEATURE_DATA.map(({ product, img }, index) => (
          <FeatureSection key={index} products={product} productImg={img} />
        ))}
      </div>
      <OfferSection />
      <h2 className='pt-10 font-serif text-3xl text-center font-medium dark:bg-black dark:text-white'>Customers Reviews</h2>
      <div className='flex justify-around max-sm:flex-wrap py-5  h-auto bg-white dark:bg-black'>
        {CUSTOMER_REVIEW_DATA.map(({ custName, clients }, index) => (
          <CustomerReview key={index} custName={custName} clients={clients} />
        ))}
      </div>
      <LogoContainer />
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
