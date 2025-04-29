import React from 'react';
import Image4 from '../assets/Image4.jpg';
import Image5 from '../assets/Image5.jpg';
import Image6 from '../assets/Image6.jpg';
import Image7 from '../assets/Image7.jpg';
import Imagen8 from '../assets/Imagen8.jpg';
import Imagen9 from '../assets/Imagen9.jpg';
import '../styles/Carrusel.css';

const data = [
  { img: Image4, title: "Post 1", desc: "Descripción del post 1" },
  { img: Image5, title: "Post 2", desc: "Descripción del post 2" },
  { img: Image6, title: "Post 3", desc: "Descripción del post 3" },
  { img: Image7, title: "Post 4", desc: "Descripción del post 4" },
  { img: Imagen8, title: "Post 5", desc: "Descripción del post 5" },
  { img: Imagen9, title: "Post 6", desc: "Descripción del post 6" },
];

const Galeria = () => {
  return (
    <div className="galeria-container">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt={item.title} className="card-img" />
          <h3 className="card-title">{item.title}</h3>
          <p className="card-desc">{item.desc}</p>
          {/* <a href="#">Leer más</a> <-- Podés agregar esto después */}
        </div>
      ))}
    </div>
  );
};

export default Galeria;
