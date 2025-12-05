function Navbar({ cartCount, onOpenCart,search,setSearch,Filtrage,setFiltrage,toggletheme,
 }) {

  return (
    <nav className="navbar">
  <div className="logo modern-logo">
    <img src="/images/logo3.jpeg" alt="Logo" />
    <span>HomeDecor</span>
  </div>

    <input type="checkbox" id="checkboxInput" onClick={toggletheme}/>
    <label class="toggleSwitch" for="checkboxInput">
    </label>

      <div className="Select-Box">
            <select value={Filtrage}
                onChange={(e) => setFiltrage(e.target.value)}>
                <option value="All">All</option>
                <option value="Lamps">Lamps</option>
                <option value="Mirrors">Mirrors</option>
                <option value="Chairs">Chairs</option>
                <option value="Rugs">Rugs</option>
                <option value="Vases">Vases</option>
                <option value="Woodens">Woodens</option>
                <option value="bookShelfs">bookShelfs</option>
            </select>
      </div>
      
    
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
