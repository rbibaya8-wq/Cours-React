import React from "react";
import RecipeItem from "./RecipeItem";

function FavorisList({ favoris, toggleFavori }) {
  return (
    <div className="list">
      <h2>Mes Favoris</h2>

      <div className="recipe-list">
        {favoris.map((r) => (
          <RecipeItem
            key={r.idMeal}
            recipe={r}
            toggleFavori={toggleFavori}
            isFavori={true}
            onDetails={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

export default FavorisList;