import React from 'react';

function SearchBar({ searchQuery, handleSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search for a country"
      value={searchQuery}
      onChange={handleSearchChange}  // Trigger API call based on input change
      style={{ marginBottom: '20px', padding: '8px' }}
    />
  );
}

export default SearchBar;
