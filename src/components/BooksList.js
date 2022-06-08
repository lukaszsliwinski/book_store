import Book from "./Book";


const BooksList = ({ booksData }) => {
    return (
        <div className="d-flex flex-wrap justify-content-around">
            {booksData.map(item => {
                let coverUrl = "";
                try {
                    coverUrl = item.volumeInfo.imageLinks.thumbnail;
                } catch {
                    coverUrl = "no-cover.png";
                };

                return (
                    <Book
                        id={item.etag}
                        author={item.volumeInfo.authors}
                        title={item.volumeInfo.title}
                        imgSrc={coverUrl}
                    />
                )
            })}
        </div>
    )
}


export default BooksList;