import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

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
  } = country;

  return (
    <div className="container my-5" style={{ paddingTop: '100px' }}>
      <div className="row g-4">
        {/* Left side: Flag and Coat of Arms */}
        <div className="col-md-5 text-center">
          <img
            src={flags.png}
            alt={`Flag of ${name.common}`}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '300px', objectFit: 'contain' }}
          />
          <h5 className="mt-4">National Flag</h5>
          <br /><br />
          {coatOfArms?.png && (
            <>              
              <img
                src={coatOfArms.png}
                alt={`Coat of arms of ${name.common}`}
                className="img-fluid rounded shadow"
                style={{ maxHeight: '150px', objectFit: 'contain' }}
              />
              <h5 className="mt-4">Coat of Arms</h5>
            </>
          )}
        </div>

        {/* Right side: Details */}
        <div className="col-md-7">
          <h2>{name.common}</h2>
          <h5 className="text-muted fst-italic">{name.official}</h5>

          <table className="table table-borderless mt-3">
            <tbody>
              <tr>
                <th>Native Name(s)</th>
                <td>
                  {name.nativeName
                    ? Object.values(name.nativeName)
                        .map((n) => n.common)
                        .join(', ')
                    : 'N/A'}
                </td>
              </tr>

              <tr>
                <th>Capital</th>
                <td>{capital ? capital.join(', ') : 'N/A'}</td>
              </tr>

              <tr>
                <th>Region</th>
                <td>{region || 'N/A'}</td>
              </tr>

              <tr>
                <th>Subregion</th>
                <td>{subregion || 'N/A'}</td>
              </tr>

              <tr>
                <th>Population</th>
                <td>{population.toLocaleString()}</td>
              </tr>

              <tr>
                <th>Area</th>
                <td>{area.toLocaleString()} km²</td>
              </tr>

              <tr>
                <th>Languages</th>
                <td>{languages ? Object.values(languages).join(', ') : 'N/A'}</td>
              </tr>

              <tr>
                <th>Currencies</th>
                <td>
                  {currencies
                    ? Object.values(currencies)
                        .map((c) => `${c.name} (${c.symbol})`)
                        .join(', ')
                    : 'N/A'}
                </td>
              </tr>

              <tr>
                <th>Timezones</th>
                <td>{timezones ? timezones.join(', ') : 'N/A'}</td>
              </tr>

              <tr>
                <th>Borders</th>
                <td>{borders ? borders.join(', ') : 'No bordering countries'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
