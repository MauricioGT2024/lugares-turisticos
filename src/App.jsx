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
import "./styles/responsive.css";

const App = () => {
  const current_theme = localStorage.getItem('current_theme') || 'light'; // Default to 'light' if not found
  const [theme, setTheme] = useState(current_theme);

  useEffect(() => {
    localStorage.setItem('current_theme', theme); // Ensure you're saving the right key
    document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode'; // Cambia la clase del body
  }, [theme]);

  return (
    <Router>
      <div className={`app-container ${theme}`}>
        <NavBar theme={theme} setTheme={setTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Provincia/" element={<Provincia />} />
            <Route path="/Catamarca/" element={<Catamarca />} />
            <Route path="/Fiambala/" element={<Fiambala />} />
            <Route path="/Tinogasta/" element={<Tinogasta />} />
            <Route path="/Antofagasta-De-La-Sierra/" element={<AntofagastaDeLaSierra />} />
            <Route path="/Hospedaje/" element={<Hospedaje />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
