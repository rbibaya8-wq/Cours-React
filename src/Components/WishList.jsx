function Wishlist({ wishlist, toggleWishlist }) {
  return (
    <div>
      <h2>My Wishlist ❤️</h2>

      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        wishlist.map(item => (
          <ProductCard 
            key={item.id}
            product={item}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        ))
      )}
    </div>
  );
}

export default Wishlist;
