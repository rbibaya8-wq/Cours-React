import React from "react";

function SearchBar({ search, setSearch, onSearch, error, loading }) {
  return (
    <div className="search-bar">
      <input
        placeholder="Rechercher une recette..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={onSearch}>Rechercher</button>

      {error && <p className="error">{error}</p>}

      {loading && <p className="loading">Chargement en cours...</p>}
    </div>
  );
}

export default SearchBar;