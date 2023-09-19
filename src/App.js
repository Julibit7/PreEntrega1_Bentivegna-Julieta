import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainter';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/CheckOut/Checkout';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
        <Route path='/' exact component={ItemListContainer} />
          <Route path='/category/:categoryId' component={ItemListContainer} />
          <Route path='/item/:itemId' component={ItemDetailContainer} />
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={Checkout} />
        </Switch>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}



export default App;