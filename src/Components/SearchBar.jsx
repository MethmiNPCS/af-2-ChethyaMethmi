import React from 'react';
import '../Styles/FilterControls.css';

function SearchBar({ searchQuery, handleSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search for a country"
      value={searchQuery}
      onChange={handleSearchChange} 
      className="form-control filter-control"
    />
  );
}

export default SearchBar;
