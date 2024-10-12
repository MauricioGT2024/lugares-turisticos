import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => {
  const current_theme = localStorage.getItem('current_theme') || 'light'; // Default to 'light' if not found
  const [theme, setTheme] = useState(current_theme);

  useEffect(() => {
    localStorage.setItem('current_theme', theme); // Ensure you're saving the right key
  }, [theme]);

  return (
    <>
      <BrowserRouter>
        <div className={`container ${theme}`}>
          <NavBar theme={theme} setTheme={setTheme} />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Provincia/" element={<Provincia />}></Route>
            <Route path="/Catamarca/" element={<Catamarca />}></Route>
            <Route path="/Fiambala/" element={<Fiambala />}></Route>
            <Route path="/Tinogasta/" element={<Tinogasta />}></Route>
            <Route path="/Antofagasta-De-La-Sierra/" element={<AntofagastaDeLaSierra />}></Route>
            <Route path="/Hospedaje/" element={<Hospedaje />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
