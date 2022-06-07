import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

import './Book.css';

const Book = ({id, author, title, imgSrc}) => {

    const dispatch = useDispatch();

    const addBook = () => {
        dispatch(
            cartActions.addBook({
                id,
                author,
                title,
            })
        );
    };

    return (
        <div className="card" style={{width: '18rem',}}>
            <img src={imgSrc} className="card-img-top img-position" alt="cover" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{author}</p>
                <a href="#" className="btn btn-primary" onClick={addBook}>buy</a>
            </div>
        </div>
    );
};

export default Book;