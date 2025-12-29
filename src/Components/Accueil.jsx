export default function Accueil() {
  return (
    <div className="Acceuil">
      <h1>
        Welcome to <span>MyShop</span>
      </h1>

      <p>
        Discover a modern e-commerce experience built with React and Redux.
        Browse high-quality products, manage your shopping cart, and enjoy a
        smooth and fast user experience.
      </p>

      <div className="home-features">
        <div>
          <h3>🛍 Quality Products</h3>
          <p>Explore a wide range of products fetched from a real API.</p>
        </div>

        <div>
          <h3>⚡ Fast & Modern</h3>
          <p>Built with modern technologies for speed and performance.</p>
        </div>

        <div>
          <h3>🔒 Secure</h3>
          <p>Authentication system with login and registration.</p>
        </div>
      </div>
    </div>
  );
}
