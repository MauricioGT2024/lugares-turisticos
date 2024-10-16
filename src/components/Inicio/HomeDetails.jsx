import './HomeDetails.css';
import { Link } from 'react-router-dom'; // Si usas React Router

function HomeDetails() {
  return (
    <div className="home" id="home">
      <div className="home-container">
        <h2 className="home-title">San Fernando Del Valle De Catamarca</h2>
        <p className="home-description">
          San Fernando del Valle de Catamarca es la capital de la provincia
          de Catamarca, Argentina. <br />
          Es un centro administrativo, <br />
          cultural y económico, con una rica historia y tradiciones, así como un
          entorno natural atractivo.
        </p>
        <div className="attractions">
          <h3>Puntos de Interés:</h3>
          <ul className="attractions-list">
            <li className="attraction-item">🏞️ Parque Adán Quiroga</li>
            <li className="attraction-item">⛪ La Catedral Basílica</li>
            <li className="attraction-item">🏛️ Casa de la Cultura</li>
            <li className="attraction-item">🎉 Fiesta Nacional e Internacional del Poncho</li>
          </ul>
        </div>
        <button className="boton">
          <span>
            <Link className="link" to="/Provincia"> 
              Ver más
            </Link>
          </span>
        </button>
      </div>
    </div>
  );
}

export default HomeDetails;
