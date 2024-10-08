import './HomeDetails.css'

function HomeDetails() {
  return (
    <>
      <div className="home" id="home">
        <div className="home-container">
          <h2 className="home-title">San Fernando Del Valle De Catamarca</h2>
          <p className="home-description">
            San Fernando del Valle de Catamarca es la capital de la provincia
            de Catamarca, Argentina. <br />  Es un centro administrativo, <br /> cultural y
            económico, con una rica historia y tradiciones, así como un
            entorno natural atractivo.
          </p>
          <button className="boton">
            <span>
              {" "}
              <a className="link" href="Card">
                ver mas
              </a>{" "}
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default HomeDetails;