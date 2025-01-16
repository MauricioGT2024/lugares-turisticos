
import PropTypes from 'prop-types';
import LocationCard from './LocationCard';
import './Card.css';

const LocationGrid = ({ title, locations }) => {
  return (
    <section className="location-section">
      <h1 className="section-title">{title}</h1>
      <div className="places-grid">
        {locations.map((location, index) => (
          <LocationCard key={index} {...location} />
        ))}
      </div>
    </section>
  );
};

LocationGrid.propTypes = {
  title: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      mapSrc: PropTypes.string.isRequired
    })
  ).isRequired
};

export default LocationGrid;