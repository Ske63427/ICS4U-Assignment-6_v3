import { StoreProvider } from "../context";
import { useStoreContext } from "../context";
import Header from '../components/Header.jsx';
import './CartView.css'

function CartView() {
    const { cart, setCart } = useStoreContext();
    console.log(cart);
    // const cartItems = cart._root.entries;

    return(
        <div>
            <Header/>
            <h1>Cart View</h1>
            {cart._root.entries.map(([key, item], index) => (
                <div className="cart-items" key={index}>
                    <img
                        id="cart-poster"
                        src={`https://image.tmdb.org/t/p/w500${item.url}`}
                        alt={`${item.title}-poster`}/>
                    <h1 id="cart-hone">{item.title}</h1>
                    <button
                        id="remove-button"
                        onClick={() => setCart((prevCart) => prevCart.delete(key))}
                    >Remove</button>
                </div>
                ))}
        </div>
    )
}

export default CartView;