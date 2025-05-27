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
          Nada de deploys. Solo el viento, los árboles y un mate compartido con algún zorro curioso. Dormir en una cabaña sin WiFi y escuchar historias del bosque. Actualizaciones: solo las del clima.
        </p>

        <h2 className="blog-subtitle">2. Curadora de un museo antiguo en Italia</h2>
        <p className="blog-text">
          En vez de GitHub, una libreta de campo con anotaciones a mano. En vez de dark mode, vitrales del siglo XIII. Y mi mayor bug sería encontrar una obra sin firma.
        </p>

        <h2 className="blog-subtitle">3. Ceramista en un pueblo hippie</h2>
        <p className="blog-text">
          Sin deadlines, solo arcilla, fuego y formas imperfectas. Reírse de los algoritmos y abrazar el caos del barro. Vender tazas con frases incoherentes y mucho amor.
        </p>

        <h2 className="blog-subtitle">4. Tarotista nómade en ferias de Latinoamérica</h2>
        <p className="blog-text">
          Cambiaría las funciones por intuición. Haría deploys de energía en cada lectura, debugueando el alma de la gente con cartas y miradas. ¿La nube? Sí, pero de incienso.
        </p>

        <p className="blog-text">
          Y sin embargo, acá estoy. Codeando este blog. Tal vez porque dentro mío coexisten todas esas versiones de mí... en un div bien cerrado.
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
          Escribí este blog para recordarme que los sueños no compilan solos. A veces hay que salirse del sistema. O al menos, imaginarlo.
        </div>
      </div>
    </>
  );
};

export default TercerBlog;
