import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const Book = ({id, author, title}) => {

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
        <>
            <p>{author} - {title}</p>
            <button onClick={addBook}>add</button>
        </>
    );
};

export default Book;