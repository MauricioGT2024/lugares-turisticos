import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import { Card } from "./pages/Card/Card";
import { NavBar } from "./NavBar/NavBar";
import { Error404 } from "./pages/Error404/Error404";
import { Catamarca } from "./pages/Catamarca/Catamarca";
import { Fiambala } from "./pages/Fiambala/Fiambala";
import "./App.css";
import { Tinogasta } from "./pages/Tinogasta/Tinogasta";
import { AntofagastaDeLaSierra } from "./pages/Antofagasta-De-La-Sierra/Antofagasta-De-La-Sierra";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
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
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
      ;
      <footer>
        <p>&copy; 2024 - Todos los derechos reservados</p>
        <p>San Fernando Del Valle de Catamarca</p>
      </footer>
    </>
  );
}

export default App;
