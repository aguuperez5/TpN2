import React from 'react';

function InputContrasena({ valor, mostrar, onCambio}) {
  return (
    <input
      type={mostrar ? 'text' : 'password'}
      value={valor}
      onChange={(e) => onCambio(e.target.value)}
      />
  );
}

export default InputContrasena;
