import { NavLink } from "react-route-dom";

export function Navbar() {
  return (
    <header className="nav-header">
      <div className="navbar__logo">
        <NavLink to="/">
          <img src='https://picsum.photos/200/300' alt="Voici le logo de l'entreprise" />
        </NavLink>
      </div>
      <div className="nav-header_to-home_to-about">
        <NavLink to="/" className="nav-header_to-home">
          Accueil
        </NavLink>
        <NavLink to="/About" className="nav-header_to-about">
          A propos
        </NavLink>
      </div>
    </header>
  );
}

