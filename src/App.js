import './App.css';
import Galeria from './componentes/NavBar';
import Carrusel from './componentes/Carrusel'; 
import Image1 from './assets/Image1.jpg';
import Image3 from './assets/Image3.jpg';
import Categorias from './componentes/Categorias';

import { Box } from '@mui/material';

import Suscribite from './pages/Suscribite';

import PrimerBlog from './blogs/PrimerBlog';
import SegundoBlog from './blogs/SegundoBlog';
import TercerBlog from './blogs/TercerBlog';
import CuartoBlog from './blogs/CuartoBlog';
import QuintoBlog from './blogs/QuintoBlog';
import SextoBlog from './blogs/SextoBlog';

/* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; */
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './componentes/ScrollToTop';

function Home() {
  return (
    <>
      <Galeria />

      <Box className="div-contenedor">
        <img src={Image1} alt="Foto Cordoba" className="imagen" />
        <h1 className="h1">Bienvenidos a mi Blog!</h1>
        <h3 className="h3">Un poco de mi en cada click</h3>
        <div className="div-franja">
          <h3 className="h3-2">Fusionando tecnología, arte y cultura global</h3>
        </div>
      </Box>

      <div className="div-segundo-contenedor">
        <img src={Image3} alt="foto cordoba 2" className="img2" />
        <div className="titulo-al-lado">
          <h3 className="h3-fuera">UN POCO DE</h3>
          <h1 className="titulo-secundario">Quien soy!</h1>
          <p className="subtitulo-secundario">
            Hola! Soy Abril y en este blog hablo sobre el equilibrio <br />
            entre arte, diseño y tecnología.<br />
            Acá vas a encontrar cómo estas <br />
            tres pasiones se fusionan para <br />
            darle forma a la creatividad.
          </p>
        </div>
      </div>

      <h2 className="titulo-seccion">Bienvenido</h2>
      <Categorias />
      <h2 className="titulo-seccion-grueso"> - Link a posteos -</h2>
      <Carrusel />
    </>
  );
}

function App() {
  return (
     <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suscribite" element={<Suscribite />} />
        <Route path="/blog/1" element={<PrimerBlog />} />
        <Route path="/blog/2" element={<SegundoBlog />} />
        <Route path="/blog/3" element={<TercerBlog />} />
        <Route path="/blog/4" element={<CuartoBlog />} />
        <Route path="/blog/5" element={<QuintoBlog />} />
        <Route path="/blog/6" element={<SextoBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
