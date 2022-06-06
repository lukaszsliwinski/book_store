import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";


const Books = ({ booksData }) => {
    const dispatch = useDispatch();

    
    const addBook = () => {
        dispatch(cartActions.addBook());
    }
    const removeBook = () => {
        dispatch(cartActions.removeBook());
    }

    return (
        <ul>
            {booksData.map(item => {
                return (
                    <li key={item.id}>
                        {item.volumeInfo.authors} - {item.volumeInfo.title}
                        <button onClick={addBook}>add</button>
                        <button onClick={removeBook}>remove</button>
                    </li>)
                })
            }
        </ul>
    )
};

export default Books;