import '../styles/blog.css';
import NavBar from '../componentes/NavBar';
import '../App.css';

import estilos from '../styles/estilosBlogs';

import { useNavigate } from 'react-router-dom';

const CuartoBlog = () => {

  const navigate = useNavigate();
  return (
    <>
      <NavBar />


      <div className="div-contenedorBis">

        <h2 className="blog-subtitle">Canción de hoy: Planeando el tiempo</h2>

        <p className="blog-text">
          Esta semana no tengo ganas de contar anecdotas o algo extenso para pensar. Hoy les dejo esta cancion que no me puedo sacar de la cabeza</p>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MQPkwM6JGKM"
            title="Planeando el tiempo - Elsa y Elmar"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>



        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <button
            style={estilos.botonPrimario}
            onClick={() => navigate('/')}
          >
            ← Volver al inicio
          </button>
        </div>
      </div>
    </>
  );
};

export default CuartoBlog;
