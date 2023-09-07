
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBc4uk0PTmWVvShvznmT-zQun18phU4hD4",
  authDomain: "ecommerce-6094c.firebaseapp.com",
  projectId: "ecommerce-6094c",
  storageBucket: "ecommerce-6094c.appspot.com",
  messagingSenderId: "667455235128",
  appId: "1:667455235128:web:3a95e3410f5c19bd8f32cd"
};



const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)