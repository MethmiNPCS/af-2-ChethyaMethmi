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
    <Card style={{ width: '18rem' }} className="mx-auto shadow-sm">
      <Card.Img
        variant="top"
        src={flagUrl}
        alt={`Flag of ${name.common}`}
        style={{ height: '180px', objectFit: 'cover' }}
      />

      <Card.Body>
        <Card.Title>{name.common}</Card.Title>

        <Card.Text>
          <strong>Capital:</strong> {capital ? capital[0] : 'N/A'} <br />
          <strong>Region:</strong> {region || 'N/A'} <br />
          <strong>Population:</strong> {population ? population.toLocaleString() : 'N/A'} <br />
          <strong>Languages:</strong> {languages ? Object.values(languages).join(', ') : 'N/A'}
        </Card.Text>

        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/country/${cca3}`}>
            <Button className="btn btn-outline-info">Details</Button>
          </Link>

          <Button
            variant={isFavorite ? 'danger' : 'outline-danger'}
            onClick={toggleFavorite}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CountryCard;
