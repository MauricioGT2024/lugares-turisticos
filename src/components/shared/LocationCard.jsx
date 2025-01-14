import PropTypes from 'prop-types';
import { useState } from 'react';
import './Card.css';

const LocationCard = ({ imgSrc, title, description, mapSrc }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className={`card ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-image-container">
        <img src={imgSrc} alt={title} className="card-image" loading="lazy" />
        <button 
          className="card-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <h3 className="card-title">{title}</h3>
          <span className="toggle-icon">
            {isExpanded ? '−' : '+'}
          </span>
        </button>
      </div>
      {isExpanded && (
        <div className="card-content">
          <div className="description-container">
            <p className="card-description">{description}</p>
          </div>
          <div className="card-map-container">
            <iframe
              src={mapSrc}
              title={`Mapa de ${title}`}
              className="card-map"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      )}
    </article>
  );
};

LocationCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mapSrc: PropTypes.string.isRequired
};

export default LocationCard;
