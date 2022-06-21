import Book from "./Book";


const BooksList = ({ booksData }) => {

    // Render card for every imported book
    return (
        <div className="container d-flex flex-wrap justify-content-around">
            {booksData.map(item => {

                // Check if there is cover img in response data
                // Set default if needed
                let coverUrl = "";
                try {
                    coverUrl = item.volumeInfo.imageLinks.thumbnail;
                } catch {
                    coverUrl = "no-cover.png";
                };

                // Check if there is price in response data
                // Set default if needed
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