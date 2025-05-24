import React, { useState } from 'react';
import '../styles/Suscribite.css';
import NavBar from '../componentes/NavBar'; 
import Footer from '../componentes/Footer';
import { Snackbar, Alert } from '@mui/material';

const Suscribite = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    numero: '',
    dni: '',
    deseaNovedades: false,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', form);
    setOpenSnackbar(true); 
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); 
  };

  return (
    <>
      <NavBar />
      <div className="suscribite-container">
        <h2>Suscribite</h2>
        <form onSubmit={handleSubmit} className="suscribite-form">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={form.apellido}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="numero"
            placeholder="Número de teléfono"
            value={form.numero}
            onChange={handleChange}
          />
          <input
            type="text"
            name="dni"
            placeholder="DNI"
            value={form.dni}
            onChange={handleChange}
            required
          />
          <label className="checkbox-container">
            <input
              type="checkbox"
              name="deseaNovedades"
              checked={form.deseaNovedades}
              onChange={handleChange}
            />
            ¿Deseás recibir novedades todos los viernes?
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
      
      <Footer />

     
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          
          Gracias por suscribirte
        </Alert>
      </Snackbar>
    </>
  );
};

export default Suscribite;
