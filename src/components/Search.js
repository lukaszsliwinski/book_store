import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../store/search-slice";
import BooksList from "./BooksList";
import axios from "axios";
import env from "react-dotenv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './Search.css';

const Search = () => {
    // assign state to values
    const books = useSelector(state => state.search.books);
    const searchValue = useSelector(state => state.search.searchValue)

    const dispatch = useDispatch();
    
    // Dispatch functions from search-slice
    const setSearchValue = (value) => dispatch(searchActions.setSearchValue(value));

    const getBooks = async () => {
        let books = [];
        await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=${env.API_KEY}&maxResults=40`)
            .then(res => books = res.data.items)
            .catch(err => console.log(err))
        dispatch(searchActions.getBooks(books));
    }

    return(
        <>
            {/* Search input */}
            <div className="d-flex justify-content-center my-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="search a book..."
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    onKeyPress={e => {if (e.key === "Enter") getBooks()}}
                />
                <button className="btn btn-danger mx-1 px-3" onClick={() => getBooks()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>

            {/* Background photo */}
            <div className="bg-photo"></div>

            {/* List of imported books */}
            <div>{ <BooksList booksData={books} /> }</div>
        </>
    )
}

export default Search;