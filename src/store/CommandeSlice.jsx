import { createSlice } from "@reduxjs/toolkit";
import { initialStateligneDeCommande } from "../util/constante";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const CommandeSlice = createSlice({
  name: "cart",
  initialState: {
    data: [initialStateligneDeCommande],
    totalItems: 0,
    totalAmount: 0,
    deliveryCharge: 1000,
  },
  reducers: {
    addToCart(state, action) {
      state.data.push(action.payload);
    },
    removeFromCart(state, action) {
      const tempCart = state.data.filter((item) => item.id !== action.payload);
      state.data = tempCart;
      storeInLocalStorage(state.data);
    },
    clearCart(state) {
      state.data = [];
      storeInLocalStorage(state.data);
    },
    toggleCartQty(state, action) {
      
     console.log(state)
         
          if (action.payload.type === "INC") {
            state.data[action.payload.index].quantite++;
            
            state.data[action.payload.index].montant  = state.data[action.payload.index].quantite * state.data[action.payload.index].prix;
          }
          if (action.payload.type === "DEC") {
            state.data[action.payload.index].quantite--;
            if (state.data[action.payload.index].quantite < 1) state.data[action.payload.index].quantite = 1;
            state.data[action.payload.index].montant  = state.data[action.payload.index].quantite * state.data[action.payload.index].price;
          }
          return { ... state.data};
       
      

    },
    getCartTotal(state) {
      state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);
      state.totalItems = state.data.length;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  toggleCartQty,
  getCartTotal,
  clearCart,
} = CommandeSlice.actions;
export default CommandeSlice.reducer;
