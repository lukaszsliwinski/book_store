import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        // booksList: [],
        totalAmount: 0,
    },

    reducers: {
        addBook(state, action) {
            state.totalAmount++;
        },
        removeBook(state, action) {
            if (state.totalAmount > 0) state.totalAmount--;
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;