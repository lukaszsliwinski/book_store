import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        selectedBooks: [],
        total: 0,
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
                    amount: 1,
                })
            }
            state.total++;
        },

        removeBook(state, action) {
            const newBook = action.payload;
            const bookToRemove = state.selectedBooks.find((item) => item.id === newBook.id);
            if (bookToRemove.amount === 1) {
                state.selectedBooks = state.selectedBooks.filter((item) => item.id !== newBook.id)
            } else {
                bookToRemove.amount--;
            }



            if (state.total > 0) state.total--;
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;