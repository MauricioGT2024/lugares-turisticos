import PropTypes from 'prop-types';
import './Card.css';

const LocationCard = ({ imgSrc, title, description, mapSrc }) => {
  return (
    <article className="location-card">
      <div className="card-header">
        <img src={imgSrc} alt={title} className="card-image" loading="lazy" />
        <div className="card-overlay">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
      <div className="card-map">
        <iframe
          src={mapSrc}
          title={`Mapa de ${title}`}
          allowFullScreen
          loading="lazy"
        />
      </div>
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
