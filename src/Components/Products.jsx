import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, fetchProducts, filterByCategory, filterByMaxPrice } from "./Redux/Actions/productActions";
import ProductCard from "./ProductCard";



export default function Products() {
  const dispatch = useDispatch();
  const { filteredProducts, loading } = useSelector(
    state => state.products
  );

  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    images: [""],
    category: { name: "" }
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = () => {
    dispatch(addProduct(newProduct));
    setShowModal(false);
    setNewProduct({
      title: "",
      price: "",
      images: [""],
      category: { name: "" }
    });
  };

  if (loading) {
    return (
      <div className="Products">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="Products">
      <h2>Our Products</h2>

      <div className="filters">
        <select
          className="filter-select"
          onChange={e => dispatch(filterByCategory(e.target.value))}
        >
          <option value="all">All Categories</option>
          <option value="Clothes">Clothes</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
        </select>

        <input
          type="number"
          className="filter-input"
          placeholder="Max price"
          onChange={e =>
            dispatch(filterByMaxPrice(Number(e.target.value)))
          }
        />

        <button
          className="add-product-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Product
        </button>
      </div>

      <div>
        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <p>No products found</p>
          </div>
        ) : (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>

      {showModal && (

        <div className="modal-overlay">
  <div className="modal">
    <button className="close-btn" onClick={() => setShowModal(false)}>
      ✕
    </button>

    <h2>Add New Product</h2>

    <form onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        placeholder="Product name"
        value={newProduct.title}
        onChange={e =>
          setNewProduct({ ...newProduct, title: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={e =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Image URL"
        value={newProduct.images[0]}
        onChange={e =>
          setNewProduct({
            ...newProduct,
            images: [e.target.value]
          })
        }
      />

      <input
        type="text"
        placeholder="Category"
        value={newProduct.category.name}
        onChange={e =>
          setNewProduct({
            ...newProduct,
            category: { name: e.target.value }
          })
        }
      />

      <div className="modal-actions">
        <button type="button" onClick={handleAddProduct}>
          Add
        </button>

        <button
          type="button"
          className="cancel"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>     
      )}
    </div>
  );
}
