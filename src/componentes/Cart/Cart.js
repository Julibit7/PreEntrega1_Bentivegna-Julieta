import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext)

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay nada en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        );
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h4>Total: ${totalPrice}</h4>
            <button onClick={() => clearCart()} className='botonCart'>Limpiar carrito</button>
            <button className='botonCart'><Link to='/checkout'>Checkout</Link></button>
        </div>
    );
}

export default Cart;