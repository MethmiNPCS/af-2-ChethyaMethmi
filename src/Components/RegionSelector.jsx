import React from 'react';

function RegionSelector({ selectedRegion, handleRegionChange }) {
  return (
    <select
      className="form-select"
      value={selectedRegion}
      onChange={handleRegionChange}
      style={{ minHeight: '40px' }}
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
