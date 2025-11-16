import { products } from "../data/products";
import ProductCard from "../Components/ProductCard";
function Home({ cart, setCart }) {
  
  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  return (
    <div className="products-grid">
      {products.map((item) => (
        <ProductCard 
          key={item.id}
          product={item}
          onAdd={addToCart}
        />
      ))}
    </div>
  );
}

export default Home;
