import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Nuestras Redes</h3>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/photo/?fbid=645166094321781&set=a.555227456648979&locale=es_LA" 
                target="_blank" 
                rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://sfvc.travel/" 
                target="_blank" 
                rel="noopener noreferrer">
                <i className="fas fa-globe"></i> Sitio Web
              </a>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>San Fernando Del Valle De Catamarca</p>
          <p>Argentina</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Todos los derechos reservados</p>
      </div>
    </footer>
  );
}



