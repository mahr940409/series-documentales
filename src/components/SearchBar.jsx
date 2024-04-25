// SearchBar.js
import React from 'react';

const SearchBar = ({ handleSearch, handleButtonClick }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input type="text" placeholder="Buscar serie..." onKeyPress={handleKeyPress} />
      <button onClick={handleButtonClick}>Buscar</button>
    </div>
  );
};

export default SearchBar;
