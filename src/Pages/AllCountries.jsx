// src/Pages/AllCountries.jsx
import React, { useState, useEffect } from 'react';
import FilterBar from '../Components/FilterBar'; // Import the new FilterBar component
import CountryCard from '../Components/CountryCard';
import { useSearchParams } from 'react-router-dom';

function AllCountries() {
  const [countries, setCountries] = useState([]); // State for storing countries data
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const selectedRegion = searchParams.get('region') || '';
  const language = searchParams.get('language') || '';

  // Fetch all countries data on component mount
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')  
      .then((response) => response.json())  
      .then((data) => {
        setCountries(data);  
      })
      .catch((err) => console.error('Error fetching countries:', err));
  }, []);  

  const handleSearchChange = (e) => {
    const query = e.target.value;
    // Update URL query param 'search'
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (query) {
        newParams.set('search', query);
      } else {
        newParams.delete('search');
      }
      if (selectedRegion) {
        newParams.set('region', selectedRegion);
      }
      return newParams;
    });
  };

  const handleRegionChange = (e) => {
    const region = e.target.value;
    // Update URL query param 'region'
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (region) {
        newParams.set('region', region);
      } else {
        newParams.delete('region');
      }
      if (searchQuery) {
        newParams.set('search', searchQuery);
      }
      return newParams;
    });
  };

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (lang) {
        newParams.set('language', lang);
      } else {
        newParams.delete('language');
      }
      // Keep existing search and region params
      if (searchQuery) newParams.set('search', searchQuery);
      if (selectedRegion) newParams.set('region', selectedRegion);
      return newParams;
    });
  };

  useEffect(() => {
    let url = 'https://restcountries.com/v3.1/all';

    if (language && selectedRegion && searchQuery.trim() !== '') {
      url = `https://restcountries.com/v3.1/region/${selectedRegion}`;
    } else if (language && selectedRegion) {
      url = `https://restcountries.com/v3.1/region/${selectedRegion}`;
    } else if (language && searchQuery.trim() !== '') {
      url = `https://restcountries.com/v3.1/name/${searchQuery}`;
    } else if (language) {
      url = `https://restcountries.com/v3.1/lang/${language}`;
    } else if (searchQuery.trim() !== '' && selectedRegion) {
      url = `https://restcountries.com/v3.1/region/${selectedRegion}`;
    } else if (searchQuery.trim() !== '') {
      url = `https://restcountries.com/v3.1/name/${searchQuery}`;
    } else if (selectedRegion) {
      url = `https://restcountries.com/v3.1/region/${selectedRegion}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setCountries(data);
        } else {
          setCountries([]);
        }
      })
      .catch(() => {
        setCountries([]);
      });
  }, [searchQuery, selectedRegion, language]);

  return (
    <div className="container mx-auto p-4">
      <div>
        <FilterBar
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          language={language}
          handleLanguageChange={handleLanguageChange}
          selectedRegion={selectedRegion}
          handleRegionChange={handleRegionChange}
        />
      </div>

      <div className="row g-4" style={{ paddingTop: '180px' }}>
        {countries.map((country) => (
          <div key={country.cca3} className="col-12 col-sm-6 col-lg-4">
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCountries;
