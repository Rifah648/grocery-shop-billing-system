import { useState, useEffect } from "react";
import ProductList from "./components/products/ProductList";
import Cart from "./components/Cart/Cart";
import BillHistory from "./components/BillHistory/BillHistory";

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("shop");
  const [billHistory, setBillHistory] = useState([]);

  useEffect(() => {
    const storedBills = JSON.parse(localStorage.getItem("bills") || "[]");
    setBillHistory(storedBills);
  }, []);

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

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return;

    if (item.qty > 1) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const addBillToHistory = (billData) => {
    const updatedHistory = [...billHistory, billData];
    setBillHistory(updatedHistory);
    localStorage.setItem("bills", JSON.stringify(updatedHistory));
  };

  
  const clearBillHistory = () => {
    if (window.confirm("Are you sure you want to clear all bill history?")) {
      localStorage.removeItem("bills");
      setBillHistory([]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <nav className="mb-6 flex justify-center gap-4">
        <button
          onClick={() => setView("shop")}
          className={`px-4 py-2 rounded ${
            view === "shop" ? "bg-green-600 text-white" : "bg-gray-300"
          }`}
        >
          Shop Products
        </button>
        <button
          onClick={() => setView("cart")}
          className={`px-4 py-2 rounded ${
            view === "cart" ? "bg-green-600 text-white" : "bg-gray-300"
          }`}
          disabled={cart.length === 0}
          title={cart.length === 0 ? "Cart is empty" : ""}
        >
          View Cart ({cart.length})
        </button>
        <button
          onClick={() => setView("history")}
          className={`px-4 py-2 rounded ${
            view === "history" ? "bg-green-600 text-white" : "bg-gray-300"
          }`}
          disabled={billHistory.length === 0}
          title={billHistory.length === 0 ? "No bills yet" : ""}
        >
          Bill History ({billHistory.length})
        </button>
      </nav>

      {view === "shop" && <ProductList addToCart={addToCart} />}
      {view === "cart" && (
        <Cart
          cart={cart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          addBillToHistory={addBillToHistory}
        />
      )}
      {view === "history" && (
        <BillHistory bills={billHistory} clearHistory={clearBillHistory} />
      )}
    </div>
  );
}

export default App;
