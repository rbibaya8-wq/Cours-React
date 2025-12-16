import React, { useState } from "react";

function RecipeForm({ onSubmit, onClose }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Plat");
  const [ingredients, setIngredients] = useState([""]);
  const [difficulty, setDifficulty] = useState(1);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      idMeal: Date.now(),
      strMeal: name,
      strCategory: category,
      strInstructions: description,
      customIngredients: ingredients,
      strMealThumb: image, 
    });
  };

  return (
    <form onSubmit={handleSubmit} className="create-form">
      <h2>Nouvelle recette</h2>

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
        placeholder="Description..."
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            setImage(URL.createObjectURL(file));
          }
        }}
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