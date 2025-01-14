import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo_claro from '../../assets/day.png';
import logo_oscuro from '../../assets/night.png';
import logo_negro from '../../assets/logo_negro.jpg';
import logo from '../../../public/navbar.png'

const NavBar = ({ theme, setTheme }) => {
    
    const toggle_mode = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme === 'light' ? 'light-mode' : 'dark-mode'; // Cambia la clase del body
    };

    return (
        <div className={`navbar navbar-animation ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}>
            <Link to="/"><img src={theme === 'light' ? logo : logo_negro} alt="Logo" className='logo' /></Link>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Provincia">Departamentos</a></li>
                <li><a href="/hospedaje">Hospedaje</a></li>
            </ul>
            <img onClick={toggle_mode} src={theme === 'light' ? logo_claro : logo_oscuro} alt="Toggle theme" className='toggle-icon' />
        </div>
    );
};

NavBar.propTypes = {
    theme: PropTypes.string.isRequired,
    setTheme: PropTypes.func.isRequired,
};

export default NavBar;


