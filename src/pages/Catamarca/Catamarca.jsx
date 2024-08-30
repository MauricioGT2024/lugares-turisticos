import Iframe from "./Iframe";

export function Catamarca() {
  return (
    <div className="card" id="card">
      <img
        src="data:image/jpeg;base64,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"
        alt="San Fernando Del Valle De Catamarca"
        className="card-img"
      />
      <div className="card-content">
        <h2 className="card-title">Ruta Del Adobe</h2>
        <p className="card-description">
          La Ruta del Adobe es un circuito de 50 km que comprende un recorrido
          desde Tinogasta hasta la entrada de Fiambalá, sobre la RN 60 de la
          República Argentina
        </p>
      </div>
    </div>
  );
}
