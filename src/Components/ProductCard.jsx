function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <img src={product.image} className="product-img" alt={product.title} />

      <h3 className="card-title">{product.title}</h3>
      <p className="card-desc">{product.description}</p>
      <p className="price">${product.price}</p>

      <button className="btn btn-primary" onClick={() => onAdd(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
