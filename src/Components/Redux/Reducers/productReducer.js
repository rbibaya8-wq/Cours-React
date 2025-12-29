const initialState = {
  products: [],
  filteredProducts: [],
  loading: false,
  selectedCategory: "all",
  maxPrice: 0
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {

    case "FETCH_PRODUCTS_START":
      return { ...state, loading: true };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
        filteredProducts: action.payload
      };

    case "FILTER_BY_CATEGORY":
      if (action.payload === "all") {
        return { ...state, filteredProducts: state.products };
      }
      return {
        ...state,
        filteredProducts: state.products.filter(
          p => p.category?.name === action.payload
        )
      };

    case "FILTER_BY_PRICE":
      return {
        ...state,
        filteredProducts: state.products.filter(
          p => p.price <= action.payload
        )
      };
    case "ADD_PRODUCT":
    const updatedProducts = [action.payload, ...state.products];

    return {
      ...state,
      products: updatedProducts,
      filteredProducts: updatedProducts
    };


    default:
      return state;
  }
}
