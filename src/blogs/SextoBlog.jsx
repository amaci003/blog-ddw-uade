import '../styles/blog.css';
import NavBar from '../componentes/NavBar';
import '../App.css';

import estilos from '../styles/estilosBlogs';

import { useNavigate } from 'react-router-dom';

const SextoBlog = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />

      <div className="div-contenedorBis">
        <h1 className="blog-title">Ser mujer y tecnología</h1>

        <p className="blog-text">
          Desde que empecé en el mundo tech, me encontré con muchos desafíos… y muchas sorpresas. Formo parte de un equipo en el que soy la única mujer y también la más joven. No lo digo como queja, sino como dato curioso que, con el tiempo, se volvio mi reflexion diaria, me di cuenta que me intimidaba hablar en reuniones o chats de trabajo por la vision que puedan tener de mi.
        </p>

        <p className="blog-text">
          A veces, esto implica aprender a confiar en mi voz en espacios donde predominan otras perspectivas. Otras veces, se trata simplemente de animarme a preguntar, proponer o equivocarme con naturalidad, entendiendo que crecer también es eso.
        </p>

        <h2 className="blog-subtitle">Hacerse lugar sin dejar de ser una misma</h2>

        <p className="blog-text">
          No siempre es fácil, pero tampoco imposible. Cada día, descubro que hay más mujeres ingresando en tecnología, compartiendo conocimiento, impulsando cambios y rompiendo con la idea de que este es un mundo exclusivamente masculino.
        </p>

        <p className="blog-text">
          Personalmente, me inspira mucho ver cómo se están abriendo caminos nuevos, donde hay espacio para la diversidad de miradas. Me gusta pensar que no se trata solo de integrarse, sino también de aportar algo distinto, algo propio.
        </p>

        <h2 className="blog-subtitle">Espacios que me inspiran</h2>

        <ul className="blog-text">
          <li><a href="https://chicasentecnologia.org/" target="_blank" rel="noopener noreferrer">Chicas en Tecnología</a> – una comunidad donde muchas encuentran apoyo y referentes.</li>
          <li><a href="https://technolatinas.org/" target="_blank" rel="noopener noreferrer">TechnoLatinas</a> – mujeres de toda la región aprendiendo y creciendo juntas.</li>
          <li><strong>Las charlas con mis compañerxs</strong> – muchas veces, la confianza se construye compartiendo dudas, ideas y desafíos de forma auténtica.</li>
        </ul>

        <p className="blog-text">
          Este blog no intenta ser una bandera, sino una pausa para reconocer que sí, es posible estar en tecnología siendo mujer, siendo joven, siendo nueva. Y que no hay una sola forma de hacerlo bien.
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
          A quienes estén comenzando: tengan paciencia con ustedes mismas. Hay lugar para todas las formas de pensar, crear y construir desde lo digital.
        </div>
      </div>
    </>
  );
};

export default SextoBlog;
