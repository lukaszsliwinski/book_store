import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        selectedBooks: [],
        totalPrice: 0,
        visible: false,
    },

    reducers: {
        addBook(state, action) {
            const newBook = action.payload;
            const existingBook = state.selectedBooks.find((item) => item.id === newBook.id);

            if (existingBook) {
                existingBook.amount++;
                state.totalPrice += existingBook.price;
            } else {
                state.selectedBooks.push({
                    id: newBook.id,
                    authors: newBook.authors,
                    title: newBook.title,
                    price: newBook.price,
                    amount: 1,
                })
                state.totalPrice += newBook.price;
            }
        },

        removeBook(state, action) {
            const newBook = action.payload;
            const bookToRemove = state.selectedBooks.find((item) => item.id === newBook.id);
            if (bookToRemove.amount === 1) {
                state.selectedBooks = state.selectedBooks.filter((item) => item.id !== newBook.id)
            } else {
                bookToRemove.amount--;
            }
            state.totalPrice -= bookToRemove.price;
        },

        showCart(state, action) {
            const show = action.payload;
            show ? state.visible = true : state.visible = false;
        },

        clearCart(state, action) {
            state.selectedBooks = [];
            state.totalPrice = 0;
        },
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;