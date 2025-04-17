import React from 'react';

function evaluarSeguridad(password) {
  const tieneMinusculas = /[a-z]/.test(password);
  const tieneMayusculas = /[A-Z]/.test(password);
  const tieneNumeros = /[0-9]/.test(password);
  const tieneSimbolos = /[^a-zA-Z0-9]/.test(password);
  const longitud = password.length;

  if (longitud < 6) return 'Poco segura';

  const puntos = 
    (tieneMinusculas ? 1 : 0) +
    (tieneMayusculas ? 1 : 0) +
    (tieneNumeros ? 1 : 0) +
    (tieneSimbolos ? 1 : 0);
  
  if (puntos >= 4 && longitud >= 8) return 'Muy segura';
  if (puntos >= 2 && longitud > 6) return 'Segura';
  return 'Poco segura';
}

function NivelContraseña({ password }) {
  const seguridad = evaluarSeguridad(password);
  const colores = {
    'Poco segura': 'red',
    'Segura': 'yellow',
    'Muy segura': 'green',
  };
  return (
    <p style={{ color: colores[seguridad], fontWeight: 'bold' }}>
      Seguridad: {seguridad}
    </p>
  );
}

export default NivelContraseña;

  