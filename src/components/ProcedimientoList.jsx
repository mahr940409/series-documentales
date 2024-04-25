import React from 'react';

const ProcedimientoList = ({ procedimientos }) => {
  return (
    <div>
      {procedimientos.map(procedimiento => (
        <div key={procedimiento}>{procedimiento}</div>
      ))}
    </div>
  );
};

export default ProcedimientoList;
