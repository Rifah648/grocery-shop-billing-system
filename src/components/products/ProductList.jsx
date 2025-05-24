import { useState } from "react";
import Products from "../AllProducts/products";

function ProductList({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");

  
  const filteredProducts = Products.filter((product) =>
    product.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-green-600 mt-4 mb-2">Available Products</h2>

      
      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 px-4 py-2 rounded-md w-3/4 sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-[90%] mx-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white shadow rounded-xl p-4 max-w-sm">
              <h3 className="font-bold text-lg mb-1">{product.product}</h3>
              <p className="mb-2">Price: {product.price}৳</p>
              <button
                className=" btn btn-primary mt-2 bg-green-600 hover:bg-green-700 text-white px-1 py-2 rounded-md transition text-sm"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
