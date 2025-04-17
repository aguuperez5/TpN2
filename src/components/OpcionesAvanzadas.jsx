import React from 'react';
import '../App.css';

function OpcionesAvanzado({
  longitud, setLongitud, minúsculas, setMinúsculas, mayúsculas, setMayúsculas, 
  numeros, setNumeros, especiales, setEspeciales
}) {
  return (
    <section className="opciones-avanzadas">
      <h3>Opciones Avanzadas</h3>
      <div>
        <label>
          Longitud de la contraseña:
          <input
            type="number"
            min={8}
            max={32}
            value={longitud}
            onChange={(e) => setLongitud(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Incluir letras minúsculas:
          <input
            type="checkbox"
            checked={minúsculas}
            onChange={() => setMinúsculas(!minúsculas)}
          />
        </label>
      </div>
      <div>
        <label>
          Incluir letras mayúsculas:
          <input
            type="checkbox"
            checked={mayúsculas}
            onChange={() => setMayúsculas(!mayúsculas)}
          />
        </label>
      </div>
      <div>
        <label>
          Incluir números:
          <input
            type="checkbox"
            checked={numeros}
            onChange={() => setNumeros(!numeros)}
          />
        </label>
      </div>
      <div>
        <label>
          Incluir caracteres especiales:
          <input
            type="checkbox"
            checked={especiales}
            onChange={() => setEspeciales(!especiales)}
          />
        </label>
      </div>
    </section>
  );
}

export default OpcionesAvanzado;