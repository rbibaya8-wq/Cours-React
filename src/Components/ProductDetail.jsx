import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductDetail() {
  const { id } = useParams();
  const product = useSelector(state =>
    state.products.products.find(p => p.id === Number(id))
  );

  if (!product) return <p>Product not found</p>;

  return (
    <div className="ProductDetails">
      <h2>{product.title}</h2>
      <img src={product.images?.[0]} alt="" width="300" />
      <p>{product.description}</p>
      <p>Price: {product.price} $</p>
    </div>
  );
}
