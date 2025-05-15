import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Styles/CountryCard.css';
import { Link } from 'react-router-dom';

function CountryCard({ country }) {
  const { name, capital, region, population, languages, flags } = country;
  const flagUrl = flags && flags.png ? flags.png : 'https://via.placeholder.com/100';

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Later you can save this to local storage or a database
  };
  
  return (
    <Card style={{ width: '18rem' }} className="mx-auto shadow-sm">
      {/* Flag Image */}
      <Card.Img
        variant="top"
        src={flagUrl}
        alt={`Flag of ${name.common}`}
        style={{ height: '180px', objectFit: 'cover' }}
      />

      <Card.Body>
        {/* Country Name */}
        <Card.Title>{name.common}</Card.Title>

        {/* Country Details */}
        <Card.Text>
          <strong>Capital:</strong> {capital ? capital[0] : 'N/A'} <br />
          <strong>Region:</strong> {region || 'N/A'} <br />
          <strong>Population:</strong> {population ? population.toLocaleString() : 'N/A'} <br />
          <strong>Languages:</strong> {languages ? Object.values(languages).join(', ') : 'N/A'}
        </Card.Text>

        <div>
        {/* Example Action Button */}
          <Link to={`/country/${country.cca3}`}>
            <Button className="btn btn-outline-info">Details</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CountryCard;
