import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import searchSlice from "./search-slice";


const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default store;