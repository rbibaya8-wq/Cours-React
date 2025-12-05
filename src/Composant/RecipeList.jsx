import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import RecipeItem from "./RecipeItem";
import RecipeDetails from "./RecipeDetails";

function RecipeList({ recipes, setRecipes, favoris, toggleFavori }) {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const fetchRecipes = async (term) => {
    setLoading(true);
    setError("");

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
    const data = await res.json();

    setLoading(false);

    if (!data.meals) {
      setRecipes([]);
      setError("Aucune recette trouvee pour cette recherche");
      return;
    }

    setRecipes(data.meals);
  };

  useEffect(() => {
    fetchRecipes("potato");
  }, []);

  const handleSearch = () => {
    if (search.length < 3) {
      setError("La zone de recherche doit contenir au moins 3 caracteres");
      return;
    }
    fetchRecipes(search);
  };

  return (
    <div className="list">

      <SearchBar
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch}
        error={error}
        loading={loading}
      />

      <h3>Résultats : {recipes.length}</h3>

      <div className="recipe-list">
        {recipes.map((r) => (
          <RecipeItem
            key={r.idMeal}
            recipe={r}
            onDetails={() => setSelected(r)}
            toggleFavori={toggleFavori}
            isFavori={favoris.some((f) => f.idMeal === r.idMeal)}
          />
        ))}
      </div>

      {selected && (
        <RecipeDetails
          recipe={selected}
          onClose={() => setSelected(null)}
          toggleFavori={toggleFavori}
          isFavori={favoris.some((f) => f.idMeal === selected.idMeal)}
        />
      )}
    </div>
  );
}

export default RecipeList;