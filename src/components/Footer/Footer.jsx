import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <h3>Nuestras Redes</h3>
      <ul className="social-links">
        <li>
          <a href="https://www.facebook.com/photo/?fbid=645166094321781&set=a.555227456648979&locale=es_LA" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://sfvc.travel/" target="_blank" rel="noopener noreferrer">
            Nuestra Página
          </a>
        </li>
      </ul>
      <p>&copy; 2024 Todos los derechos reservados</p>
      <p>San Fernando Del Valle De Catamarca</p>
    </footer>
  );
}



