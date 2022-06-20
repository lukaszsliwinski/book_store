import { useSelector, useDispatch } from "react-redux";
import { cartActions } from '../store/cart-slice';
import BookInCart from "./BookInCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
    const totalPrice = useSelector(state => state.cart.totalPrice).toFixed(2);
    const selectedBooks = useSelector(state => state.cart.selectedBooks);
    const display = useSelector(state => state.cart.display);

    const dispatch = useDispatch();

    const showCart = () => {
        dispatch(
            cartActions.showCart(true)
        );
    };

    const hideCart = () => {
        dispatch(
            cartActions.showCart(false)
        );
    };
    
    return (
        <>
            <div className="w-100 d-flex justify-content-end">
                <button className="btn btn-danger btn-lg m-3" onClick={showCart}>
                    <FontAwesomeIcon icon={faCartShopping} /> {totalPrice} $
                </button>
            </div>
            
            <ul style={{display: display,}}>
                {selectedBooks.map(item => {
                    return (
                        <li key={item.id}>
                            <BookInCart
                                id={item.id}
                                authors={item.authors}
                                title={item.title}
                                amount={item.amount}
                            />
                        </li>
                    )
                })}
                <button onClick={hideCart}>close cart</button>
            </ul>
        </>
    )
}

export default Cart;