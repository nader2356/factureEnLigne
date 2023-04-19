import { configureStore } from "@reduxjs/toolkit";

import CommandeReducer from "./CommandeSlice";

const store = configureStore({
    reducer: {
        cart : CommandeReducer
    }
});

export default store;
