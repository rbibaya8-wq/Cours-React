import React, { useState } from "react";

function RecipeForm({ onSubmit, editingRecipe, onClose }) {
  const [name, setName] = useState(editingRecipe ? editingRecipe.name : "");
  const [category, setCategory] = useState(
    editingRecipe ? editingRecipe.category : "Entree"
  );
  const [ingredients, setIngredients] = useState(
    editingRecipe ? editingRecipe.ingredients : [""]
  );
  const [difficulty, setDifficulty] = useState(
    editingRecipe ? editingRecipe.difficulty : 1
  );
  const [description, setDescription] = useState(
    editingRecipe ? editingRecipe.description : ""
  );
  const [image, setImage] = useState(
    editingRecipe ? editingRecipe.image : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: editingRecipe ? editingRecipe.id : Date.now(),
      name,
      category,
      ingredients,
      difficulty,
      description,
      image,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="create-form">
      <h2>{editingRecipe ? "Modifier la recette" : "Nouvelle recette"}</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Nom"
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Plat</option>
        <option>Entrée</option>
        <option>Dessert</option>
        <option>Boisson</option>
      </select>

      <h4>Ingrédients :</h4>
      {ingredients.map((ing, index) => (
        <div key={index} className="row">
          <input
            value={ing}
            onChange={(e) => {
              const arr = [...ingredients];
              arr[index] = e.target.value;
              setIngredients(arr);
            }}
          />
          <button
            type="button"
            className="btn-remove-ing"
            onClick={() =>
              setIngredients(ingredients.filter((_, i) => i !== index))
            }
          >
            X
          </button>
        </div>
      ))}

      <button
        className="btn-add-ing"
        type="button"
        onClick={() => setIngredients([...ingredients, ""])}
      >
        Ajouter ingrédient
      </button>

      <input
        type="number"
        min="1"
        max="5"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.value)}
      />

      <button type="submit" className="btn-save">
        Enregistrer
      </button>

      <button type="button" className="btn-cancel" onClick={onClose}>
        Annuler
      </button>
    </form>
  );
}

export default RecipeForm;