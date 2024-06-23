import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Search({ onSearch }) {
  const [searchVal, setSearchVal] = useState('');

  const handleSearchClick = () => {
    onSearch(searchVal);
    console.log("Search Term:", searchVal);
  };

  const handleClearSearch = () => {
    setSearchVal('');
  };

  return (
    <div className="flex items-center relative">
      <input
        type="text"
        value={searchVal}
        onChange={e => setSearchVal(e.target.value)}
        placeholder="Search products..."
        className="px-3 py-2 mb-2 sm:mb-0 mr-0 sm:mr-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
      />
      {searchVal && (
        <button
          className="absolute top-0 right-24 mt-3 -mr-7 sm:mr-7 text-gray-500 hover:text-gray-700 focus:outline-none"
          type="button"
          onClick={handleClearSearch}
        >
          <AiOutlineCloseCircle className="h-4 w-4" />
        </button>
      )}
      <button
        className="bg-[#8bc34a] hover:bg-[#639130] text-white py-2 px-4 rounded-lg flex items-center"
        type="button"
        onClick={handleSearchClick}
      >
        <CiSearch className="mr-1" />
        <span className="hidden sm:inline">Search</span>
      </button>
    </div>
  );
}

export default Search;
