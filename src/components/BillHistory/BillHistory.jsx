function BillHistory({ bills, clearHistory }) {
  if (bills.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No bills found in history.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-green-700">Bill History</h2>
        <button
          onClick={clearHistory}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
        >
          Clear History
        </button>
      </div>

      {bills.slice().reverse().map((bill) => (
        <div key={bill.id} className="border rounded-lg shadow p-4 mb-6 bg-white">
          <div className="mb-4 text-sm text-gray-700">
            <p><strong>Name:</strong> {bill.name}</p>
            <p><strong>Phone:</strong> {bill.phone}</p>
            <p><strong>Date:</strong> {bill.date}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-3 py-1">Product</th>
                  <th className="border px-3 py-1">Qty</th>
                  <th className="border px-3 py-1">Price</th>
                  <th className="border px-3 py-1">Total</th>
                </tr>
              </thead>
              <tbody>
                {bill.cart.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-3 py-1">{item.product}</td>
                    <td className="border px-3 py-1">{item.qty}</td>
                    <td className="border px-3 py-1">{item.price}৳</td>
                    <td className="border px-3 py-1">{(item.price * item.qty).toFixed(2)}৳</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-right mt-2 text-sm font-semibold">
            <p>Subtotal: {bill.total}৳</p>
            <p>Tax (5%): {bill.tax}৳</p>
            <p className="text-green-700 text-base">Grand Total: {bill.grandTotal}৳</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BillHistory;
