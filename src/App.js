import Header from "./TpMap/Header";
import Footer from "./TpMap/Footer";
import DashedList from "./TpMap/DashedList";
import TableList from "./TpMap/TableList";

function App() {
  const livres = [
    { title: "1984", author: "George Orwell", publicationYear: 1949, genre: "Roman", rating: 4.8 },
    { title: "Le Petit Prince", author: "Saint-Exupéry", publicationYear: 1943, genre: "Conte", rating: 4.6 },
    { title: "L'Étranger", author: "Camus", publicationYear: 1942, genre: "Roman", rating: 4.3 }
  ];

  return (
    <div>
      <Header />

      <h2>Liste sous forme de puces</h2>
      <DashedList livres={livres} />

      <h2>Liste sous forme de tableau</h2>
      <TableList livres={livres} />

      <Footer />
    </div>
  );
}

export default App;
