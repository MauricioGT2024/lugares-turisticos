import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import PageTransition from "./components/PageTransition/PageTransition";
import "./App.css";
import PropTypes from 'prop-types';
import AntofagastaDeLaSierra from "./pages/Antofagasta-De-La-Sierra";
import Catamarca from "./pages/Catamarca";
import Fiambala from "./pages/Fiambala";
import Hospedaje from "./pages/Hospedaje";
import Provincia from "./pages/Provincia";
import Tinogasta from "./pages/Tinogasta";

const AppRouter = ({theme, setTheme}) => {
  return (
    <>
      <h1>Cosas para hacer en Catamarca</h1>
      <Router>
        <PageTransition>
          <Navbar theme={theme} setTheme={setTheme}/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Antofagasta-De-La-Sierra" element={<AntofagastaDeLaSierra />}></Route>
            <Route path="/Catamarca" element={<Catamarca />}></Route>
            <Route path="/Fiambala" element={<Fiambala />}></Route>
            <Route path="/Hospedaje" element={<Hospedaje />}></Route>
            <Route path="/Provincia" element={<Provincia />}></Route>
            <Route path="/Tinogasta" element={<Tinogasta />}></Route>
          </Routes>
        </PageTransition>
      </Router>
    </>
  );
};

AppRouter.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default AppRouter;
