import "./Footer.css";

export function Footer({ theme }) {
  return (
    <footer className={`footer ${theme}`}>
      <h3>Nuestras Redes</h3>
      <ul>
        <li>
          <a href="https://www.facebook.com/photo/?fbid=645166094321781&set=a.555227456648979&locale=es_LA">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://sfvc.travel/">
            Nuestra Página
          </a>
        </li>
      </ul>
      <p>&copy; 2024 Todos los derechos reservados</p>
      <p>San Fernando Del Valle De Catamarca</p>
    </footer>
  );
}

