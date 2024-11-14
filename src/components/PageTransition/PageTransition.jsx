import { CSSTransition, SwitchTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import './PageTransition.css';

const PageTransition = ({ children }) => {
  return (
    <SwitchTransition>
      <CSSTransition key={window.location.pathname} timeout={300} classNames="fade">
        <div>{children}</div>
      </CSSTransition>
    </SwitchTransition>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
