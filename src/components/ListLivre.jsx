import { useState } from "react";
import livres from "../data";
import Livre from "./Livre";

function ListLivre() {
  const [genre, setGenre] = useState("");
  const [search, setSearch] = useState("");
  const [tri, setTri] = useState("");
  const [page, setPage] = useState(1);
  const livresParPage = 5;

  let result = livres.filter((livre) =>
    genre ? livre.genre === genre : true
  );

  result = result.filter((livre) =>
    livre.titre.toLowerCase().includes(search.toLowerCase())
  );

  if (tri === "anneeAsc") result = [...result].sort((a, b) => a.annee - b.annee);
  if (tri === "anneeDesc") result = [...result].sort((a, b) => b.annee - a.annee);
  if (tri === "noteAsc") result = [...result].sort((a, b) => a.note - b.note);
  if (tri === "noteDesc") result = [...result].sort((a, b) => b.note - a.note);

  const start = (page - 1) * livresParPage;
  const paginated = result.slice(start, start + livresParPage);
  const pagesTotal = Math.ceil(result.length / livresParPage);

  return (
    <div>
      <h2>Liste des Livres</h2>

      <select onChange={(e) => setGenre(e.target.value)}>
        <option value="">-- Tous les genres --</option>
        <option value="Roman">Roman</option>
        <option value="Développement Personnel">Développement Personnel</option>
      </select>

      <input
        type="text"
        placeholder="Recherche par titre..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setTri(e.target.value)}>
        <option value="">-- Tri --</option>
        <option value="anneeAsc">Année ↑</option>
        <option value="anneeDesc">Année ↓</option>
        <option value="noteAsc">Note ↑</option>
        <option value="noteDesc">Note ↓</option>
      </select>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {paginated.map((livre) => (
          <Livre key={livre.id} image={livre.image} titre={livre.titre} prix={livre.prix} />
        ))}
      </div>

      <div>
        {Array.from({ length: pagesTotal }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ListLivre;

    