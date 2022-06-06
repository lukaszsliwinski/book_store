import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const BookInCart = ({ id, author, title, amount }) => {

    const dispatch = useDispatch();

    const removeBook = () => {
        dispatch(
            cartActions.removeBook({
                id,
                author,
                title,
                amount,
            })
        );
    };



    return (
        <>
            <p>{author} - {title} x {amount}</p>
            <button onClick={removeBook}>remove</button>
        </>
    )
}

export default BookInCart;