import './HomeDetails.css';

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
          <div className="attractions-list">
            <div className="attraction-item">🏞️ Parque Adán Quiroga</div>
            <div className="attraction-item">⛪ La Catedral Basílica</div>
            <div className="attraction-item">🏛️ Casa de la Cultura</div>
            <div className="attraction-item">🎉 Fiesta Nacional e Internacional del Poncho</div>
          </div>
        </div>
        <button className="boton">
          <span>
            <a className="link" href="Provincia">
              Ver más
            </a>
          </span>
        </button>
      </div>
    </div>
  );
}

export default HomeDetails;
