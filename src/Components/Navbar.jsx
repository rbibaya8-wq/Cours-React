function Navbar({ cartCount, onOpenCart }) {
  return (
    <nav className="navbar">
      <div className="logo">HomeDecor</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Collections</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <div className="nav-actions">
        <input 
          type="text" 
          placeholder="Search..." 
          className="search-input" 
        />

        <button className="cart-btn" onClick={onOpenCart}>
          🛒 Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
