import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './NavBar.css';

const NavBar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="logo-link">
          <img 
            src={theme === 'light' ? '/src/assets/navbar.png' : '/src/assets/navbar_negro.png'} 
            alt="Logo" 
            className="nav-logo"
          />
        </Link>
        <div className="nav-links">
          <ul>
            <li><Link to="/Provincia">Provincia</Link></li>
            <li><Link to="/Catamarca">Catamarca</Link></li>
            <li><Link to="/Fiambala">Fiambalá</Link></li>
            <li><Link to="/Tinogasta">Tinogasta</Link></li>
            <li><Link to="/Antofagasta-De-La-Sierra">Antofagasta</Link></li>
            <li><Link to="/Hospedaje">Hospedaje</Link></li>
          </ul>
        </div>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
};

export default NavBar;
