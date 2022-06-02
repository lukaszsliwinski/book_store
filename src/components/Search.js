import { useState } from "react";
import axios from "axios";
import Book from "./Book";

const Search = () => {
    const [search, setSearch] = useState("");
    const [books, setData] = useState([]);

    const getBooks = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAibzWNKTvyt_UhKz34hBNWY5TvlOvz4EQ&maxResults=20`)
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
        return true;
    }

    return(
        <>
            <div>
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyPress={e => {if (e.key === "Enter") getBooks()}}
                />
                <button onClick={getBooks}>search</button>
            </div>
            <div>{ <Book books={books} /> }</div>
        </>
    )
}

export default Search;