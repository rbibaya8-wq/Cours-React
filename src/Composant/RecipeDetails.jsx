import React from "react";

function RecipeDetails({ recipe, onClose, toggleFavori, isFavori }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={onClose}>X</button>

        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt="" />

        <p><b>Catégorie :</b> {recipe.strCategory}</p>
        <p><b>Area :</b> {recipe.strArea}</p>

        <h3>Ingrédients :</h3>
        <ul>
          {Array.from({ length: 20 })
            .map((_, i) => recipe[`strIngredient${i + 1}`])
            .filter((ing) => ing)
            .map((ing, i) => <li key={i}>{ing}</li>)}
        </ul>

        <h3>Instructions :</h3>
        <p>{recipe.strInstructions}</p>

        <button className="favori-btn" onClick={() => toggleFavori(recipe)}>
          {isFavori ? "Retirer des favoris" : "Ajouter aux favoris"}
        </button>
      </div>
    </div>
  );
}

export default RecipeDetails;