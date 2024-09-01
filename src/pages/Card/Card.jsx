import Iframe from "../iframe/iframe.jsx";
import "./Card.css";

export function Card() {
  return (
    <>
      <div className="card" id="card">
        <img
          src=""
          alt="San Fernando Del Valle De Catamarca"
          className="card-img"
        />
        <div className="card-content">
          <h2 className="card-title">San Fernando Del Valle De Catamarca</h2>
          <p className="card-description">
            San Fernando del Valle de Catamarca, oficialmente Ciudad de San
            Fernando del Valle de Catamarca, es la capital de la provincia
            argentina de Catamarca y la ciudad cabecera de su departamento
            Capital. Se trata de un centro comercial y turístico
          </p>
          <li className="card-link">
            <a href="Catamarca">ver mas</a>
          </li>
          <Iframe />
        </div>
      </div>
    </>
  );
}
