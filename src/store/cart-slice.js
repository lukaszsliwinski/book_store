import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        selectedBooks: [],
        totalPrice: 0,
    },

    reducers: {
        addBook(state, action) {
            const newBook = action.payload;
            const existingBook = state.selectedBooks.find((item) => item.id === newBook.id);

            if (existingBook) {
                existingBook.amount++;
            } else {
                state.selectedBooks.push({
                    id: newBook.id,
                    author: newBook.author,
                    title: newBook.title,
                    price: newBook.price,
                    amount: 1,
                })
            }
            state.totalPrice += newBook.price;
        },

        removeBook(state, action) {
            const newBook = action.payload;
            const bookToRemove = state.selectedBooks.find((item) => item.id === newBook.id);
            if (bookToRemove.amount === 1) {
                state.selectedBooks = state.selectedBooks.filter((item) => item.id !== newBook.id)
            } else {
                bookToRemove.amount--;
            }
            console.log(typeof state.totalPrice);
            console.log(typeof bookToRemove.price);
            state.totalPrice -= bookToRemove.price;
            console.log(typeof state.totalPrice);
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;