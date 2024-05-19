import { FaShoppingCart } from "react-icons/fa"


function ActionButton() {
 
  return (
    <>
      <button className='bg-[#6a9739] hover:bg-[#8bc34a] capitalize w-28 sm:w-40 h-10 flex justify-center items-center text-sm sm:text-base gap-2 text-white rounded-md'> <FaShoppingCart/>  Shop Now</button>
    </>
  )
}

export default ActionButton