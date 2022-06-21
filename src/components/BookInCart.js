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
            <td data-label="author(s):" className="align-middle">{authors.map(author => <div>{author}</div>)}</td>
            <td data-label="title:" className="align-middle"><div>{title}</div></td>
            <td data-label="price:" className="text-lg-center align-middle text-nowrap"><div>{price.toFixed(2)} $</div></td>
            <td data-label="amount:" className="text-lg-center align-middle text-nowrap">
                <div>
                    <button className="btn btn-sm btn-danger" onClick={addBook}><FontAwesomeIcon icon={faPlus} /></button>
                    <span className="mx-2 h6">{amount}</span>
                    <button className="btn btn-sm btn-danger" onClick={removeBook}><FontAwesomeIcon icon={faMinus} /></button>
                </div>
            </td>
        </tr>
    )
}

export default BookInCart;