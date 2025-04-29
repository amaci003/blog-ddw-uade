import React, { useState } from 'react';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import Image4 from '../assets/Image4.jpg';
import Image5 from '../assets/Image5.jpg';
import Image6 from '../assets/Image6.jpg';
import Image7 from '../assets/Image7.jpg';
import Imagen8 from '../assets/Imagen8.jpg';
import Imagen9 from '../assets/Imagen9.jpg';
import Imagen10 from '../assets/Imagen10.jpg';
import Imagen11 from '../assets/Imagen11.jpg';
import Imagen12 from '../assets/Imagen12.jpg';
import '../styles/Carrusel.css';

const Carrusel = () => {
  const images = [Image4, Image5, Image6, Image7, Imagen8, Imagen9, Imagen10, Imagen11, Imagen12];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 6);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 6) {
      setCurrentIndex(currentIndex + 6); 
    }
  };

  return (
    <div className="carrusel-container">
      <button onClick={handlePrev} className="arrow-button">
        <ArrowBackIosNew />
      </button>

      <div className="imagenes-carrusel">
        {images.slice(currentIndex, currentIndex + 6).map((img, index) => (
          <img key={index} src={img} alt={`Imagen ${index}`} className="imagen-carrusel" />
        ))}
      </div>

      <button onClick={handleNext} className="arrow-button">
        <ArrowForwardIos />
      </button>
    </div>
  );
};

export default Carrusel;
