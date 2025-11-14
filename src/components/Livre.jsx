import LivreImg from "./LivreImg";
import LivreTitle from "./LivreTitle";
import LivrePrice from "./LivrePrice";

function Livre({ image, titre, prix }) {
  return (
    <div style={{
      width: "200px",
      padding: "10px",
      border: "1px solid #ddd",
      margin: "10px",
      borderRadius: "10px",
      textAlign: "center"
    }}>
      <LivreImg src={image} />
      <LivreTitle titre={titre} />
      <LivrePrice prix={prix} />

      <button style={{
        backgroundColor: "#40CFFF",
        border: "none",
        padding: "6px 10px",
        color: "white",
        borderRadius: "5px",
        marginTop: "10px"
      }}>
        Read More...
      </button>
    </div>
  );
}

export default Livre;
