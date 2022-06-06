import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchValue: "",
        books: [],
    },
    reducers: {
        setSearchValue(state, action) {
            const value = action.payload;
            state.searchValue = value;
        },
        getBooks(state, action) {
            const books = action.payload;
            state.books = books;
        },
    }
});

export const searchActions = searchSlice.actions;

export default searchSlice;