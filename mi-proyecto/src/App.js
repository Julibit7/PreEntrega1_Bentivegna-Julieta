
import './App.css';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainter';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos!'}/>
    </div>
  );
}

export default App;
