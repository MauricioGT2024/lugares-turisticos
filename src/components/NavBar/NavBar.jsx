import React, { memo, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import logoLight from '@/assets/navbar.png';
import logoDark from '@/assets/navbar_negro.png';
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
    theme === 'light' ? logoLight : logoDark,
    [theme]
  );

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, [setTheme]);

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
            fetchpriority="high"
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

export default NavBar;

