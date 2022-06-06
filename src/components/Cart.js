import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Cart = () => {
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const dispatch = useDispatch();
    const addBook = () => {
        dispatch(cartActions.addBook());
    }
    const removeBook = () => {
        dispatch(cartActions.removeBook());
    }
    
    return (
        <>
            <div>{totalAmount}</div>
            <button onClick={addBook}>+</button>
            <button onClick={removeBook}>-</button>
        </>

    )
}

export default Cart;