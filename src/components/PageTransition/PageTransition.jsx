import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PageTransition.css';

function PageTransition({ children }) {
  const location = useLocation();

  return (
    <div className={`page-enter ${location.key && 'page-enter-active'}`}>
      {children}
    </div>
  );
}

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
