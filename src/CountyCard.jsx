import React from 'react';

function CountryCard({ country }) {
  // Destructure properties from the country object
  const { name, capital, region, population, languages, flags } = country;

  // Safeguard for flag - use a fallback if flag URL is not available or not resolving
  const flagUrl = flags && flags.png ? flags.png : 'https://via.placeholder.com/100'; 

  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 mx-auto">
      {/* Country Name */}
      <h2 className="text-xl font-semibold text-gray-800 text-center p-4">{name.common}</h2>
      
      {/* Flag Image */}
      <img
        src={flagUrl}
        alt={`Flag of ${name.common}`}
        className="w-full h-40 object-cover"
      />
      
      {/* Country Details */}
      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-600">
          <strong>Capital:</strong> {capital ? capital[0] : 'N/A'}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Region:</strong> {region || 'N/A'}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Population:</strong> {population ? population.toLocaleString() : 'N/A'}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Languages:</strong> {languages ? Object.values(languages).join(', ') : 'N/A'}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
