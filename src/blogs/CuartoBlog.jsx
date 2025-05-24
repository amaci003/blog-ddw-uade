import '../styles/blog.css';
import NavBar from '../componentes/NavBar';
import '../App.css';

const CuartoBlog = () => {
  return (
    <>
      <NavBar />


      <div className="div-contenedorBis">

        <h2 className="blog-subtitle">Canción de hoy: Planeando el tiempo</h2>

        <p className="blog-text">
          Hay días donde todo parece flotar en el aire. Esta canción acompaña esa sensación como si fuera banda sonora de lo invisible. Dale play y seguí leyendo.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
          <iframe
            width="300"
            height="170"
            src="https://www.youtube.com/embed/MQPkwM6JGKM"
            title="Planeando el tiempo - Elsa y Elmar"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default CuartoBlog;
