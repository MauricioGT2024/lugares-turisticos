import "./NavBar.css";

export function NavBar() {
  return (
    <>
      <div className="Navbar-cs">
        <nav className="navbar">
            <ul>
                <li><a href="/">Historia</a></li>
                <li><a href="/Card">Departamentos</a></li>
                <li><a href="/trabajos/">Trabajos</a></li>
                <li><a href="/calendario/">Calendario</a></li>
                <li><a href="/event/:id">Eventos</a></li>
            </ul>
        </nav>
      </div>
    </>
  );
}
