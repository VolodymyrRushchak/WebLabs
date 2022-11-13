import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Home from './components/home/home';
import Cart from './components/cart/cart';
import Catalog from "./components/catalog/catalog";
import Item from "./components/item/item";


function App() {
  return (
    <Router>
        <div className='App'>
          <Routes>
            <Route path="/item/:id" element={<Item/>} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
