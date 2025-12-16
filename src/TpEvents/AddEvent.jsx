import { useState, useEffect } from "react";

export default function AddEvent({ onSave, isEditinigEvent }) {
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    type: "Atelier",
    description: "",
  });

  useEffect(() => {
    if (isEditinigEvent) setForm(isEditinigEvent);
  }, [isEditinigEvent]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.date) return;
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Titre" />
      <input type="date" name="date" value={form.date} onChange={handleChange} />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Lieu" />

      <select name="type" value={form.type} onChange={handleChange}>
        <option>Atelier</option>
        <option>Conference</option>
        <option>Personnel</option>
      </select>

      <textarea name="description" value={form.description} onChange={handleChange} />

      <button type="submit">
        {isEditinigEvent ? "Modifier" : "Ajouter"}
      </button>
    </form>
  );
}