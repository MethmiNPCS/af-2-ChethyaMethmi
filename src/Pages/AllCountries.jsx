import React, { useState, useEffect } from 'react';
import CountryCard from '../Components/CountryCard';
import SearchBar from '../Components/SearchBar';  
import RegionSelector from '../Components/RegionSelector';
import { useSearchParams } from 'react-router-dom';

function AllCountries() {
    const [countries, setCountries] = useState([]);  // State for storing countries data

    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const selectedRegion = searchParams.get('region') || '';
    
  
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
    
    useEffect(() => {
      let url = 'https://restcountries.com/v3.1/all'; // Default URL to fetch all countries
    
      // If both region and search query are present
      if (searchQuery.trim() !== '' && selectedRegion) {
        url = `https://restcountries.com/v3.1/region/${selectedRegion}`;
      } else if (searchQuery.trim() !== '') {
        // If only search query is present
        url = `https://restcountries.com/v3.1/name/${searchQuery}`;
      } else if (selectedRegion) {
        // If only region is selected
        url = `https://restcountries.com/v3.1/region/${selectedRegion}`;
      }
    
      // Fetch data from the appropriate URL
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            if (searchQuery.trim() !== '' && selectedRegion) {
              // Filter countries by both region and search query
              const filteredCountries = data.filter((country) =>
                country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
              );
              setCountries(filteredCountries);
            } else {
              setCountries(data); // Set the countries data
            }
          } else {
            setCountries([]); // No results found, show empty state
          }
        })
        .catch(() => {
          setCountries([]); // In case of an error, set empty array
        });
    }, [searchQuery, selectedRegion]);
    
    
    

    return (
      <div className="container mx-auto p-4" >
        <div
          className="sticky-top d-flex align-items-center gap-3 px-4"
          style={{
            top: '80px',                 // below navbar height
            width: '100vw',              // full viewport width
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // semi-transparent white
            backdropFilter: 'blur(10px)', // optional blur for glass effect
            zIndex: 1050,
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            position: 'sticky',          // sticky (can omit if sticky-top works)
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // subtle shadow
          }}
        >
        <div className="container d-flex flex-column flex-md-row align-items-center gap-3 px-0">
          <div className="flex-grow-1">
            <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
          </div>
          <div style={{ minWidth: '200px' }}>
          <RegionSelector selectedRegion={selectedRegion} handleRegionChange={handleRegionChange} />
          </div>
        </div>
      </div>
         
        <div className="row g-4" style={{ paddingTop: '100px' }}>
          {countries.map((country) => (
            <div key={country.cca3} className="col-12 col-sm-6 col-lg-4">
              <CountryCard country={country} />
            </div>
          ))}
        </div>
      </div>
      );
}

export default AllCountries
