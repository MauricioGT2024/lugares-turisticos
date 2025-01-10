import PropTypes from 'prop-types';
import './Logo.css';

const Logo = ({ theme }) => {
  return (
    <div className="logo-container">
      <img
        src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'}
        alt="Logo Turismo Catamarca"
        className="logo-image"
      />
      <span className="logo-text">
        Turismo<strong>Catamarca</strong>
      </span>
    </div>
  );
};

Logo.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default Logo;