const initialState = {
  items: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {

    case "ADD_TO_CART":
      const exist = state.items.find(i => i.id === action.payload.id);

      if (exist) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload)
      };

    default:
      return state;
  }
}
