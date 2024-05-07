import {React,useState} from 'react'
import { CiSearch } from "react-icons/ci";

function Search({onSearch}) {
  const [searchVal, setSearchVal] = useState('')

  const handleSearchClick  = () =>{
      onSearch(searchVal)
      console.log("Search Term:", searchVal);
  }
      
    
    return (
        <>
             <div className='flex gap-1'>
                <input type="text"
                onChange={e=> setSearchVal(e.target.value)}
                placeholder='search the products...'
                className='pl-3 border-2 border-[#dddddd] rounded-3xl w-[250px] sm:w-[400px]'
                />
                <button className='bg-[#6a9739] rounded-full text-white  text-xl p-3 flex justify-center items-center'
                type='button'
                onClick={handleSearchClick}
                >
                    <CiSearch />
                </button>
            </div> 
            
        </>
    )
}

export default Search