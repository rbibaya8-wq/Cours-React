import livres from "../data";
import Livre from "./Livre";

function ListLivre() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {livres.map((livre) => (
        <Livre
          key={livre.id}
          image={livre.image}
          titre={livre.titre}
          prix={livre.prix}
        />
      ))}
    </div>
  );
}

export default ListLivre;
    