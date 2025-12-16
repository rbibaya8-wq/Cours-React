import ProductCard from "./ProductCard";

export default function FavorisList({ favoris, OnFavoris, cart, setCart }) {

  const addToCart = (product) => {
    setCart([...cart, { ...product, qty: 1 }]);
  };

  return (
    <div className="Favoris">
      <h1>Mes Favoris</h1>

      {favoris.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          OnFavoris={OnFavoris}
          onAdd={addToCart}    
        />
      ))}
    </div>
  );
}
