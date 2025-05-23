function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = total * 0.05;
  const grandTotal = total + tax;

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-green-600 mt-4 mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-xl text-center font-semibold">No items in cart</p>
      ) : (
        <div className="overflow-x-auto w-40% cart bg-white shadow-lg rounded-lg p-4">
          <table className="table w-full">
            <thead>
              <tr className="border-2 border-gray-300 px-1 py-1 ">
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="border-2 border-gray-300 p-1">
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-1">{item.product}</td>
                  <td className="px-4 py-1">{item.qty}</td>
                  <td className="px-8 py-1">{item.price}৳</td>
                  <td className="px-9 py-1">{item.price * item.qty}৳</td>
                  <td>
                    <button
                      className="btn btn-error btn-xs "
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 text-right">
            <p>Subtotal: {total.toFixed(2)}৳</p>
            <p>Tax (5%): {tax.toFixed(2)}৳</p>
            <p className="font-bold text-lg">Grand Total: {grandTotal.toFixed(2)}৳</p>
            <button className="btn btn-success mt-2" onClick={() => window.print()}>
              Print Bill
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
