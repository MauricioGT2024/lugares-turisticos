<<<<<<< HEAD
<<<<<<< HEAD
import React, { memo, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './NavBar.css';  // Asegúrate de que el archivo esté en la misma carpeta

const NavLink = memo(({ to, children }) => (
  <li>
    <Link 
      to={to} 
      prefetch="intent"
      onMouseEnter={useCallback(() => {
        // Preload component
        const path = to.substring(1).toLowerCase();
        import(`../${path}/${path}.jsx`);
      }, [to])}
    >
      {children}
    </Link>
  </li>
));

const NavLinks = memo(() => (
  <ul>
    <NavLink to="/Provincia">Provincia</NavLink>
    <NavLink to="/Catamarca">Catamarca</NavLink>
    <NavLink to="/Fiambala">Fiambalá</NavLink>
    <NavLink to="/Tinogasta">Tinogasta</NavLink>
    <NavLink to="/Antofagasta-De-La-Sierra">Antofagasta</NavLink>
    <NavLink to="/Hospedaje">Hospedaje</NavLink>
  </ul>
));

const NavBar = memo(({ theme, setTheme }) => {
  const logoSrc = useMemo(() => 
    theme === 'light' ? '/navbar.png' : '/navbar_negro.png',
    [theme]
  );

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, [setTheme]);
=======
import React, { memo, useMemo } from 'react';
=======
import React, { memo, useMemo, useCallback } from 'react';
>>>>>>> 08bb8b0 (16/01/25)
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './NavBar.css';

const NavLink = memo(({ to, children }) => (
  <li>
    <Link 
      to={to} 
      prefetch="intent"
      onMouseEnter={useCallback(() => {
        // Preload component
        const path = to.substring(1).toLowerCase();
        import(`../${path}/${path}.jsx`);
      }, [to])}
    >
      {children}
    </Link>
  </li>
));

const NavLinks = memo(() => (
  <ul>
    <NavLink to="/Provincia">Provincia</NavLink>
    <NavLink to="/Catamarca">Catamarca</NavLink>
    <NavLink to="/Fiambala">Fiambalá</NavLink>
    <NavLink to="/Tinogasta">Tinogasta</NavLink>
    <NavLink to="/Antofagasta-De-La-Sierra">Antofagasta</NavLink>
    <NavLink to="/Hospedaje">Hospedaje</NavLink>
  </ul>
));

const NavBar = memo(({ theme, setTheme }) => {
  const logoSrc = useMemo(() => 
    theme === 'light' ? '/navbar.png' : '/navbar_negro.png',
    [theme]
  );

<<<<<<< HEAD
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
>>>>>>> fea8b02 (16/01/25)
=======
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, [setTheme]);
>>>>>>> 08bb8b0 (16/01/25)

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
<<<<<<< HEAD
<<<<<<< HEAD
            fetchpriority="high"
=======
>>>>>>> fea8b02 (16/01/25)
=======
            fetchpriority="high"
>>>>>>> 08bb8b0 (16/01/25)
          />
        </Link>
        <div className="nav-links">
          <NavLinks />
        </div>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
});

<<<<<<< HEAD
<<<<<<< HEAD
export default NavBar;
=======
export default memo(NavBar);
>>>>>>> fea8b02 (16/01/25)
=======
export default NavBar;
>>>>>>> 08bb8b0 (16/01/25)

