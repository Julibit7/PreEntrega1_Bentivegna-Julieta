import React from "react"; 
import cart from "./Assets/cart.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
 

  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={cart} alt="cart-widget" />
        <span style={{ marginLeft: "5px" }}>{totalQuantity}</span>
      </div>
    </Link>
  );
};

export default CartWidget;