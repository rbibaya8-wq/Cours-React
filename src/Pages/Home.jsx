import { products } from "../data/products";
import ProductCard from "../Components/ProductCard";

function Home({ cart, setCart ,search}) {
  
  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };
  const FilterProducts=products.filter((item)=>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-grid">
      {FilterProducts.map((item) => (
        <ProductCard 
          key={item.id}
          product={item}
          onAdd={addToCart}
        />
      ))}

      {FilterProducts.length === 0 && (
        <p style={{ textAlign: "center", width: "100%" }}>
          Aucun produit trouvé...
        </p>
      )}
    </div>
  );
}
export default Home;