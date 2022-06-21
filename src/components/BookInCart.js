import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const BookInCart = ({ id, authors, title, price, amount }) => {

    const dispatch = useDispatch();

    const addBook = () => {
        dispatch(cartActions.addBook({
            id,
            authors,
            title,
            price,
        }));
    };

    const removeBook = () => {
        dispatch(cartActions.removeBook({ id }));
    };

    return (
        <tr>
            <td className="align-middle">{authors.map(author => <p className="m-0">{author}</p>)}</td>
            <td className="align-middle">{title}</td>
            <td className="text-center align-middle">{price.toFixed(2)} $</td>
            <td className="text-center align-middle">{amount}</td>
            <td className="text-center align-middle">
                <button className="btn btn-sm btn-danger" onClick={addBook}><FontAwesomeIcon icon={faPlus} /></button>
            </td>
            <td className="text-center align-middle">
                <button className="btn btn-sm btn-danger" onClick={removeBook}><FontAwesomeIcon icon={faMinus} /></button>
            </td>
        </tr>
    )
}

export default BookInCart;