import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchValue: "",
        books: [],
    },
    reducers: {
        // Function for save value from input area to state
        setSearchValue(state, action) {
            const value = action.payload;
            state.searchValue = value;
        },

        // Function for save imported books to state
        getBooks(state, action) {
            const books = action.payload;
            state.books = books;
        },
    }
});

export const searchActions = searchSlice.actions;

export default searchSlice;