import { Card } from "./Card/Card";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";


function Home() {
  return (
    <>
   
      <h1 id="#Home">Un paseo por Catamarca</h1>
      <h2>
        podras ver las cosas increibles que puedes hacer cuando
        visites la provincia de Catamarca
      </h2>
      
      <div className="card" id="card">
        <div className="card-content">
          <h2 className="card-title">San Fernando Del Valle De Catamarca</h2>
          <p className="card-description">
          San Fernando del Valle de Catamarca, oficialmente Ciudad de San
          Fernando del Valle de Catamarca, es la capital de la provincia
          argentina de Catamarca y la ciudad cabecera de su departamento
          Capital. Se trata de un centro comercial y turístico
          </p>
          
          <button><a href="Card">ver mas</a></button>
          
          
        </div>
      </div>
     
      
    </>
  );
}

export default Home;
