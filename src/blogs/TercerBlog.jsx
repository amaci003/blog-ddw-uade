import '../styles/blog.css';
import NavBar from '../componentes/NavBar';
import Image1 from '../assets/Image1.jpg';
import '../App.css';

const TercerBlog = () => {
  return (
    <>
      <NavBar />

      <div className="div-contenedor">
        <img src={Image1} alt="Foto Cordoba" className="imagen" />
        <h1 className="h1">Blog 3: Explorando el diseño</h1>
        <h3 className="h3">Más allá de lo visual, diseño con intención</h3>
        <div className="div-franja">
          <h3 className="h3-2">Reflexiones, inspiraciones y procesos creativos</h3>
        </div>
      </div>
    </>
  );
};

export default TercerBlog;
