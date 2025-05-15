import React, { useState, useEffect } from 'react';
import CountryCard from '../Components/CountryCard';
import SearchBar from '../Components/SearchBar';  
import RegionSelector from '../Components/RegionSelector';  

function AllCountries() {
    const [countries, setCountries] = useState([]);  // State for storing countries data
    const [searchQuery, setSearchQuery] = useState('');  // State for storing search query
    const [selectedRegion, setSelectedRegion] = useState('');  // State for storing selected region
  
    // Fetch all countries data on component mount
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')  // Fetch all countries data
        .then((response) => response.json())  // Parse the JSON response
        .then((data) => {
          setCountries(data);  // Set all countries data to state
        })
        .catch((err) => console.error('Error fetching countries:', err));
    }, []);  // Empty dependency array ensures this runs only once when the component mounts

    // Handle the search input change
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);  // Update the search query as the user types

        if (query.trim() !== '') {
        // Fetch country data based on search query using GET /name/{name}
        fetch(`https://restcountries.com/v3.1/name/${query}`)
            .then((response) => response.json())
            .then((data) => {
            setCountries(data);  // Set the filtered country data based on search query
            })
            .catch((err) => console.error('Error fetching searched country:', err));
        } else {
        // If search query is empty, show countries based on selected region or all countries
        if (selectedRegion) {
            // Fetch countries from the selected region using GET /region/{region}
            fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`)
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);  // Set countries from the selected region
            })
            .catch((err) => console.error('Error fetching countries by region:', err));
        } else {
            // If no region is selected, show all countries again
            fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);  // Set all countries data to state
            })
            .catch((err) => console.error('Error fetching all countries:', err));
        }
        }
    };

    // Handle region selection
    const handleRegionChange = (e) => {
        const region = e.target.value;
        setSelectedRegion(region);  // Update the selected region

        if (region) {
        // Fetch countries for the selected region using GET /region/{region}
        fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then((response) => response.json())
            .then((data) => {
            setCountries(data);  // Set countries from the selected region
            })
            .catch((err) => console.error('Error fetching countries by region:', err));
        } else {
        // If no region is selected, show all countries again
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
            setCountries(data);  // Reset to all countries
            })
            .catch((err) => console.error('Error fetching all countries:', err));
        }
    };

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
