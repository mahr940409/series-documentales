// SubserieList.jsx
import React from 'react';

const SubserieList = ({ subseries, handleSubserieClick }) => {
  return (
    <div>
      <h2>Subseries</h2>
      <table>
        <thead>
          <tr>
            <th>Tipologías Documentales</th>
            <th>Procedimientos</th>
          </tr>
        </thead>
        <tbody>
          {subseries.map((subserie, index) => (
            <tr key={index} onClick={() => handleSubserieClick(subserie)}>
              <td>{subserie.tipologias.join(', ')}</td>
              <td>{subserie.procedimientos.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubserieList;
