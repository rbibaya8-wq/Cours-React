export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_PRODUCTS_START" });

    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();

      dispatch({
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addProduct = (product) => ({
  type: "ADD_PRODUCT",
  payload: {
    ...product,
    id: Date.now(),
    price: Number(product.price),
    category: {
      name: product.category?.name || product.category
    }
  }
});

export const filterByCategory = (category) => ({
  type: "FILTER_BY_CATEGORY",
  payload: category
});

export const filterByMaxPrice = (price) => ({
  type: "FILTER_BY_PRICE",
  payload: price
});
