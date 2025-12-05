import React from "react";
import { useNavigate } from "react-router-dom";
import RecipeForm from "../Composant/RecipeForm";

function CreateRecipe({ setRecipes }) {
  const navigate = useNavigate();

  const handleCreate = (newRecipe) => {
    setRecipes((prev) => [...prev, newRecipe]);
    navigate("/recipes");
  };

  return (
    <div>
      <h1>Créer une nouvelle recette</h1>

      <RecipeForm
        onSubmit={handleCreate}
        editingRecipe={null}
        onClose={() => navigate("/recipes")}
      />
    </div>
  );
}

export default CreateRecipe;