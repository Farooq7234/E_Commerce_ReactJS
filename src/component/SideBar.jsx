import React from 'react'
import Search from './Search'

function SideBar() {
    return (
        <>
        <div className='w-[300px] h-[100vh] px-5 pt-10 border-r-2 border-r-[#dddddd] dark:bg-black'>
        <Search/>
        </div>
        </>
    )
}

export default SideBar