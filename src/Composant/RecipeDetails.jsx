import React from "react";

function RecipeDetails({ recipe, onClose, toggleFavori, isFavori }) {

  let ingredients = [];

for (let i = 1; i <= 20; i++) {
  const ing = recipe[`strIngredient${i}`];
  if (ing && ing.trim() !== "") ingredients.push(ing);
}

if (recipe.customIngredients) {
  ingredients = recipe.customIngredients.filter((ing) => ing.trim() !== "");
}

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={onClose}>X</button>

        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt="" />

        <p><b>Catégorie :</b> {recipe.strCategory}</p>
        <h3>Ingrédients :</h3>
        <ul>
          {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
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
