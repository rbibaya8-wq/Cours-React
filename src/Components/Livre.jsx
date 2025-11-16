import LivreImg from "./LivreImg";
import LivreTitle from "./LivreTitle";
import LivrePrice from "./LivrePrice";
function Livre({ image, title, price }){
    return (
    <div
      style={{
        width: "200px",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        background: "#fff",
        boxShadow: "0 5px 12px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}
    >
        <LivreImg src={image}/>
        <LivreTitle title={title}/>
        <LivrePrice price={price}/>
        <button
        style={{
          marginTop: "10px",
          padding: "8px 15px",
          background: "#00c3ff",
          border: "none",
          borderRadius: "8px",
          color: "white",
          cursor: "pointer"
        }}
      >
        Read More...
      </button>


    </div>)

}
export default Livre;