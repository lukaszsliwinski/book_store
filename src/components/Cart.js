import { useSelector } from "react-redux";
import BookInCart from "./BookInCart";

const Cart = () => {
    const totalPrice = useSelector(state => state.cart.totalPrice).toFixed(2);
    const selectedBooks = useSelector(state => state.cart.selectedBooks)
    
    return (
        <>
            <div>Cart: {totalPrice} $</div>
            <p>Selected books:</p>
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
            </ul>
        </>

    )
}

export default Cart;