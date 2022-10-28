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
import { useState } from "react";
import { HamstersContext } from "./contexts/hamstersContext";



function App() {
  const [hamsters, setHamsters] = useState([
    {
        id: 1, 
        age: 0.5,
        weight: 1.2,
        price: 75,
        name: 'Hendalf'
    },
    {
        id: 2, 
        age: 1.5,
        weight: 1.4,
        price: 65,
        name: 'Carl'
    },
    {
        id: 3, 
        age: 0.3,
        weight: 2.2,
        price: 115,
        name: 'McFly'
    },
    {
        id: 4, 
        age: 2.2,
        weight: 1.0,
        price: 86,
        name: 'Gotham'
    }
  ]);

  return (
    <Router>
      <HamstersContext.Provider value={hamsters}>
        <div className='App'>
          <Routes>
            <Route path="/item/:id" element={<Item/>} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </HamstersContext.Provider>
    </Router>
  );
}

export default App;
