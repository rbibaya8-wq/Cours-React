import React from "react";

function RecipeItem({ recipe, onDetails, toggleFavori, isFavori }) {
  return (
    <div className="card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />

      <h3>{recipe.strMeal}</h3>
      <p>{recipe.strCategory}</p>

      <span
        className="star"
        onClick={() => toggleFavori(recipe)}
        style={{ cursor: "pointer", fontSize: "24px" }}
      >
        {isFavori ? "⭐" : "🤍"}
      </span>

      <div className="btns">
        <button onClick={() => onDetails(recipe)}>Voir details</button>
        <button
          onClick={() => window.open(recipe.strSource, "_blank")}
        >
          Source
        </button>
      </div>
    </div>
  );
}

export default RecipeItem;