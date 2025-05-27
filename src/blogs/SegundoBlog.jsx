import '../styles/blog.css';
import NavBar from '../componentes/NavBar';
import '../App.css';
import estilos from '../styles/estilosBlogs';
import { useNavigate } from 'react-router-dom';


import Image1 from '../assets/empanadas.jpg';

const SegundoBlog = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />

      <div className="div-contenedorBis">
        <h1 className="blog-title">Todos los caminos llevan a Argot</h1>

        <p className="blog-text">
          En este nuevo capítulo, me tomé una licencia. Literal. Cerré VSCode, Intellij, abrí la puerta de mi casa y terminé en una entrevista con Héctor Yépez: cocinero, poeta de la masa, y el alma detrás de <strong>Argot</strong>, un refugio de empanadas que más que vender comida, comparte historias.
        </p>

        <div className="blog-image-container">
          <img src={Image1} alt="Empanadas de Héctor" className="blog-image-float" />
          <p className="blog-text">
            Héctor no solo cocina. Abraza con sus empanadas. Dice que “amasar es como querer: si no lo hacés con las manos, no cuenta”. Y esa frase quedó dando vueltas en mi cabeza todo el día (como cuando tengo bugs y no los puedo resolver). Le pregunté de dónde viene tanta pasión, y la respuesta fue simple: amor. Tuve el agrado de tener una charla con él.
          </p>
        </div>

        <h2 className="blog-subtitle">Entrevista: amor entre tapas y relleno</h2>

        <p className="blog-text"><strong>— ¿Cómo nace Argot?</strong></p>
        <p className="blog-text">— De un desamor. Después de una ruptura fea, me refugié en la cocina. Empecé a hacer empanadas como terapia, como excusa para invitar a gente a mi casa. Y sin darme cuenta, estaba armando una red de afectos, de charlas compartidas. Argot nació ahí, en ese fuego lento.</p>

        <p className="blog-text"><strong>— ¿Por qué el nombre?</strong></p>
        <p className="blog-text">— Porque todos tenemos nuestro idioma secreto, ¿no? Y cuando algo te hace bien, querés que sea parte de tu argot. Las empanadas son eso: una forma íntima de decir “te quiero”.</p>

        <p className="blog-text"><strong>— ¿Cuál es el ingrediente que no puede faltar?</strong></p>
        <p className="blog-text">— El cariño. Parece cursi, pero posta. Si no estás presente cuando cocinás, la empanada lo delata. Te lo juro. Sale seca, o triste.</p>

        <p className="blog-text"><strong>— ¿Qué aprendiste de este camino?</strong></p>
        <p className="blog-text">— Que amar también es darle forma a algo con tus manos. Una relación, un proyecto, una empanada. Y que todos, de alguna forma, estamos buscando a dónde volver. El amor no siempre está en una persona. A veces está en una receta.</p>

        <h2 className="blog-subtitle">Reflexión final</h2>
        <p className="blog-text">
          “Todos los caminos llevan a Argot” no es solo una frase. Es una certeza: cuando algo está hecho con sentido, se convierte en hogar. Este blog se trata de diseño web, sí. Pero también de diseño de vida. Y hoy aprendí que, incluso en medio del código, hay lugar para el amor… y para una buena empanada.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <button
            style={estilos.botonPrimario}
            onClick={() => navigate('/')}
          >
            ← Volver al inicio
          </button>
        </div>

        <footer className="blog-footer">
          Publicado por @abrilmaci2003 • 23/05/2021 20:55hs
        </footer>
      </div>
    </>
  );
};

export default SegundoBlog;
