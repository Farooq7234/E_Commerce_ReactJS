import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'




function Github() {
  const data = useLoaderData()
  let [loading, setLoading] = useState(true);


  


  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }
  }, [data])


  return (
    <>
      {
        loading ? (
         <div className='text-3xl flex justify-center items-center bg-[#f8f6f3]  dark:bg-black text-black dark:text-white min-h-[70vh] '>
          <p className='animate-pulse'>Fetching data from github...</p>
         </div>
        ) : (
          <div className='flex flex-wrap justify-around items-center gap-5 bg-[#f8f6f3]  dark:bg-black text-black dark:text-white p-4 min-h-[70vh] '>
            <div className='sm:w-[50%] flex flex-col gap-5'>
              <p className='text-xl sm:text-3xl font-bold'>Github followers: { data?.followers  === 0 ? 5 : 0 }</p>
              <p className='text-base sm:text-lg text-[#333] dark:text-white'> {data.bio}</p>
            </div>
            <img
              className='rounded-full'
              src={data.avatar_url}
              alt="Git picture"
              width={200} />
          </div>
        )
      }
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  try {
    const response = await fetch('https://api.github.com/users/Farooq7234')
    return response.json()
  } catch (error) {
    throw error
  }
}