import { products } from "../data/products";
import ProductCard from "../Components/ProductCard";
import { useState } from "react";
import Pagination from "../Components/Pagination";
import Sorting from "../Components/Sorting";

function Home({ cart, setCart ,search,Filtrage}) {
  //declare state de pagination
  const [Page, setPage] = useState(1);
  const productsPerPage = 6;
  //state de sort
  const [sort,setSort]=useState();
  //ajouter cart
  const addToCart = (product) => {
    setCart([...cart, { ...product, qty: 1 }]);
  };
  //search and select
  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = Filtrage === "All" || item.category === Filtrage;
    return matchesSearch && matchesCategory;
  });
  //Sorting
  let sortProducts=[...filteredProducts];
  if (sort==="name-asc"){
    sortProducts.sort((a,b)=>a.title.localeCompare(b.title));
  }
  if (sort==="name-desc"){
    sortProducts.sort((a,b)=>b.title.localeCompare(a.title));
  }
  if(sort==="Price-asc"){
    sortProducts.sort((a,b)=>a.price-b.price);
  }
   if(sort==="Price-desc"){
    sortProducts.sort((a,b)=>b.price-a.price);
  }
  //pagination
  const start=(Page-1)*productsPerPage;//foqash anbdaw ex:(1-1)*6=start 6
  const paginated=sortProducts.slice(start,start+productsPerPage);//kol page xhal aykon feha d les Produits filteredProducts.slice(0,6)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);//30/6=5 pages
  //affichage de contenu
  return (
    <>
    <div className="sorting-container">
        <label htmlFor="">Sort Products by:</label>
        <Sorting sort={sort} setSort={setSort}/>
    </div>
    <div className="products-grid">
      {paginated.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          onAdd={addToCart}
        />
      ))}

      {filteredProducts.length === 0 && (
        <p style={{ textAlign: "center", width: "100%" }}>
          Aucun produit trouvé...
        </p>
      )}
      {/*Pagination button*/ }
      <Pagination Page={Page} setPage={setPage} totalPages={totalPages}/>
    </div>
    </>
  );
}

export default Home;