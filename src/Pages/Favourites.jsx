import React, { useEffect, useState } from 'react';
import CountryCard from '../Components/CountryCard';
import FilterBar from '../Components/FilterBar'; // Import FilterBar

function Favorites() {
  const [favoriteCountries, setFavoriteCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const favoriteCodes = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favoriteCodes.length === 0) {
      setFavoriteCountries([]);
      setLoading(false);
      return;
    }

    // Fetch details for each favorite country by code
    Promise.all(
      favoriteCodes.map(code =>
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
          .then(res => res.json())
          .then(data => data[0])
      )
    )
      .then(countries => {
        setFavoriteCountries(countries);
        setLoading(false);
        setFilteredCountries(countries); // Initially show all favorites
      })
      .catch(() => {
        setFavoriteCountries([]);
        setLoading(false);
        setFilteredCountries([]);
      });
  }, []);

  useEffect(() => {
    // Apply search filter
    let filtered = favoriteCountries;

    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply region filter
    if (selectedRegion) {
      filtered = filtered.filter(country => country.region === selectedRegion);
    }

    // Apply language filter
    if (language) {
      filtered = filtered.filter(country =>
        country.languages &&
        Object.values(country.languages).some(lang => lang.toLowerCase().includes(language.toLowerCase()))
      );
    }

    setFilteredCountries(filtered); // Update the filtered countries list
  }, [searchQuery, selectedRegion, language, favoriteCountries]);

  if (loading) return <p>Loading favorites...</p>;

  if (filteredCountries.length === 0)
    return <p className="text-center mt-4">You have no favorite countries yet.</p>;

  return (
    <div className="container mx-auto p-4" style={{ paddingTop: '80px' }}>
      {/* Add the FilterBar component here */}
      <FilterBar
        searchQuery={searchQuery}
        handleSearchChange={(e) => setSearchQuery(e.target.value)}
        language={language}
        handleLanguageChange={(e) => setLanguage(e.target.value)}
        selectedRegion={selectedRegion}
        handleRegionChange={(e) => setSelectedRegion(e.target.value)}
      />

      <div className="row g-4" style={{ paddingTop: '180px' }}>
        {filteredCountries.map((country) => (
          <div key={country.cca3} className="col-12 col-sm-6 col-lg-4">
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
