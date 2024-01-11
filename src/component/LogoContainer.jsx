const logos = [
  "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg",
  "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg",
  "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg",
  "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg",
  "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg",
];

function LogoContainer() {
  return (
    <div className='h-auto w-auto flex justify-center items-center flex-wrap mt-5 mx-5'>
      <h2 className='text-base font-semibold max-sm:text-sm w-1/2 text-center '>Featured Brands:</h2>
      <div className='flex flex-wrap justify-center items-center'>
        {logos.map((logo, index) => (
          <img key={index} className='w-1/6 max-sm:w-1/5' src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default LogoContainer;
