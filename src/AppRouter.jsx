import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import "./App.css";


const AppRouter = () => {
  return (
    <>
      <h1>Cosas para hacer en Catamarca</h1>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/" element={<Navbar />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
