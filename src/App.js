import React from 'react';
import './App.css';
import Navbar from './componentes/NavBar';
import Image1 from './assets/Image1.jpg';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="div-contenedor">
        <img src={Image1} alt="Foto Córdoba" className="imagen" />
        <h1 className="h1">Bienvenidos a mi Blog!</h1>
        <h3 className="h3">Un poco de mi en cada click</h3>
      </div>
      <div className="photo-info">
        <p>Foto tomada en Córdoba</p>
      </div>
    </div>
  );
}

export default App;
