import PropTypes from 'prop-types';
import './Logo.css';

const Logo = ({ theme }) => {
  return (
<<<<<<< HEAD
    <div className="flex items-center gap-3 transition-transform duration-300 ease-in-out hover:scale-105">
      <img
        src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'}
        alt="Logo Turismo Catamarca"
        className="h-10 transition-transform duration-300 ease-in-out hover:rotate-5"
      />
      <span className="text-xl font-medium bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
=======
    <div className="logo-container">
      <img
        src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'}
        alt="Logo Turismo Catamarca"
        className="logo-image"
      />
      <span className="logo-text">
>>>>>>> 38e9924 (github copilot)
        Turismo<strong>Catamarca</strong>
      </span>
    </div>
  );
};

Logo.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default Logo;