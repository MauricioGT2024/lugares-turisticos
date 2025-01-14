import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from "./pages/Home";
import { Provincia } from "./pages/Provincia";
import { Error404 } from "./components/Error404/Error404";
import { Catamarca } from "./pages/Catamarca";
import { Fiambala } from "./pages/Fiambala";
import { Tinogasta } from "./pages/Tinogasta";
import { AntofagastaDeLaSierra } from "./pages/Antofagasta-De-La-Sierra";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Hospedaje } from "./pages/Hospedaje";
import '@fontsource-variable/onest'; // Importa la fuente
import PropTypes from "prop-types";
import './styles/Transitions.css';
import Loading from './components/Loading/Loading';

const AppContent = ({ theme, setTheme }) => {
  const location = useLocation(); // Obtener la ubicación actual

  return (
    <div className={`container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme} />
      <TransitionGroup>
        <CSSTransition
          key={location.key} // Usar la clave de ubicación para las transiciones
          classNames="page-transition" // Nombre de la clase para las animaciones
          timeout={400} // Duración de la animación
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/Provincia/" element={<Provincia />} />
            <Route path="/Catamarca/" element={<Catamarca />} />
            <Route path="/Fiambala/" element={<Fiambala />} />
            <Route path="/Tinogasta/" element={<Tinogasta />} />
            <Route path="/Antofagasta-De-La-Sierra/" element={<AntofagastaDeLaSierra />} />
            <Route path="/Hospedaje/" element={<Hospedaje />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};

AppContent.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired
};

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('current_theme') || 'light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
    document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode';
  }, [theme]);

  useEffect(() => {
    // Simular una carga de datos
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <AppContent theme={theme} setTheme={setTheme} />
    </Router>
  );
};

export default App;

