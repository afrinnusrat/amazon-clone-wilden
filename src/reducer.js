export const initialState = {
  basket: ["Roti", "Ayam", "Telor"],
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      // Logic for adding item to basket
      break;
    case 'REMOVE_TO_BASKET':
      // Logic for removing item to basket
      break;
    default:
      return state;
  }
}

export default reducer;