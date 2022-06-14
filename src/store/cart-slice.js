import { createSlice } from "@reduxjs/toolkit";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        selectedBooks: [],
        totalPrice: 0,
        display: 'none',
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
                    authors: newBook.authors,
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
            state.totalPrice -= bookToRemove.price;
        },

        showCart(state, action) {
            const show = action.payload;
            console.log('wykonuje się')
            show ? state.display = "block" : state.display = "none";
            console.log('show: ', show);
            console.log('state: ', state.display);
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;