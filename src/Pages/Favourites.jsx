import React, { useEffect, useState } from 'react';
import CountryCard from '../Components/CountryCard';

function Favorites() {
  const [favoriteCountries, setFavoriteCountries] = useState([]);
  const [loading, setLoading] = useState(true);

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
      })
      .catch(() => {
        setFavoriteCountries([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading favorites...</p>;

  if (favoriteCountries.length === 0)
    return <p className="text-center mt-4">You have no favorite countries yet.</p>;

  return (
    <div className="container mx-auto p-4" style={{ paddingTop: '100px' }}>
      <h2 className="mb-4">Your Favorite Countries</h2>
      <div className="row g-4">
        {favoriteCountries.map(country => (
          <div key={country.cca3} className="col-12 col-sm-6 col-lg-4">
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
