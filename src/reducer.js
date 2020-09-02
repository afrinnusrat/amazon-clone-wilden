export const initialState = {
  basket: [
    {
      id: "12341234",
      title: "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
      price: 11.96,
      rating: 4,
      image: "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
    },
    {
      id: "009876987",
      title: "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
      price: 11.96,
      rating: 4,
      image: "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
    },
  ],
  user: null,
}

const reducer = (state, action) => {

  console.log(action);

  switch (action.type) {
    case 'ADD_TO_BASKET':
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item]
      }
    case 'REMOVE_TO_BASKET':
      // Logic for removing item to basket
      return { ...state }
    default:
      return state;
  }
}

export default reducer;