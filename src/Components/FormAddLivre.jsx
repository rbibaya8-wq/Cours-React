import { useState } from "react";

function FormAddLivre({ setLivres }) {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("Roman");
  const [year, setYear] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLivre = {
      title,
      price: Number(price),
      image,
      genre,
      year: Number(year),
      note: Number(note)
    };

    // ajout livre dans App.jsx
    setLivres(prev => [...prev, newLivre]);

    // vider les inputs
    setTitle("");
    setPrice("");
    setImage("");
    setGenre("Roman");
    setYear("");
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit}
      style={{
        padding: "20px",
        marginBottom: "20px",
        background: "#f8f8f8",
        borderRadius: "10px"
      }}
    >
      <h2>Ajouter un Livre</h2>

      <input 
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br /><br />

      <input 
        type="number"
        placeholder="Prix"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      /><br /><br />

      <input 
        type="text"
        placeholder="URL Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      /><br /><br />

      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="Roman">Roman</option>
        <option value="Développement">Développement</option>
        <option value="Philosophie">Philosophie</option>
      </select><br /><br />

      <input 
        type="number"
        placeholder="Année"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      /><br /><br />

      <input 
        type="number"
        placeholder="Note (1 à 5)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      /><br /><br />

      <button 
        type="submit"
        style={{
          padding: "10px 20px",
          background: "#00c3ff",
          border: "none",
          borderRadius: "8px",
          color: "white",
          cursor: "pointer"
        }}
      >
        Ajouter
      </button>
    </form>
  );
}

export default FormAddLivre;
