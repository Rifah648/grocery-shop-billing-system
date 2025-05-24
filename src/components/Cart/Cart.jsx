import { useState } from "react";

function Cart({ cart, increaseQty, decreaseQty, removeFromCart, clearCart, addBillToHistory }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = total * 0.05;
  const grandTotal = total + tax;

  const handlePayment = () => {
    if (!name || !phone || !pin) {
      alert("Please fill all fields to proceed with payment.");
      return;
    }

    const billData = {
      id: Date.now(),
      name,
      phone,
      cart,
      total: total.toFixed(2),
      tax: tax.toFixed(2),
      grandTotal: grandTotal.toFixed(2),
      date: new Date().toLocaleString(),
    };

    addBillToHistory(billData);
    clearCart();

    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-green-600 mt-4 mb-4">Cart</h2>

      {cart.length === 0 ? (
        <p className="text-xl text-center font-semibold">No items in cart</p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-4 overflow-x-auto">
          <div id="print-area">
            <div className="mb-4">
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Phone:</strong> {phone}</p>
              <p><strong>Date:</strong> {new Date().toLocaleString()}</p>
            </div>

            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-green-100">
                  <th className="p-2 border">Product</th>
                  <th className="p-2 border">Qty</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Total</th>
                  <th className="p-2 border print:hidden">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="p-2 border">{item.product}</td>
                    <td className="p-2 border text-center">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300 print:hidden"
                        onClick={() => decreaseQty(item.id)}
                      >
                        −
                      </button>
                      <span className="px-3">{item.qty}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300 print:hidden"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </td>
                    <td className="p-2 border">{item.price}৳</td>
                    <td className="p-2 border">{(item.price * item.qty).toFixed(2)}৳</td>
                    <td className="p-2 border text-center print:hidden">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="text-right mt-4 mb-4">
              <p>Subtotal: <strong>{total.toFixed(2)}৳</strong></p>
              <p>Tax (5%): <strong>{tax.toFixed(2)}৳</strong></p>
              <p className="text-lg font-bold text-green-700">Grand Total: {grandTotal.toFixed(2)}৳</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 print:hidden mt-4">
            <input
              type="text"
              placeholder="Customer Name"
              className="border border-gray-300 px-4 py-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 px-4 py-2 rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="PIN for Payment"
              className="border border-gray-300 px-4 py-2 rounded"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>

          <button
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded print:hidden"
            onClick={handlePayment}
            disabled={!name || !phone || !pin}
          >
            Confirm Payment & Print
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
