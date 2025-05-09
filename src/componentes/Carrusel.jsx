import React from 'react';
import { Link } from 'react-router-dom';
import Image4 from '../assets/Image4.jpg';
import Image5 from '../assets/Image5.jpg';
import Image6 from '../assets/Image6.jpg';
import Image7 from '../assets/Image7.jpg';
import Imagen8 from '../assets/Imagen8.jpg';
import Imagen9 from '../assets/Imagen9.jpg';
import '../styles/Carrusel.css';

const data = [
  { img: Image4, title: "Dudas existencias de un Dev en Formacion", desc: "Sentirse inutil te hace util", link: "/blog/1" },
  { img: Image5, title: "Mood de la semana", desc: "7 dias de reflexion", link: "/blog/2" },
  { img: Image6, title: "WishList de otras vidas", desc: "Proximo blog: me internan en el Borda", link: "/blog/3" },
  { img: Image7, title: "Cancion de hoy", desc: "La influencia de la musica", link: "/blog/4" },
  { img: Imagen8, title: "Soledad", desc: "Enfrentarse a uno mismo", link: "/blog/5" },
  { img: Imagen9, title: "Tecnologia y ser mujer", desc: "Como trabajar en desarrollo sin morir en el intento", link: "/blog/6" },
];

const Galeria = () => {
  return (
    <div className="galeria-container">
      {data.map((item, index) => (
        <Link to={item.link} key={index} className="card">
          <img src={item.img} alt={item.title} className="card-img" />
          <h3 className="card-title">{item.title}</h3>
          <p className="card-desc">{item.desc}</p>
        </Link>
      ))}
    </div>
  );
};

export default Galeria;
