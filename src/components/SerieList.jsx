import React from 'react';

const SerieList = ({ series, handleSerieClick }) => {
  return (
    <div>
      <h2>Series</h2>
      <ul>
        {series.map((serie, index) => (
          <li key={index} onClick={() => handleSerieClick(serie)}>
            {serie.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SerieList;
