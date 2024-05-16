import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  const data = useLoaderData()

  return (
    <div className='flex flex-wrap max-sm:justify-center justify-between items-center text-center  bg-slate-50 text-black p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={100} />
    </div>
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