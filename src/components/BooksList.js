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

                let price = 24.99;
                try {
                    price = item.saleInfo.listPrice.amount;
                } catch {};

                let authors = [];
                try {
                    item.volumeInfo.authors.map(author => authors.push(author));
                } catch {};

                return (
                    <Book
                        id={item.etag}
                        authors={authors}
                        title={item.volumeInfo.title}
                        price={price}
                        imgSrc={coverUrl}
                    />
                )
            })}
        </div>
    )
}


export default BooksList;