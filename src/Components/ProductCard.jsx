function ProductCard({ product, onAdd}) {
  return (
    <div className="card">
      <img src={product.image} className="product-img" alt={product.title} />
      <h3 className="card-title">{product.title}</h3>
      <p className="card-desc">{product.description}</p>
      <p className="price">${product.price}</p>

      <div className="buttons-card">
          <button onClick={() => onAdd(product)}>
            <span class="circle1"></span>
            <span class="circle2"></span>
            <span class="circle3"></span>
            <span class="circle4"></span>
            <span class="circle5"></span>
            <span class="text">Add to cart</span>
          </button>  
      </div>
    
    </div>
  );
}

export default ProductCard;
