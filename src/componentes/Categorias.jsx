import React from 'react';
import '../styles/Categorias.css';
import Imagen12 from '../assets/Imagen12.jpg';
import Imagen11 from '../assets/Imagen11.jpg';
import Imagen10 from '../assets/Imagen10.jpg';

const Categorias = () => {
  const categorias = [
    { img: Imagen12, title: "VIAJES", desc: "Descubriendo lugares, culturas y como se aplica la tecnologia "},
    { img: Imagen11, title: "MOMENTOS", desc: "Momentos únicos donde se cruzan viajes, arte y tecnología" },
    { img: Imagen10, title: "EXPERIENCIAS", desc: "Descubriendo nuevos mundos a través de la innovación y arte" },
  ];

  return (
    <div className="categorias-container">
      {categorias.map((cat, index) => (
        <div
          className="categoria-item"
          key={index}
          style={{ backgroundImage: `url(${cat.img})` }}
        >
          <div className="categoria-info">
            <h2>{cat.title}</h2>
            <p>{cat.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categorias;
