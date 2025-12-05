import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      gap: "20px",
      marginBottom: "25px",
      background: "#ffe8d6",
      padding: "15px",
      borderRadius: "12px",
      border: "2px solid #ffd1b3"
    }}>
      <Link to="/recipes">Recettes</Link>
      <Link to="/favoris">Favoris</Link>
      <Link to="/create">Créer</Link>
    </nav>
  );
}

export default Navbar;
