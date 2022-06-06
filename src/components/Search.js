import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../store/search-slice";
import BooksList from "./BooksList";
import axios from "axios";

const Search = () => {
    const books = useSelector(state => state.search.books);
    const searchValue = useSelector(state => state.search.searchValue)

    const dispatch = useDispatch();

    
    const setSearchValue = (value) => dispatch(searchActions.setSearchValue(value));

    const getBooks = async () => {
        let books = [];
        await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyAibzWNKTvyt_UhKz34hBNWY5TvlOvz4EQ&maxResults=20`)
            .then(res => books = res.data.items)
            .catch(err => console.log(err))
        dispatch(searchActions.getBooks(books));
    }

    return(
        <>
            <div>
                <input
                    type="text"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    onKeyPress={e => {if (e.key === "Enter") getBooks()}}
                />
                <button onClick={() => getBooks()}>search</button>
            </div>
            <div>{ <BooksList booksData={books} /> }</div>
        </>
    )
}

export default Search;