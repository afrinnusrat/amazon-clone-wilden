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
    case 'REMOVE_FROM_BASKET':
      // Logic for removing item to basket

      // we cloned the basket
      let newBasket = [...state.basket];

      // we check to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
}

export default reducer;