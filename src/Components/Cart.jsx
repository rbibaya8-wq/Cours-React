import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./Redux/Actions/cartActions";
export default function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="Cart">
      <h2>Your Shopping Cart</h2>

      {items.length === 0 && (
        <p className="empty-cart">Your cart is empty 🛒</p>
      )}

      {items.map(item => (
        <div className="cart-item" key={item.id}>
          <div className="cart-info">
            <h4>{item.title}</h4>
            <p>Price: {item.price} $</p>
            <p>Quantity: {item.quantity}</p>
          </div>

          <button
            className="Remove"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      {items.length > 0 && (
        <h3 className="Total">Total: {total} $</h3>
      )}
    </div>
  );
}
