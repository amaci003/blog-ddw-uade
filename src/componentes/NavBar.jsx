import React from 'react';
import '../styles/NavBar.css';


const Navbar = () => {
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

export default Navbar;