import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar
        cartCount={cart.length}
        onOpenCart={() => alert("Cart Modal Coming Soon!")}
      />

      <Home cart={cart} setCart={setCart} />
    </>
  );
}

export default App;
