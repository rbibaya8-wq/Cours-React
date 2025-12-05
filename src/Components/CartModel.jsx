function CartModal({ cart, setCart, onClose,SetShowForm}) {
  
  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };
  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);



  return (
    <div className="cart-overlay">

      <div className="cart-modal">

        <button className="close-btn" onClick={onClose}>X</button>

        <h2>Votre Panier</h2>

        {cart.length === 0 && <p>Le panier est vide...</p>}

        {cart.map((item) => (
          <div key={item.id} className="cart-item">

            <img src={item.image} alt="" className="cart-img" />

            <div className="cart-info">
              <h4>{item.title}</h4>
              <p>${item.price}</p>
            </div>

            <div className="qty-controls">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

            <button className="delete-btn" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))}

        {/* Total */}
        <div>
        <h3 className="total">Total: ${totalPrice.toFixed(2)}</h3>   
        <button className="Payer" onClick={() => SetShowForm(true)}>
              Payer
        </button>
        </div>

      </div>
    </div>
  );
}

export default CartModal;
