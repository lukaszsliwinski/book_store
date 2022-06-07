import Book from "./Book";


const BooksList = ({ booksData }) => {
    return (
        <ul>
            {booksData.map(item => {
                let coverUrl = "";
                try {
                    coverUrl = item.volumeInfo.imageLinks.thumbnail;
                } catch {
                    coverUrl = "no-cover.png";
                };

                return (
                    <li key={item.etag}>
                        <Book
                            id={item.etag}
                            author={item.volumeInfo.authors}
                            title={item.volumeInfo.title}
                            imgSrc={coverUrl}
                        />
                    </li>
                )
            })}
        </ul>
    )
}


export default BooksList;