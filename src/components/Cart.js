import { useSelector, useDispatch } from "react-redux";
import { cartActions } from '../store/cart-slice';
import BookInCart from "./BookInCart";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = () => {
    // Assign state to values
    const totalPrice = Math.abs(Number(useSelector(state => state.cart.totalPrice))).toFixed(2);
    const selectedBooks = useSelector(state => state.cart.selectedBooks);
    const visible = useSelector(state => state.cart.visible);

    const dispatch = useDispatch();

    // Dispatch functions from cart-slice
    const showCart = () => {
        dispatch(cartActions.showHideCart(true));
    };

    const hideCart = () => {
        dispatch(cartActions.showHideCart(false));
    };

    const submitOrder = () => {
        dispatch(cartActions.showHideCart(false));
        dispatch(cartActions.clearCart());
    };
    
    return (
        <>
            {/* Button to show cart */}
            <button className="cart-button fixed-top btn btn-danger btn-lg m-3 ml-auto" onClick={showCart}>
                <FontAwesomeIcon icon={faCartShopping} /> {totalPrice} $
            </button>

            {/* Cart with selected items rendered as modal */}
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

                    {/* Table with selected books */}
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

                {/* Footer with total price and buttons to submit or cancel */}
                <Modal.Footer>

                    {/* Render only cancel button if there is no items in cart*/}
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