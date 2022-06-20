import { useSelector, useDispatch } from "react-redux";
import { cartActions } from '../store/cart-slice';
import BookInCart from "./BookInCart";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
    const totalPrice = useSelector(state => state.cart.totalPrice).toFixed(2);
    const selectedBooks = useSelector(state => state.cart.selectedBooks);
    const visible = useSelector(state => state.cart.visible);

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
                <button className="btn btn-danger btn-lg m-3" onClick={showCart} data-bs-toggle="modal" data-bs-target="#modalCart">
                    <FontAwesomeIcon icon={faCartShopping} /> {totalPrice} $
                </button>
            </div>

            <Modal show={visible} onHide={hideCart}>
                <Modal.Header closeButton>
                    <Modal.Title>Order summary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
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
                        <button onClick={hideCart}>Submit your order</button>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    Modal footer
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Cart;