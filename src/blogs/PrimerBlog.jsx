
import NavBar from '../componentes/NavBar';
import estilos from '../styles/estilosBlogs';
import perro from '../assets/perro.png';
import { useNavigate } from 'react-router-dom';

const PrimerBlog = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div style={estilos.contenedor}>
      
        <h1 style={estilos.h1}>Dudas existenciales de una dev en formación</h1>
        <h3 style={{ ...estilos.h3, fontStyle: 'italic' }}>O en transformación… quién sabe</h3>

        <p style={{
          color: '#aaa',
          fontSize: '0.9rem',
          marginTop: '-10px',
          marginBottom: '30px',
        }}>
          Publicado por @abrilmaci2003 • 21/05/2021 20:00hs
        </p>

        <div style={{ textAlign: 'left' }}>
          <img
            src={perro}
            alt="Desarrolladora pensativa"
            style={{
              width: '180px',
              borderRadius: '12px',
              float: 'left',
              marginRight: '20px',
              marginBottom: '10px',
            }}
          />

          <p style={estilos.h3}>
            ¿Estoy aprendiendo React o estoy aprendiendo a respirar entre errores? <br />
            ¿Esto es JavaScript o un castigo kármico por haber dicho “yo nunca voy a programar”?
          </p>

          <p style={estilos.h3}>
            Últimamente me la paso googleando cosas tipo:<br />
            <em>“cómo ser dev sin llorar”</em>,<br />
            <em>“error raro que aparece y después desaparece solo”</em>,<br />
            <em>“cómo saber si soy una estafa laboralmente funcional”</em>.
          </p>

          <blockquote style={{
            fontStyle: 'italic',
            color: '#5b393f',
            borderLeft: '4px solid #5b393f',
            paddingLeft: '16px',
            margin: '30px 0',
          }}>
            “Todos dicen que al principio es así. Pero nadie te dice que el principio puede durar tres años. O una vida.”
          </blockquote>

          <p style={estilos.h3}>
            Y mientras tanto… estoy formándome. O deformándome, según el día.
          </p>

          <p style={estilos.h3}>
            ¿Quiero crecer en tech? Sí.<br />
            ¿También quiero desaparecer en una playa sin Wi-Fi por dos meses? Absolutamente.<br />
            ¿Es compatible? Estoy intentando descubrirlo.
          </p>

          <p style={estilos.h3}>
            Si llegaste hasta acá, probablemente estés igual que yo.<br />
            Así que nada, bienvenida/o a este blog y a este caos hermoso que es intentar ser dev sin
            perder la cabeza (o al menos, no del todo).
          </p>
        </div>

        <div style={{
          clear: 'both',
          marginTop: '40px',
          textAlign: 'center'
        }}>
          <button
            style={estilos.botonPrimario}
            onClick={() => navigate('/')}
          >
            ← Volver al inicio
          </button>
        </div>

        <footer style={{
          marginTop: '60px',
          paddingTop: '30px',
          borderTop: '1px solid #ccc',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#777',
        }}>
          Gracias por leer. Nos vemos en el próximo post 
        </footer>
      </div>
    </>
  );
};

export default PrimerBlog;
