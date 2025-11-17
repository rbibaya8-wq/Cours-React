import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [search,setSearch]=useState("")

  return (
    <>
      <Navbar
        cartCount={cart.length}
        onOpenCart={() => alert("Cart Modal Coming Soon!")}
        search={search} setSearch={setSearch}
      />

      <Home cart={cart} setCart={setCart} search={search} />
    

    </>
  );
}

export default App;
