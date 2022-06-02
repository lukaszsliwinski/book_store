const Book = ({ books }) => {
    return (
        <ul>
            {books.map(item => <li key={item.id}>{item.volumeInfo.authors} - {item.volumeInfo.title}</li>) }
        </ul>
    )
};

export default Book;