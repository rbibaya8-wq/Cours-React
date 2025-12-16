import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo-title">
      <img src="./images/logoRecipe.jpeg" alt="Logo" className="logo" /> 
      <h1>Creative Recipe Builder</h1>
      </div>
      <Link to="/recipes">Recettes</Link>
      <Link to="/favoris">Favoris</Link>
      <Link to="/create">Créer</Link>
    </nav>
  );
}

export default Navbar;
