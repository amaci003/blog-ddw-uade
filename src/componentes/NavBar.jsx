import React from 'react';
import '../styles/NavBar.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       <AppBar position="sticky" sx={{ backgroundColor: '#5b393f' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Abril Maci
        </Typography>
        <Button component={Link} to="/" sx={styles.button}>
          Home
        </Button>
        <Button component={Link} to="/suscribite" sx={styles.button}>
          Suscribite
        </Button>
      </Toolbar>
    </AppBar>
    );
  };
  
  const styles = {
    button: {
      color: 'white',
      '&:hover': {
        color: '#31282a', 
        cursor: 'pointer', 
        variant:'text'
      }
    }
  };
  
  export default Navbar;;
  


/* const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><button onClick={() => console.log('Home clicked')}>Home</button></li>
                <li><button onClick={() => console.log('About clicked')}>About</button></li>
                <li><button onClick={() => console.log('Contact clicked')}>Contact</button></li>

            </ul>
        </nav>
    );
};

export default Navbar; */