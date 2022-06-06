import Book from "./Book";


const BooksList = ({ booksData }) => {
    return (
        <ul>
            {booksData.map(item => {
                return (
                    <li key={item.id}>
                        <Book
                            id={item.id}
                            author={item.volumeInfo.authors}
                            title={item.volumeInfo.title}
                        />
                    </li>
                )
            })}
        </ul>
    )
}


export default BooksList;