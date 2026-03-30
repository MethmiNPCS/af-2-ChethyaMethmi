import React from 'react';
import SearchBar from './SearchBar';
import RegionSelector from './RegionSelector';
import LanguageSelector from './LanguageSelector';
import '../Styles/FilterBar.css';

function FilterBar({ searchQuery, handleSearchChange, language, handleLanguageChange, selectedRegion, handleRegionChange }) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__inner">
        <div className="filter-bar__meta">
          <span className="filter-bar__chip">Search & filter</span>
          <span className="filter-bar__hint">Discover countries faster</span>
        </div>

        <div className="filter-bar__controls">
          <SearchBar
            searchQuery={searchQuery}
            handleSearchChange={handleSearchChange}
          />

          <LanguageSelector
            selectedLanguage={language}
            handleLanguageChange={handleLanguageChange}
          />

          <RegionSelector
            selectedRegion={selectedRegion}
            handleRegionChange={handleRegionChange}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
