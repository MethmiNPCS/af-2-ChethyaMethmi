import React, { useState, useEffect } from 'react';
import CountryCard from '../Components/CountryCard';
import SearchBar from '../Components/SearchBar';  
import RegionSelector from '../Components/RegionSelector';  

function Home() {
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
      <div className="container mx-auto p-4">
        <div>
          <br /><br /><br />
          {/* Use SearchBar Component */}
          <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      
          {/* Use RegionSelector Component */}
          <RegionSelector selectedRegion={selectedRegion} handleRegionChange={handleRegionChange} />
        </div>
         
        <div className="row g-4">
          {countries.map((country) => (
            <div key={country.cca3} className="col-12 col-sm-6 col-lg-4">
              <CountryCard country={country} />
            </div>
          ))}
        </div>


      </div>
      );
}

export default Home
