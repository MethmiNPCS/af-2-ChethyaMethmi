import React from 'react';

function SearchBar({ searchQuery, handleSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search for a country"
      value={searchQuery}
      onChange={handleSearchChange} // Trigger API call based on input change
      className="form-control w-full sm:w-80 py-2 px-4 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300 ease-in-out"
    />
  );
}

export default SearchBar;
