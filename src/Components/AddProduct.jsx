import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./Redux/Actions/productActions";

export default function AddProduct({ onClose }) {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    images: [""]
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addProduct({
      ...product,
      id: Date.now()
    }));

    onClose(); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>Add New Product</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Product name"
            value={product.title}
            onChange={e => setProduct({ ...product, title: e.target.value })}
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={e => setProduct({ ...product, price: e.target.value })}
            required
          />

          <input
            placeholder="Category"
            value={product.category}
            onChange={e => setProduct({ ...product, category: e.target.value })}
          />

          <input
            placeholder="Image URL"
            value={product.images[0]}
            onChange={e => setProduct({ ...product, images: [e.target.value] })}
          />

          <textarea
            placeholder="Description"
            value={product.description}
            onChange={e => setProduct({ ...product, description: e.target.value })}
          />

          <button type="submit" className="Add">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
