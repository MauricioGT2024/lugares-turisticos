import "./NavBar.css";

export function NavBar() {
  return (
    <>
      <div className="Navbar-cs">
        <nav className="navbar">
          <ul>
            <li>
              <a href="/">Historia</a>
            </li>
            <li>
              <a href="/Card">Departamentos</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
