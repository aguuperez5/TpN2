import './App.css';
import React, { useState } from 'react';
import InputContrasena from './components/InputContrasena';
import BotonMostrar from './components/BotonMostrar';
import NivelContrasena from './components/NivelContrasena';
import BotonCopiar from './components/BotonCopiar';
import GenerarContrasena from './components/GenerarContrasena';
import Titulo from './components/Titulo';
  
function App() {
  const [password, setPassword] = useState('');
  const [mostrar, setMostrar] = useState(false);

  const toggleMostrar = () => {
    setMostrar((prev) => !prev);
  };

    return (
    <div className="App">
      <Titulo/>
      <div className="input-container">
        <InputContrasena valor={password} mostrar={mostrar} onCambio={setPassword}/>
        <BotonMostrar mostrar={mostrar} onToggle={toggleMostrar} />
        <BotonCopiar password={password} />
      </div>
      <NivelContrasena password={password} />
        <div className="generador-container">
        <GenerarContrasena setPassword={setPassword} />
      </div>
    </div>
  );
}
export default App;
