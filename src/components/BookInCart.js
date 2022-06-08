import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const BookInCart = ({ id, authors, title, amount }) => {

    const dispatch = useDispatch();

    const removeBook = () => {
        dispatch(
            cartActions.removeBook({
                id,
                authors,
                title,
                amount,
            })
        );
    };



    return (
        <>
            <p>{authors} - {title} x {amount}</p>
            <button onClick={removeBook}>remove</button>
        </>
    )
}

export default BookInCart;