import '../styles/blog.css';
import NavBar from '../componentes/NavBar';
import viajera from '../assets/Image4.jpg';


import estilos from '../styles/estilosBlogs';

import { useNavigate } from 'react-router-dom';

const TercerBlog = () => {

  const navigate = useNavigate();
  return (
    <>
      <NavBar />

      <div className="div-contenedorBis">
        <h1 className="blog-title">WishList de otras vidas</h1>

        <p className="blog-text">
          Si no supiera lo que es un endpoint, si jamás hubiera peleado con un bug a las 3am, si no viviera entre commits y ramas... quizás estaría en otro lado. Literalmente.
        </p>

        <img src={viajera} alt="Mochila viajera" style={{ width: '100%', maxWidth: '400px', height: '450px', borderRadius: '12px', boxShadow: '0 0 8px rgba(0,0,0,0.15)', margin: '20px auto', display: 'block' }} />

        <h2 className="blog-subtitle">1. Guardaparques en la Patagonia</h2>
        <p className="blog-text">
          Nada de deploys o bugs, estaria todo el dia respirando y viendo naturaleza</p>

        <h2 className="blog-subtitle">2. Trabajadora de un museo antiguo en Italia</h2>
        <p className="blog-text">
          En vez de GitHub, podria haber nacido en Italia y estaria dando clases de historia por ahi</p>

        <h2 className="blog-subtitle">3. Profe de ceramica en Chapadmalal</h2>
        <p className="blog-text">
          Sin deadlines, solo arcilla, fuego y formas imperfectas, cada tanto algun dev nomade digital se acercaria a vivir la experiencia y le diria q no entiendo nada y que nunca entraria en algo asi</p>

        <h2 className="blog-subtitle">4. Tarotista en ferias </h2>
        <p className="blog-text">
          Cambiaría las funciones por intuición. No niego ni afirmo que en mi vida actual SI tiro las cartas... pero podria vivir de esto?
        </p>

        <p className="blog-text">
          Pero bueno... aca estoy, actualizando mi blog de tecnologia, si eventualmente vuelvo a nacer o me echan drasticamente ya saben donde buscarme (En la Patagonia tirando las cartas en ferias dando clases de ceramica a nomades digitales)
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <button
            style={estilos.botonPrimario}
            onClick={() => navigate('/')}
          >
            ← Volver al inicio
          </button>
        </div>

        <div className="blog-footer">
          Escribí este blog para recordarme que los sueños no compilan solos. A veces hay que salirse del sistema. O algo asi.
        </div>
      </div>
    </>
  );
};

export default TercerBlog;
