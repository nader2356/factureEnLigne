import {
  REMOVE_ITEM,
  ADD_TO_CART,
  INCREASE,
  DECREASE,
  CHECKOUT,
  CLEAR,
} from "./CartTypes.js";

// Save the cartItems to local storage

// Export function to calculate the total price of the cart and the total quantity of the cart

// The reducer is listening for an action, which is the type that we defined in the CartTypes.js file
const CartReducer = (state, action) => {
  // The switch statement is checking the type of action that is being passed in
  switch (action.type) {
    // If the action type is ADD_TO_CART, we want to add the item to the cartItems array
    case ADD_TO_CART:
      state.cartItems.push({
        ...action.payload,
        quantite: 1,
      });

      return {
        ...state,
        cartItems: [...state.cartItems],
      };
      // If the action type is REMOVE_ITEM, we want to remove the item from the cartItems array

      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    // If the action type is INCREASE, we want to increase the quantity of the particular item in the cartItems array
    case INCREASE:
      state.cartItems[action.payload.index].quantite++;
      state.cartItems[action.payload.index].montant =
        state.cartItems[action.payload.index].quantite *
        state.cartItems[action.payload.index].prix;
      if (state.cartItems[action.payload.index].Taxe == true) {
        state.cartItems[action.payload.index].montantavecTaxe =
          (state.cartItems[action.payload.index].montant * 20) / 100;
      } else {
        state.cartItems[action.payload.index].montantavecTaxe = 0;
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    // If the action type is DECREASE, we want to decrease the quantity of the particular item in the cartItems array
    case DECREASE:
      state.cartItems[action.payload.index].quantite++;
      state.cartItems[action.payload.index].montant =
        state.cartItems[action.payload.index].quantite *
        state.cartItems[action.payload.index].prix;
      if (state.cartItems[action.payload.index].Taxe == true) {
        state.cartItems[action.payload.index].montantavecTaxe =
          (state.cartItems[action.payload.index].montant * 20) / 100;
      } else {
        state.cartItems[action.payload.index].montantavecTaxe = 0;
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    //Return the state if the action type is not found
    default:
      return state;
  }
};

export default CartReducer;
