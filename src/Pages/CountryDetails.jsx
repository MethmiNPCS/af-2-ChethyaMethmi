import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../Styles/CountryDetails.css';

function CountryDetails() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(res => res.json())
      .then(data => {
        setCountry(data[0]);
        setLoading(false);
      });
  }, [code]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  if (!country) return <p>Country not found.</p>;

  const {
    flags,
    name,
    capital,
    region,
    subregion,
    population,
    languages,
    currencies,
    timezones,
    borders,
    coatOfArms,
    area,
    continents,
    startOfWeek,
    independent,
    unMember,
  } = country;

  const nativeNames = name.nativeName
    ? Object.values(name.nativeName).map((n) => n.common).join(', ')
    : 'N/A';
  const capitalText = capital ? capital.join(', ') : 'N/A';
  const languageText = languages ? Object.values(languages).join(', ') : 'N/A';
  const currencyText = currencies
    ? Object.values(currencies)
        .map((c) => `${c.name}${c.symbol ? ` (${c.symbol})` : ''}`)
        .join(', ')
    : 'N/A';
  const timezoneText = timezones ? timezones.join(', ') : 'N/A';
  const borderText = borders ? borders.join(', ') : 'No bordering countries';
  const continentText = continents ? continents.join(', ') : 'N/A';
  const independenceText = independent === true ? 'Independent' : independent === false ? 'Not independent' : 'N/A';
  const unText = unMember ? 'UN Member' : 'Not a UN Member';
  const weekText = startOfWeek ? startOfWeek.toUpperCase() : 'N/A';

  return (
    <div className="country-details-page">
      <div className="country-details-backdrop" aria-hidden="true">
        <span className="glow glow--one" />
        <span className="glow glow--two" />
        <span className="glow glow--three" />
      </div>

      <section className="country-details-hero">
        <div className="country-details-hero__text">
          <span className="country-pill">Region · {region || 'N/A'}</span>
          <h1 className="country-title">{name.common}</h1>
          <p className="country-subtitle">{name.official}</p>

          <div className="country-quick-stats">
            <div className="stat-card">
              <span>Population</span>
              <strong>{population.toLocaleString()}</strong>
            </div>
            <div className="stat-card">
              <span>Area</span>
              <strong>{area.toLocaleString()} km²</strong>
            </div>
            <div className="stat-card">
              <span>Capital</span>
              <strong>{capitalText}</strong>
            </div>
          </div>

          <div className="country-details-hero__media">
            <div className="media-card media-card--tall">
              <img
                src={flags.png}
                alt={`Flag of ${name.common}`}
                className="media-card__image"
              />
              <span className="media-card__label">National Flag</span>
            </div>

            {coatOfArms?.png && (
              <div className="media-card media-card--tall">
                <img
                  src={coatOfArms.png}
                  alt={`Coat of arms of ${name.common}`}
                  className="media-card__image"
                />
                <span className="media-card__label">Coat of Arms</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="country-details-grid">
        <div className="info-card">
          <h2>Identity</h2>
          <div className="info-list">
            <div>
              <span>Native Name(s)</span>
              <strong>{nativeNames}</strong>
            </div>
            <div>
              <span>Region</span>
              <strong>{region || 'N/A'}</strong>
            </div>
            <div>
              <span>Subregion</span>
              <strong>{subregion || 'N/A'}</strong>
            </div>
            <div>
              <span>Continents</span>
              <strong>{continentText}</strong>
            </div>
          </div>
        </div>

        <div className="info-card">
          <h2>Culture</h2>
          <div className="info-list">
            <div>
              <span>Languages</span>
              <strong>{languageText}</strong>
            </div>
            <div>
              <span>Currencies</span>
              <strong>{currencyText}</strong>
            </div>
            <div>
              <span>Timezones</span>
              <strong>{timezoneText}</strong>
            </div>
            <div>
              <span>Week Starts On</span>
              <strong>{weekText}</strong>
            </div>
          </div>
        </div>

        <div className="info-card info-card--wide">
          <h2>Geography</h2>
          <div className="info-list">
            <div>
              <span>Borders</span>
              <strong>{borderText}</strong>
            </div>
            <div>
              <span>Political Status</span>
              <strong>{independenceText} · {unText}</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CountryDetails;
