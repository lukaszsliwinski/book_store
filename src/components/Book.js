import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const Book = ({id, authors, title, price, imgSrc}) => {

    const dispatch = useDispatch();

    const addBook = () => {
        dispatch(
            cartActions.addBook({
                id,
                authors,
                title,
                price,
            })
        );
    };

    return (
        <div className="card m-2 text-white bg-dark mb-3" style={{width: '25rem',}}>
            {console.log(authors)}
            <div className="d-flex flex-row">
                <div className="img-box m-3" style={{width: 'fit-content', height: '200px',}}>
                    <img src={imgSrc} className="card-img-top h-100" alt="cover" />
                </div>
                <div className="m-2">
                    <h5 className="card-title">{title}</h5>
                    {authors.map(author => <p className="m-0">{author}</p>)}
                </div>
            </div>
            <div className="card-footer text-right">
                <a href="#" className="btn btn-danger" onClick={addBook}>buy {price} $</a>
            </div>
        </div>
    );
};

export default Book;