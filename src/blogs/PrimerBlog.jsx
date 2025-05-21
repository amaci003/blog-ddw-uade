import '../styles/Blogs.css';
import NavBar from '../componentes/NavBar';
import Image1 from '../assets/Image1.jpg';
import '../App.css';


const PrimerBlog = () => {
    return (
        <>
          <NavBar/>
        

      <div className="div-contenedor">
        <img src={Image1} alt="Foto Cordoba" className="imagen" />
        <h1 className="h1">Bienvenidos a mi Blog!</h1>
        <h3 className="h3">Un poco de mi en cada click</h3>
        <div className="div-franja">
          <h3 className="h3-2">Fusionando tecnología, arte y cultura global</h3>
        </div>
      </div>

      </>
      );
  };
  
  export default PrimerBlog;
  