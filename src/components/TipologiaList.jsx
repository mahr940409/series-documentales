import React from 'react';

const TipologiaList = ({ tipologias, handleTipologiaClick }) => {
  return (
    <div>
      {tipologias.map(tipologia => (
        <div key={tipologia} onClick={() => handleTipologiaClick(tipologia)}>{tipologia}</div>
      ))}
    </div>
  );
};

export default TipologiaList;
