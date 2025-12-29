import { Routes, Route, useLocation } from "react-router-dom";
import Accueil from "../Accueil";
import About from "../About";
import Products from "../Products";
import ProductDetail from "../ProductDetail";
import AddProduct from "../AddProduct";
import Cart from "../Cart";
import Login from "../Login";
import Regitrer from "../Registrer";
import Logout from "../Logout";
import Navbar from "../Navbar";



export default function AppRoutes() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regitrer />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
 
    </>
  );
}
