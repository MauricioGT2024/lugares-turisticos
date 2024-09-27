import "./NavBar.css";

export function NavBar() {
  return (
    <>
      <header>
        <div className="logo">
         <a href="/"> <img src="/navbar.png" alt="logo de la pagina" /></a>
        </div>
        <nav>
          <a href="/" className="nav-link">Historia</a>
          <a href="/Card" className="nav-link">Departamentos</a>
          <a href="/Hospedaje" className="nav-link">Hostelaje</a>
        </nav>
      </header>
    </>
  );
}
