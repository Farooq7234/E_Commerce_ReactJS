import {logos} from  "../mockData.js"

function Logos() {
  return (
    <div className='flex justify-center items-center  flex-wrap py-5'>
      <h2 className='font-semibold  text-3xl text-center '>Featured Brands:</h2>
      <div  className='flex flex-wrap justify-around items-center '>
        {logos.map((logo, index) => (
          <img key={index} className='w-52 dark:filter dark:invert' src={logo.logoImage} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Logos;
