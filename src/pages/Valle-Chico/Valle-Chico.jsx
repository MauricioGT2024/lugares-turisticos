import "./Valle-Chico.css"

export function ValleChico() {
  return (
    <>
      <div className="card" id="card">
        <img
          src="img/Valle-Chico/Primera Plaza Valle Chico.jpg"
          alt="Primera Plaza Valle Chico"
          className="card-img"
        />
        <div className="card-content">
          <h2 className="card-title">Primera Plaza Valle Chico</h2>
          <p className="card-description">
            Primera Plaza Valle Chico es un centro comercial en Catamarca,
            Argentina, que ofrece una variedad de tiendas, restaurantes y
            servicios, convirtiéndose en un punto de encuentro y entretenimiento
            para la comunidad local.
          </p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112237.01694606073!2d-65.97710995664063!3d-28.4672938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942429d4ec06d145%3A0x49b74ceb484ce973!2sPrimera%20Plaza%20Valle%20Chico!5e0!3m2!1ses-419!2sar!4v1727446018206!5m2!1ses-419!2sar"></iframe>
      </div>
    </>
  );
}
