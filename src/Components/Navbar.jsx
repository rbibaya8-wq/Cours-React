function Navbar({ cartCount, onOpenCart,search,setSearch }) {


  return (
    <nav className="navbar">
  <div className="logo modern-logo">
    <i className="fas fa-home"></i>
    <span>HomeDecor</span>
  </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Collections</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <div className="nav-actions">
        <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className="fas fa-search"></i>

      </div>
      </div>
        <button className="cart-btn" onClick={onOpenCart}>
        <i className="fas fa-shopping-cart"></i>Cart ({cartCount})
        </button>

    </nav>
  );
}

export default Navbar;
