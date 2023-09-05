import React from "react";
import './CartItem.css'

const CartItem = ({ name, title, price, quantity }) => {
    return (
        <div className="CartItem">
            <h4>{title}</h4>
            <p>Producto: {name}</p>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Total: ${price * quantity}</p>
        </div>
    );
};

export default CartItem;