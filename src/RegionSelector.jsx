import React from 'react';

function RegionSelector({ selectedRegion, handleRegionChange }) {
  return (
    <select
      value={selectedRegion}
      onChange={handleRegionChange}  // Handle region selection
      style={{ marginBottom: '20px', padding: '8px' }}
    >
      <option value="">Select Region</option>
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
      <option value="Americas">Americas</option>
    </select>
  );
}

export default RegionSelector;
