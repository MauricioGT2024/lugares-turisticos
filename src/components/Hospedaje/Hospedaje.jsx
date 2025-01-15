import React, { useCallback, useMemo } from "react";
import LazyImage from "../LazyImage/LazyImage";

const Hospedaje = ({ data }) => {
  const renderHospedaje = useCallback(
    ({ id, imagen, nombre, descripcion, ubicacion, mapa }) => (
      <div key={id} className="custom-card fade-in">
        <LazyImage src={imagen} alt={nombre} className="custom-card-img" />
        <div className="custom-card-body">
          <h3 className="custom-card-title">{nombre}</h3>
          <span className="custom-card-location">{ubicacion}</span>
          <p className="custom-card-text">{descripcion}</p>
          {mapa && (
            <iframe
              title={nombre}
              src={mapa}
              className="custom-map-iframe"
              loading="lazy"
            />
          )}
        </div>
      </div>
    ),
    []
  );

  const hospedajes = useMemo(
    () => data.map((hospedaje) => renderHospedaje(hospedaje)),
    [data, renderHospedaje]
  );

  return <div className="hospedaje-container">{hospedajes}</div>;
};

export default React.memo(Hospedaje);
