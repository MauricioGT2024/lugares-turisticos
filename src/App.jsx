import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Card } from "./pages/Card/Card";
import { Error404 } from "./pages/Error404/Error404";
import { Catamarca } from "./pages/Catamarca/Catamarca";
import { Fiambala } from "./pages/Fiambala/Fiambala";
import { Tinogasta } from "./pages/Tinogasta/Tinogasta";
import { AntofagastaDeLaSierra } from "./pages/Antofagasta-De-La-Sierra/Antofagasta-De-La-Sierra";
import { ValleChico } from "./pages/Valle-Chico/Valle-Chico";
import "./App.css";
import { Footer } from "./pages/Footer/Footer";
import NavBar from "./pages/NavBar/NavBar";

const App = () => {

  const current_theme = localStorage.getItem('current_theme')
  const [theme, setTheme] = useState(current_theme?
  current_theme : 'light');

  useEffect(() =>{
    localStorage.setItem('current_time', theme);
  },[theme])

  return (
    <>
      <BrowserRouter>
        <div className={`container ${theme}`}>
          <NavBar theme={theme} setTheme={setTheme} />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Card/" element={<Card />}></Route>
            <Route path="/Catamarca/" element={<Catamarca />}></Route>
            <Route path="/Fiambala/" element={<Fiambala />}></Route>
            <Route path="/Tinogasta/" element={<Tinogasta />}></Route>
            <Route
              path="/Antofagasta-De-La-Sierra/"
              element={<AntofagastaDeLaSierra />}
            ></Route>
            <Route
              path="/Valle-Chico/"
              element={<ValleChico />}
            ></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </div >
      </BrowserRouter>
      <Footer />


    </>
  );
}

export default App;
