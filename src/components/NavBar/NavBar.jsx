import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import navbarLight from '/src/assets/navbar.png';
import navbarDark from '/src/assets/navbar_negro.png';
import './NavBar.css';

const NavLinks = memo(() => (
  <ul>
    <li><Link to="/Provincia">Provincia</Link></li>
    <li><Link to="/Catamarca">Catamarca</Link></li>
    <li><Link to="/Fiambala">Fiambalá</Link></li>
    <li><Link to="/Tinogasta">Tinogasta</Link></li>
    <li><Link to="/Antofagasta-De-La-Sierra">Antofagasta</Link></li>
    <li><Link to="/Hospedaje">Hospedaje</Link></li>
  </ul>
));

const NavBar = ({ theme, setTheme }) => {
  const logoSrc = useMemo(() => 
    theme === 'light' ? navbarLight : navbarDark,
    [theme]
  );

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="logo-link">
          <img 
            src={logoSrc}
            alt="Logo" 
            className="nav-logo"
            loading="eager"
            width="150"
            height="50"
          />
        </Link>
        <div className="nav-links">
          <NavLinks />
        </div>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
};

export default memo(NavBar);

