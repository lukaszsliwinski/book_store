import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        selectedBooks: [],
        totalPrice: 0,
        visible: false,
    },

    reducers: {
        // Function for add book to cart
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

        // Function for remove book from cart
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

        // Function for show or hide cart depending on passed value (true or false)
        showHideCart(state, action) {
            const show = action.payload;
            show ? state.visible = true : state.visible = false;
        },

        // Function for remove all items from cart
        clearCart(state, action) {
            state.selectedBooks = [];
            state.totalPrice = 0;
        },
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;