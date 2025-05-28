import '../styles/blog.css';
import NavBar from '../componentes/NavBar';
import '../App.css';

import estilos from '../styles/estilosBlogs';

import { useNavigate } from 'react-router-dom';

const QuintoBlog = () => {
  const navigate = useNavigate();
  return (
    <>

      <div style={{ backgroundColor: '#a47174	', minHeight: '100vh' }}>
        <NavBar />

        <div className="div-contenedorBis">
          <h1 className="blog-title">Estar sola (y no morir en el intento)</h1>

          <p className="blog-text">
            Me separé hace unos meses de mi novio. Estuvimos más de tres años juntos, a distancia. Ese tipo de relación que parece de película indie y cae en el cliche: videollamadas eternas, viajes con cuenta regresiva y una conexión que tratás de sostener con emojis, videollamadas y fe. Pero se terminó. Y lo que más miedo me daba no era la ruptura en sí... era yo.
          </p>

          <p className="blog-text">
            Nadie te enseña a estar sola. Te enseñan a vincularte, a encajar, a dar todo de vos. Pero no a sostener el silencio sin que duela. Y sin embargo, estar sola también puede ser un hogar.
          </p>

          <h2 className="blog-subtitle">Cosas que me ayudan</h2>

          <ul className="blog-text">
            <li><strong>Escribir aunque no tenga sentido</strong>. A veces solo necesito volcar todo en un bloc de notas, aunque después lo borre o me de cringe reconocer.</li>
            <li><strong>Caminar sin auriculares</strong>. Escuchar mis pasos, la ciudad y lo que pasa al rededro te conecta con lo que sos. Especialmente si trabajas remoto y no soportas las 4 paredes y la pantalla.</li>
            <li><strong>Dejar de romantizar el pasado</strong>. Una relación a distancia también duele, incluso cuando funciona. No todo era amor, también había frustración, ansiedad y muchas dudas. (jaja) todo para no decir que ya no nos soportabamos! Solo recordas cuando se reian y se iban de vacaciones, no los proyectos y peleas interminables (SIGO DOLIDA, ES MI BLOG. ESCUCHAMOS PERO NO JUZGAMOS, gracias)</li>
            <li><strong>Meditar 5 minutos (ahre)</strong> Medio random pero funciona, a veces disocio un poco pero te enfoca y regula, te recomiendo a: <a href="https://www.youtube.com/playlist?list=PLS2RRDvDmjhQ4r9vI3ydlDF9YcpdXN38G" target="_blank" rel="noopener noreferrer">estas guías breves de meditación</a>.</li>
            <li><strong>No hablarle “por costumbre”</strong>. Cada vez que estoy a punto de escribirle, abro esta página: (Igual le escribo, peor, a veces lo llamo jaja ESCUCHAMOS blablabla) <a href="https://donttexthim.com/" target="_blank" rel="noopener noreferrer">Don't Text Him</a> — es cursi, pero me rescata. (nuevamente: ahre)</li>
          </ul>

          <h2 className="blog-subtitle">Juegos para cuando la mente no para</h2>
          <p className="blog-text">
            A veces el silencio se vuelve ruido. Y ahí es donde a algunas personas les sirve jugar, no es mi caso pero aca reconocemos todas las posibilidades
          </p>
          <ul className="blog-text">
            <li><a href="https://neal.fun/deep-sea/" target="_blank" rel="noopener noreferrer">Deep Sea</a> – bajás al fondo del océano. Literal.</li>
            <li><a href="https://theuselessweb.com/" target="_blank" rel="noopener noreferrer">The Useless Web</a> – pura distracción, puro caos.</li>
            <li><a href="https://www.nytimes.com/crosswords" target="_blank" rel="noopener noreferrer">NY Times Mini Crossword</a> – para sentirte intelectual mientras desayunás sola.</li>
          </ul>

          <h2 className="blog-subtitle">💬 Y si duele, que duela</h2>
          <p className="blog-text">
            Hablando en serio,
            no tengo una fórmula. Solo sé que la soledad también puede ser una forma de amor propio. No hay que llenarla rápido. Hay que habitarla. A veces está llena de silencio, pero a veces también se siente como libertad.
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
            Si estás pasando por algo parecido, te abrazo desde este lado de la pantalla. No estás tan sola como pensás.
          </div>
        </div>
      </div>

    </>
  );
};

export default QuintoBlog;
