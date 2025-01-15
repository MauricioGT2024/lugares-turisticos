import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { hospedajes } from '../../data/hospedajes';
import './Hospedaje.css';

const HospedajeCard = ({ title, description, location, image, iframe }) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="hospedaje-card">
      <div className="hospedaje-card__image-container">
        <img src={image} alt={title} className="hospedaje-card__image" />
        <div className="hospedaje-card__location">{location}</div>
      </div>

      <div className="hospedaje-card__content">
        <h3 className="hospedaje-card__title">{title}</h3>
        <p className="hospedaje-card__description">{description}</p>
        
        <button 
          className="hospedaje-card__map-button"
          onClick={() => setShowMap(!showMap)}
        >
          {showMap ? '🗺️ Ocultar Mapa' : '🗺️ Ver Ubicación'}
        </button>

        <div className={`hospedaje-card__map ${showMap ? 'show' : ''}`}>
          {showMap && (
            <iframe 
              src={iframe}
              title={`Mapa de ${title}`}
              loading="lazy"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Hospedaje = () => {
  const [currentLocation, setCurrentLocation] = useState('todos');
  
  const locations = useMemo(() => (
    ['todos', ...new Set(hospedajes.map(h => h.location))]
  ), []);

  const filteredHospedajes = useMemo(() => (
    currentLocation === 'todos' 
      ? hospedajes 
      : hospedajes.filter(h => h.location === currentLocation)
  ), [currentLocation]);

  return (
    <div className="hospedaje">
      <div className="hospedaje__filter">
        <select 
          value={currentLocation}
          onChange={(e) => setCurrentLocation(e.target.value)}
          className="hospedaje__select"
        >
          {locations.map(loc => (
            <option key={loc} value={loc}>
              {loc === 'todos' ? 'Todas las ubicaciones' : loc}
            </option>
          ))}
        </select>
      </div>

      <div className="hospedaje__grid">
        {filteredHospedajes.map((hospedaje, index) => (
          <HospedajeCard key={index} {...hospedaje} />
        ))}
      </div>
    </div>
  );
};

HospedajeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  iframe: PropTypes.string.isRequired
};

export default Hospedaje;
