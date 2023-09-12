import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/Firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, 'products', itemId);
    getDoc(docRef)
      .then(response => {
        if (response.exists) {
          const data = response.data();
          const productAdapted = { id: response.id, ...data };
          setProduct(productAdapted);
        } else {
          console.log("El producto no existe");
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <div>
    <p>Cargando...</p>
    </div>;
  }
  return product 
  ? <ItemDetail {...product}/> 
  : <h2>NOT FOUND</h2>;
};


export default ItemDetailContainer;