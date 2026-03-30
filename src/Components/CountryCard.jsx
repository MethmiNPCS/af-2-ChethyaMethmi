import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Styles/CountryCard.css';
import { Link } from 'react-router-dom';

// Import MUI icons only for heart
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function CountryCard({ country }) {
  const { cca3, name, capital, region, population, languages, flags } = country;
  const flagUrl = flags && flags.png ? flags.png : 'https://via.placeholder.com/100';

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(cca3));
  }, [cca3]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(cca3)) {
      favorites = favorites.filter(code => code !== cca3);
      setIsFavorite(false);
    } else {
      favorites.push(cca3);
      setIsFavorite(true);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <Card className="country-card">
      <div className="country-card__media">
        <img
          src={flagUrl}
          alt={`Flag of ${name.common}`}
          className="country-card__flag"
        />
        <span className="country-card__region">{region || 'N/A'}</span>
      </div>

      <Card.Body className="country-card__body">
        <div className="country-card__header">
          <Card.Title className="country-card__title">{name.common}</Card.Title>
          <button
            type="button"
            className={`country-card__favorite ${isFavorite ? 'is-active' : ''}`}
            onClick={toggleFavorite}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </button>
        </div>

        <div className="country-card__meta">
          <div>
            <span>Capital</span>
            <strong>{capital ? capital[0] : 'N/A'}</strong>
          </div>
          <div>
            <span>Population</span>
            <strong>{population ? population.toLocaleString() : 'N/A'}</strong>
          </div>
          <div className="country-card__languages">
            <span>Languages</span>
            <strong>{languages ? Object.values(languages).join(', ') : 'N/A'}</strong>
          </div>
        </div>

        <div className="country-card__actions">
          <Link to={`/country/${cca3}`} className="country-card__link">
            <Button className="country-card__button">Explore Details</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CountryCard;
