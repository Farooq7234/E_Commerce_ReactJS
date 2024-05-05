import {logos} from  "../mockData.js"

function LogoSection() {
  return (
    <div className='flex justify-around items-center gap-5 flex-wrap py-5'>
      <h2 className='font-semibold  text-3xl text-center '>Featured Brands:</h2>
      <div  className='flex flex-wrap justify-around items-center '>
        {logos.map((logo, index) => (
          <img key={index} className='w-52 dark:filter dark:invert' src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default LogoSection;
