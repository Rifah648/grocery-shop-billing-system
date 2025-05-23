
import './App.css'





import { useState } from "react";
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import ProductList from './components/products/ProductList';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className='w-3/4 mx-auto'>
    <Navbar></Navbar>
     <Banner></Banner>

      <div className="p-6 grid md:grid-cols-2 gap-6 cart bg-gray-50 shadow-lg rounded-lg">
        <ProductList addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>

<Footer></Footer>
    </div>
  );
}

export default App;
