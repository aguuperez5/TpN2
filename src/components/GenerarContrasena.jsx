import React, { useState } from 'react';
import OpcionesAvanzado from './OpcionesAvanzadas';
import BotonMostrar from './BotonMostrar';
import '../App.css';

function GenerarContrasena() {
  const [password, setPassword] = useState('');
  const [longitud, setLongitud] = useState(8); 
  const [minúsculas, setMinúsculas] = useState(true);
  const [mayúsculas, setMayúsculas] = useState(true);
  const [numeros, setNumeros] = useState(true);
  const [especiales, setEspeciales] = useState(true);
  const [mostrar, setMostrar] = useState(false);

  const generarContrasenas = () => {
    let caracteres = '';
    if (minúsculas) caracteres += 'abcdefghijklmnopqrstuvwxyz';
    if (mayúsculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numeros) caracteres += '0123456789';
    if (especiales) caracteres += '!@#$%^&*()_-+=<>?';

    if (caracteres === '') {
      setPassword('Selecione correctamente');
      return;
    }

    let nuevaContraseña = '';
    for (let i = 0; i < longitud; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      nuevaContraseña += caracteres[randomIndex];
    }

    setPassword(nuevaContraseña);
  };

  return (
    <div className='generador-container'>
      <BotonMostrar
        mostrar={mostrar}
        texto=" opciones avanzadas"
        onToggle={() => setMostrar(!mostrar)} 
        />
      {mostrar && (
        <OpcionesAvanzado
          longitud={longitud}
          setLongitud={setLongitud}
          minúsculas={minúsculas}
          setMinúsculas={setMinúsculas}
          mayúsculas={mayúsculas}
          setMayúsculas={setMayúsculas}
          numeros={numeros}
          setNumeros={setNumeros}
          especiales={especiales}
          setEspeciales={setEspeciales}
        />
    )}
      <div className='gen'>
        <button onClick={generarContrasenas}>Generar Contraseña</button>
        <p className='gen'><strong>Contraseña generada:</strong> {password}</p>
      </div>
    </div>
  );
}

export default GenerarContrasena;