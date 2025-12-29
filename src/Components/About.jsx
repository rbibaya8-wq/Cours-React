export default function About() {
  return (
    <div className="About">
      <h1>About MyShop</h1>

      <p>
        <strong>MyShop</strong> is a modern e-commerce web application designed
        to provide users with a smooth, fast, and intuitive online shopping
        experience. The platform allows users to explore a wide range of
        products, view detailed product information, and manage their shopping
        cart with ease.
      </p>

      <p>
        All products displayed in MyShop are fetched from a real external API,
        ensuring dynamic and up-to-date product data. Each product includes
        essential information such as name, price, category, images, and
        description, simulating a real-world online store environment.
      </p>

      <p>
        The application is built using <strong>React</strong> for the user
        interface and <strong>Redux</strong> for global state management. Redux
        helps manage products, user authentication, and the shopping cart in a
        clean and scalable way. Asynchronous actions such as fetching products
        from the API are handled using Redux Thunk.
      </p>

      <p>
        MyShop also includes essential e-commerce features such as product
        filtering by category and price, adding products to the cart with
        quantities, calculating the total price, and secure user authentication
        through login and registration pages.
      </p>

      <p>
        This project was created as a practical exercise to understand modern
        front-end development concepts, including component-based architecture,
        routing, state management, and API integration, while delivering a clean
        and user-friendly design.
      </p>
    </div>
  );
}
