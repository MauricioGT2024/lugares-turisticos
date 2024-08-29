import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Agregaremos estilos en este archivo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Lugares Turísticos
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Inicio
          </Link>

          <Link to="/" className="navbar-link">
            Restaurantes
          </Link>

          <Link to="/" className="navbar-link">
            
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
