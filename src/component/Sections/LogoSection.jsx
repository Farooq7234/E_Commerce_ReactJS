
const logos = [
  "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg",
  "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg",
  "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg",
  "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg",
  "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg",
];



function LogoContainer() {
  return (
    <div className='flex justify-around items-center flex-wrap pt-10  dark:dark:bg-black'>
      <h2 className='font-semibold  text-3xl md:text-2xl text-center dark:text-white '>Featured Brands:</h2>
      <div  className='flex flex-wrap justify-around items-center '>
        {logos.map((logo, index) => (
          <img key={index} className='w-52 dark:filter dark:invert' src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default LogoContainer;
