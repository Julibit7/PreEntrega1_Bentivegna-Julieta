import React from "react";

const CartItem = ({ id, title, price, quantity }) => {
    return (
        <div className="CartItem">
            <h4>{title}</h4>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Total: ${price * quantity}</p>
        </div>
    );
};

export default CartItem;