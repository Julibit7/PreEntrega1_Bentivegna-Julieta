import React, { useContext } from "react";
import './CartItem.css'
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, title, price, quantity }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemoveItemClick = () => {
        
        removeItem(id);
    };

    return (
        <div className="CartItem">
            <h4>{title}</h4>
            <p>Producto: {name}</p>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Total: ${price * quantity}</p>
            <button className="removeb" onClick={handleRemoveItemClick}>Eliminar</button>
        </div>
    );
};

export default CartItem;