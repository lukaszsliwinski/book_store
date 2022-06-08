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
        <div className="card m-2" style={{width: '18rem',}}>
            <div className="img-box">
                <img src={imgSrc} className="card-img-top" alt="cover" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{author}</p>
                <a href="#" className="btn btn-primary" onClick={addBook}>buy</a>
            </div>
        </div>
    );
};

export default Book;