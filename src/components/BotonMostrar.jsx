import React from 'react';
import '../App.css';

function BotonMostrar({ texto, mostrar, onToggle }) {
  return (
    <button onClick={onToggle} className="boton-mostrar">
      {mostrar ? 'Ocultar' : 'Mostrar'}{texto}
    </button>
  );
}

export default BotonMostrar;