import React from 'react';
import '../Styles/FilterControls.css';

function RegionSelector({ selectedRegion, handleRegionChange }) {
  return (
    <select
      data-testid="region-select"
      className="form-select filter-control filter-select"
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
