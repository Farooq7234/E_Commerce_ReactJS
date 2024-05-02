import React from 'react'
import { CiSearch } from "react-icons/ci";

function Search() {
    return (
        <>
            <div className='flex gap-3'>
                <input type="text" placeholder='search the products...
                '
                className='pl-3 border-2 border-[#dddddd] rounded-md'
                 />
                <button className='bg-[#6a9739] rounded-md text-white text-xl p-3 flex justify-center items-center'>
                    <CiSearch />
                </button>
            </div>
        </>
    )
}

export default Search