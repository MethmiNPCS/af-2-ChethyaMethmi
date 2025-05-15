import React from 'react';

function LanguageSelector({ selectedLanguage, handleLanguageChange }) {
  const languages = [
    'English',
    'Spanish',
    'French',
    'Arabic',
    'Chinese',
    'Hindi',
    'Portuguese',
    'Russian',
  ];

  return (
    <select
      className="form-select"
      value={selectedLanguage}
      onChange={handleLanguageChange}
      style={{ minHeight: '40px' }}
    >
      <option value="">Filter by Language</option>
      {languages.map(lang => (
        <option key={lang} value={lang.toLowerCase()}>
          {lang}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelector;
