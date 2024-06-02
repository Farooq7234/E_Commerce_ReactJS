import React from 'react'
import { FaSadCry } from 'react-icons/fa';

function NoproductPage() {
  return (
    <div className="flex justify-center items-center col-span-full min-h-[60vh]">
    <div className="text-center">
      <FaSadCry className="text-6xl text-gray-600 mb-4" />
      <p className="text-gray-600 text-3xl">Oops! No products found.</p>
      <p className="text-gray-600 text-lg">Try refining your search or check back later.</p>
    </div>
  </div>
  )
}

export default NoproductPage