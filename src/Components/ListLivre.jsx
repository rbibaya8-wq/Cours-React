import { useState } from "react";
import Livre from "./Livre";

function ListLivre({ livres }) {
    const [genre, setGenre] = useState("Tous");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [page, setPage] = useState(1);

    const livresParPage = 5;

  // 1 — FILTRE PAR GENRE
  const filtered = livres.filter((livre) =>
    genre === "Tous" ? true : livre.genre === genre
  );

  // 2 — RECHERCHE PAR TITRE
  const searched = filtered.filter((livre) =>
    livre.title.toLowerCase().includes(search.toLowerCase())
  );

  // 3 — TRI
  const sorted = [...searched].sort((a, b) => {
    if (sort === "year-asc") return a.year - b.year;
    if (sort === "year-desc") return b.year - a.year;
    if (sort === "note-asc") return a.note - b.note;
    if (sort === "note-desc") return b.note - a.note;
    return 0;
  });

  // 4 — PAGINATION
  const start = (page - 1) * livresParPage;
  const paginated = sorted.slice(start, start + livresParPage);

  const totalPages = Math.ceil(sorted.length / livresParPage);

  return (
    <div style={{ padding: "20px" }}>
      
      {/* FILTRE */}
      <select onChange={(e) => setGenre(e.target.value)}>
        <option value="Tous">Tous</option>
        <option value="Roman">Roman</option>
        <option value="Développement">Développement</option>
        <option value="Philosophie">Philosophie</option>
      </select>

      {/* TRI */}
      <select onChange={(e) => setSort(e.target.value)} style={{ marginLeft: "10px" }}>
        <option value="">Tri...</option>
        <option value="year-asc">Année ↑</option>
        <option value="year-desc">Année ↓</option>
        <option value="note-asc">Note ↑</option>
        <option value="note-desc">Note ↓</option>
      </select>

      {/* RECHERCHE */}
      <input
        type="text"
        placeholder="Rechercher..."
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      {/* AFFICHAGE */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        {paginated.map((livre, index) => (
          <Livre
            key={index}
            image={livre.image}
            title={livre.title}
            price={livre.price}
          />
        ))}
      </div>

      {/* PAGINATION */}
      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            style={{
              margin: "5px",
              padding: "5px 10px",
              background: page === i + 1 ? "#00c3ff" : "lightgray",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>

    </div>
  );
}
export default ListLivre;
