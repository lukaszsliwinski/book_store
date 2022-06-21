import { useSelector, useDispatch } from "react-redux";
import { cartActions } from '../store/cart-slice';
import BookInCart from "./BookInCart";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = () => {
    const totalPrice = Math.abs(Number(useSelector(state => state.cart.totalPrice))).toFixed(2);
    const selectedBooks = useSelector(state => state.cart.selectedBooks);
    const visible = useSelector(state => state.cart.visible);

    const dispatch = useDispatch();

    const showCart = () => {
        dispatch(cartActions.showCart(true));
    };

    const hideCart = () => {
        dispatch(cartActions.showCart(false));
    };

    const submitOrder = () => {
        dispatch(cartActions.showCart(false));
        dispatch(cartActions.clearCart());
    };
    
    return (
        <>
            <button className="cart-button fixed-top btn btn-danger btn-lg m-3 ml-auto" onClick={showCart}>
                <FontAwesomeIcon icon={faCartShopping} /> {totalPrice} $
            </button>

            <Modal
                show={visible} 
                dialogClassName="cart-modal"
                onHide={hideCart}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Order summary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedBooks.length !==0 && <>
                        <table className="table table-hover table-secondary">
                            <thead>
                                <tr>
                                    <th scope="col">author(s)</th>
                                    <th scope="col">title</th>
                                    <th className="text-center" scope="col">price</th>
                                    <th className="text-center" scope="col">amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedBooks.map(item => {
                                    return (
                                        <BookInCart
                                            id={item.id}
                                            authors={item.authors}
                                            title={item.title}
                                            price={item.price}
                                            amount={item.amount}
                                        />
                                    )
                                })}
                            </tbody>

                        </table>
                    </>}
                    {selectedBooks.length === 0 && <p>Your cart is empty</p>}
                </Modal.Body>
                <Modal.Footer>
                    {selectedBooks.length !== 0 && <>
                        <p className="h5 mr-4">Total: {totalPrice} $</p>
                        <div>
                            <button className="btn btn-danger m-1" onClick={submitOrder}>Submit your order</button>
                            <button className="btn btn-danger m-1" onClick={hideCart}>Cancel</button>
                        </div>
                    </>}
                    {selectedBooks.length === 0 && <button className="btn btn-danger" onClick={hideCart}>Cancel</button>}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Cart;