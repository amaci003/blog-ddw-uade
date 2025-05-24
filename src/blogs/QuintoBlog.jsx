import '../styles/blog.css';
import NavBar from '../componentes/NavBar';
import '../App.css';

const QuintoBlog = () => {
  return (
    <>

      <div style={{ backgroundColor: '#a47174	', minHeight: '100vh' }}>
        <NavBar />

        <div className="div-contenedorBis">
          <h1 className="blog-title">Estar sola (y no morir en el intento)</h1>

          <p className="blog-text">
            Me separé hace unos meses de mi novio. Estuvimos más de tres años juntos, a distancia. Sí, ese tipo de relación que parece de película indie: videollamadas eternas, viajes con cuenta regresiva y una conexión que tratás de sostener con emojis, mails y fe. Pero se terminó. Y lo que más miedo me daba no era la ruptura en sí... era la soledad.
          </p>

          <p className="blog-text">
            Nadie te enseña a estar sola. Te enseñan a vincularte, a encajar, a dar todo de vos. Pero no a sostener el silencio sin que duela. Y sin embargo, estar sola también puede ser un hogar.
          </p>

          <h2 className="blog-subtitle">🌱 Pequeñas cosas que me ayudan</h2>

          <ul className="blog-text">
            <li><strong>Escribir aunque no tenga sentido</strong>. A veces solo necesito volcar todo en un bloc de notas, aunque después lo borre.</li>
            <li><strong>Caminar sin auriculares</strong>. Escuchar mis pasos, los árboles, la ciudad... me hace sentir parte de algo, aunque esté sola.</li>
            <li><strong>Dejar de romantizar el pasado</strong>. Una relación a distancia también duele, incluso cuando funciona. No todo era amor, también había frustración, ansiedad y muchas dudas.</li>
            <li><strong>Meditar 5 minutos (literal)</strong>. Si no sabés por dónde empezar, te recomiendo <a href="https://www.youtube.com/playlist?list=PLS2RRDvDmjhQ4r9vI3ydlDF9YcpdXN38G" target="_blank" rel="noopener noreferrer">estas guías breves de meditación</a>.</li>
            <li><strong>No hablarle “por costumbre”</strong>. Cada vez que estoy a punto de escribirle, abro esta página: <a href="https://donttexthim.com/" target="_blank" rel="noopener noreferrer">Don't Text Him</a> — es cursi, pero me rescata.</li>
          </ul>

          <h2 className="blog-subtitle">🎮 Juegos para cuando la mente no para</h2>
          <p className="blog-text">
            A veces el silencio se vuelve ruido. Y ahí es donde un jueguito random salva. Te dejo algunos que uso como “rescate rápido”:
          </p>
          <ul className="blog-text">
            <li><a href="https://neal.fun/deep-sea/" target="_blank" rel="noopener noreferrer">Deep Sea</a> – bajás al fondo del océano. Literal.</li>
            <li><a href="https://theuselessweb.com/" target="_blank" rel="noopener noreferrer">The Useless Web</a> – pura distracción, puro caos.</li>
            <li><a href="https://www.nytimes.com/crosswords" target="_blank" rel="noopener noreferrer">NY Times Mini Crossword</a> – para sentirte intelectual mientras desayunás sola.</li>
          </ul>

          <h2 className="blog-subtitle">💬 Y si duele, que duela</h2>
          <p className="blog-text">
            No tengo una fórmula. Solo sé que la soledad también puede ser una forma de amor propio. No hay que llenarla rápido. Hay que habitarla. A veces está llena de silencio, pero a veces también se siente como libertad.
          </p>

          <div className="blog-footer">
            Si estás pasando por algo parecido, te abrazo desde este lado de la pantalla. No estás tan sola como pensás.
          </div>
        </div>
      </div>

    </>
  );
};

export default QuintoBlog;
