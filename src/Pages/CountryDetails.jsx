import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CountryDetails() {
  const { code } = useParams();
  const [c, setC] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(res => res.json())
      .then(data => setC(data[0]));
  }, [code]);

  if (!c) return <p>Loading…</p>;

  return (
    <div className="p-4">
      <h2>{c.name.common}</h2>
      <img src={c.flags.png} alt="" className="w-48 my-4" />
      <p><strong>Capital:</strong> {c.capital?.[0]}</p>
      <p><strong>Region:</strong> {c.region}</p>
      <p><strong>Population:</strong> {c.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {Object.values(c.languages || {}).join(', ')}</p>
    </div>
  );
}

export default CountryDetails;
