import { useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DashedList from "./Components/DashedList";
import TableList from "./Components/TableList";
import ListLivre from "./Components/ListLivre";
import FormAddLivre from "./Components/FormAddLivre";

// ----- LISTE POUR PARTIE 1 & PARTIE 2 -----
const Livres = [
  { title: "1984", author: "George Orwell", publicationYear: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925 },
  { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813 },
  { title: "Moby-Dick", author: "Herman Melville", publicationYear: 1851 },
  { title: "War and Peace", author: "Leo Tolstoy", publicationYear: 1869 },
  { title: "The Alchemist", author: "Paulo Coelho", publicationYear: 1988 }
];

// ----- LISTE POUR PARTIE 3 & 4 -----
const livresInitial = [
  {
    title: "Where the Crawdads Sing",
    price: 90.97,
    image: "https://m.media-amazon.com/images/I/81ww9xpkhvL.jpg",
    genre: "Roman",
    year: 2018,
    note: 4
  },
  {
    title: "Atomic Habits",
    price: 120,
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    genre: "Développement",
    year: 2019,
    note: 5
  },
  {
    title: "The Alchemist",
    price: 80,
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    genre: "Philosophie",
    year: 1988,
    note: 4
  }
];

function App() {

  // ------ STATE POUR AJOUTER LIVRES ------
  const [livres, setLivres] = useState(livresInitial);

  return (
    <div>

      {/* PARTIE 1 */}
      <Header />
      <h2>Liste des Livres</h2>
      <DashedList Livres={Livres} />

      {/* PARTIE 2 */}
      <h2>Liste en Tableaux :</h2>
      <TableList Livres={Livres} />
      <Footer />

      {/* PARTIE 3 & 4 */}
      <h2>Bibliothèque</h2>

      {/* FORMULAIRE AJOUT LIVRE */}
      <FormAddLivre setLivres={setLivres} />

      {/* LISTE DES LIVRES AVEC FILTRE, TRI, SEARCH, PAGINATION */}
      <ListLivre livres={livres} />

    </div>
  );
}

export default App;
