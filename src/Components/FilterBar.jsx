import React from 'react';
import SearchBar from './SearchBar';
import RegionSelector from './RegionSelector';
import LanguageSelector from './LanguageSelector';

function FilterBar({ searchQuery, handleSearchChange, language, handleLanguageChange, selectedRegion, handleRegionChange }) {
  return (
    <div
      className="fixed-top"
      style={{
        top: '80px', // Position the FilterBar below the navbar (adjust based on your navbar height)
        width: '100vw', // Full viewport width
        zIndex: 1020, // To ensure it stays below the navbar (zIndex of navbar = 1030)
        backgroundColor: 'rgba(46, 59, 78, 0.85)', // Darker background matching navbar with opacity
        backdropFilter: 'blur(8px)', // Optional blur effect for nice glass effect
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem',
      }}
    >
      <div className="container">
        <div className="row g-3 align-items-center">
          {/* Search Bar */}
          <div className="col-12 col-md-4">
            <SearchBar
              searchQuery={searchQuery}
              handleSearchChange={handleSearchChange}
              inputClass="form-control rounded-pill shadow-sm px-4"
            />
          </div>

          {/* Language Selector */}
          <div className="col-12 col-md-4">
            <LanguageSelector
              selectedLanguage={language}
              handleLanguageChange={handleLanguageChange}
              className="form-select w-100"
            />
          </div>

          {/* Region Selector */}
          <div className="col-12 col-md-4">
            <RegionSelector
              selectedRegion={selectedRegion}
              handleRegionChange={handleRegionChange}
              className="form-select w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
