
  /*import React, { useState } from "react";
  import { HashRouter as Router, Routes, Route } from "react-router-dom";

  import RecipeList from "./Composant/RecipeList";
  import FavorisList from "./Composant/FavorisList";
  import Navbar from "./Composant/Navbar";
  import "./App.css";
  import CreateRecipe from "./Composant/CreateRecipe";


  function App() {
    const [recipes, setRecipes] = useState([]);
    const [favoris, setFavoris] = useState([]);

    const addOrRemoveFavoris = (recipe) => {
      if (favoris.some((f) => f.idMeal === recipe.idMeal)) {
        setFavoris(favoris.filter((f) => f.idMeal !== recipe.idMeal));
      } else {
        setFavoris([...favoris, recipe]);
      }
    };

    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route
            path="/recipes"
            element={
              <RecipeList
                recipes={recipes}
                setRecipes={setRecipes}
                favoris={favoris}
                toggleFavori={addOrRemoveFavoris}
              />
            }
          />

          <Route
            path="/favoris"
            element={
              <FavorisList favoris={favoris} toggleFavori={addOrRemoveFavoris} />
            }
          />

          <Route path="/create" element={<CreateRecipe setRecipes={setRecipes} />} />
        </Routes>
      </Router>
    );
  }
  export default App;
import { HashRouter as Router, Routes, Route } from "react-router-dom";  
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "./App.css";
import CartModel from "./Components/CartModel";
import CheckoutForm from "./Components/CheckoutForm";
import { products } from "./data/products";
import FavorisList from "./Components/FavorisList";

function App() {
  const [cart, setCart] = useState([]);
  const [search,setSearch]=useState("");
  const [showInfo,setShowInfo]=useState(false);
  const [Filtrage,setFiltrage]=useState("All");
  const [ShowForm,SetShowForm]=useState(false);
  const [Theme,setTheme]=useState("light");
  const [favoris, setFavoris] = useState([]);


  const toggletheme=()=>{
    setTheme((prev)=>(prev==="light"?"dark":"light"))
  } 
  
  const AddOrRemoveFavoris=(cart)=>{
    if(favoris.some((f)=>f.id===cart.id)){
      setFavoris(favoris.filter((f)=>f.id!==cart.id))
    }else{
      setFavoris([...favoris,cart])
    }
  }
  return (
    <div className={`app ${Theme}`}>
      <Router>
        <Navbar
        cartCount={cart.length}
        onOpenCart={() => {setShowInfo(true)}}
        search={search} setSearch={setSearch}
        Filtrage={Filtrage} setFiltrage={setFiltrage}
        toggletheme={toggletheme}  Theme={Theme}
      />
        <Routes>
            <Route
              path="/favoris"
              element={
              <FavorisList 
              favoris={favoris} 
              OnFavoris={AddOrRemoveFavoris} 
              cart={cart}
              setCart={setCart}

    />
  }
/>
        </Routes>

      </Router>
      {showInfo && !ShowForm && (
        <CartModel
          cart={cart}
          setCart={setCart}
          onClose={() => setShowInfo(false)}
          SetShowForm={() => {
            SetShowForm(true);
            setShowInfo(false);
          }}
        />
      )}
      {ShowForm &&(
        <CheckoutForm cart={cart} SetShowForm={SetShowForm} total={cart.reduce((acc, item) => acc + item.price * item.qty, 0)}/>
      )}
      {!ShowForm &&(
        <Home cart={cart} setCart={setCart} search={search} Filtrage={Filtrage}  products={products} OnFavoris={AddOrRemoveFavoris} />
      )}

    </div> 
      
  );
}

export default App;*/

import EventList from "./TpEvents/EventList";
import "./App.css";

function App(){
  return(
    <EventList/>
  )
}
export default App;
