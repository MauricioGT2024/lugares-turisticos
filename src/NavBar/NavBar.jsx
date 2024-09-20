import "./NavBar.css";

export function NavBar() {
  return (
    <>
      <div className="Navbar-cs">
        <nav className="navbar">
        <a className="logo"  href="/" ><img src="./src/img/navbar.png" alt="navbar"/></a>
          <ul>
            <li>
              <a className="inicio"  href="/">Historia</a>
            </li>
            <li>
              <a className="redirect" href="/Card">Departamentos</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
