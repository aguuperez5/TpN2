import { useState } from 'react';

function BotonCopiar({ password }) {
  const [mensaje, setMensaje] = useState('');

  const copiarPortapapeles = () => {
    if (password && password.trim() !== '') {
      navigator.clipboard.writeText(password)
        .then(() => {
          setMensaje("Se copio al portapapeles.");
          setTimeout(() => setMensaje(''), 3000);
        })
        .catch(err => {
          console.error("Error al copiar la contraseña: ", err);
          setMensaje("Hubo un error al copiar la contraseña.");
          setTimeout(() => setMensaje(''), 3000);
        });
    } else {
      setMensaje("No se puede copiar porque esta vacio.");
      setTimeout(() => setMensaje(''), 3000);
    }
  };

  return (
    <div>
      <button onClick={copiarPortapapeles}>Copiar Contraseña</button>
      <span>{mensaje}</span>
    </div>
  );
}
export default BotonCopiar;