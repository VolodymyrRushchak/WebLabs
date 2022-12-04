import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Home from './components/home/home';
import Catalog from "./components/catalog/catalog";
import Item from "./components/item/item";
import ShoppingCart from "./components/shoppingCart/shoppingCart";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CheckoutPage from "./components/checkoutPage/checkoutPage";


function App() {
  return (
    <Provider store={store}>
      <Router>
          <div className='App'>
            <Routes>
              <Route path="/item/:id" element={<Item/>} />
              <Route path="/catalog" element={<Catalog/>} />
              <Route path="/cart" element={<ShoppingCart/>} />
              <Route path="/checkout" element={<CheckoutPage/>} />
              <Route path="/" element={<Home/>} />
            </Routes>
          </div>
      </Router>
    </Provider>
  );
}

export default App;
