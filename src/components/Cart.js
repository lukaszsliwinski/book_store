import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import BookInCart from "./BookInCart";

const Cart = () => {
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const selectedBooks = useSelector(state => state.cart.selectedBooks)
    const dispatch = useDispatch();
    const removeBook = () => {
        dispatch(cartActions.removeBook());
    }
    
    return (
        <>
            <div>total price: {totalPrice} zł</div>
            <p>Selected books:</p>
            <ul>
                {selectedBooks.map(item => {
                    return (
                        <li key={item.id}>
                            <BookInCart
                                id={item.id}
                                author={item.author}
                                title={item.title}
                                amount={item.amount}
                            />
                        </li>
                    )
                })}
            </ul>
        </>

    )
}

export default Cart;