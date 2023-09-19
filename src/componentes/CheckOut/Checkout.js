import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import React, { useState, useContext } from "react"
import { db } from "../../services/Firebase/firebaseConfig"
import { CartContext } from "../../context/CartContext"
import './Checkout.css'

const Checkout = () => {
    const[user, setUser]=useState({})
    const[validateEmail, setValidateEmail]=useState('')
    const[orderId, setOrderId]=useState('')
    const {cart, totalQuantity, clearCart}=useContext(CartContext)
    const datosComprador = (e) =>{
      setUser({
        ...user,
        [e.target.name]:e.target.value
      })
    }
    const finalizarCompra = (e) => {
        e.preventDefault()
        if(!user.name && !user.phone){
           alert('Por favor complete los datos')
        }else {
            let order = {
                user,
                item:cart,
                total:totalQuantity,
                date:serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas,order)
            .then((res)=> {
             setOrderId(res.id)
             clearCart()
            })
            .catch((error)=>console.log(error))
        }
    }
    
    return (   
       <div>
        {orderId !== '' 
        ?<div>
            <h2>Tu orden fue generada con exito!</h2>
            <h5>Su id de registro es: {orderId}</h5>
        </div>
        : <div>
        <h2>Checkout</h2>
        <h5>Por favor llenar con sus datos</h5>
        <form onSubmit={finalizarCompra}>
            <div>
                <label>Nombre Completo:</label>
                <input onChange={datosComprador} type="text" placeholder="ej: Ganondorf Dragmire" name="name"/>
            </div>
            <div>
                <label>Numero de telefono:</label>
                <input onChange={datosComprador} type="number" placeholder="ej: +541133103562" name="phone"/>
            </div>
            <div>
                <label>Direccion de email:</label>
                <input onChange={datosComprador} type="email" placeholder="ej: epona@gmail.com" name="mail"/>
            </div>
            <div>
                <label>Repita su email:</label>
                <input type="email" placeholder="ej: epona@gmail.com" name="mail" onChange={((e)=>setValidateEmail(e.target.value))}/>
            </div>
            <button className="botonfinal" type="submit" disabled={validateEmail !== user.mail}>Generar Orden</button>
        </form>
    </div> }
       </div>
    )
}


export default Checkout