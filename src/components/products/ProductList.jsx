const products = [

  {
    "id": 1,
    "product": "Rice",
    "price": 60,
    "image": "https://i.ibb.co/zGt1P3m/rice.jpg"
  },
  {
    "id": 2,
    "product": "Oil",
    "price": 150,
    "image": "https://i.ibb.co/fDxDNhZ/oil.jpg"
  },
  {
    "id": 3,
    "product": "Onion",
    "price": 40,
    "image": "https://i.ibb.co/ZmCCYZ5/onion.jpg"
  },
  {
    "id": 4,
    "product": "Potato",
    "price": 30,
    "image": "https://i.ibb.co/Z6RVnxb/potato.jpg"
  },
  {
    "id": 5,
    "product": "Milk",
    "price": 80,
    "image": "https://i.ibb.co/HXWFpLC/milk.jpg"
  },
  {
    "id": 6,
    "product": "Bread",
    "price": 40,
    "image": "https://i.ibb.co/gSfqYJv/bread.jpg"
  },
  {
    "id": 7,
    "product": "Egg",
    "price": 12,
    "image": "https://i.ibb.co/VMfp3RL/egg.jpg"
  },
  {
    "id": 8,
    "product": "Sugar",
    "price": 90,
    "image": "https://i.ibb.co/nBcT5dd/sugar.jpg"
  },
  {
    "id": 9,
    "product": "Salt",
    "price": 25,
    "image": "https://i.ibb.co/HFv7rWh/salt.jpg"
  },
  {
    "id": 10,
    "product": "Tea",
    "price": 180,
    "image": "https://i.ibb.co/NNgzt5Z/tea.jpg"
  },
  {
    "id": 11,
    "product": "Coffee",
    "price": 220,
    "image": "https://i.ibb.co/4m8Dtg7/coffee.jpg"
  },
  {
    "id": 12,
    "product": "Soap",
    "price": 35,
    "image": "https://i.ibb.co/8mtCRm7/soap.jpg"
  },
  {
    "id": 13,
    "product": "Toothpaste",
    "price": 60,
    "image": "https://i.ibb.co/0BCtZK5/toothpaste.jpg"
  },
  {
    "id": 14,
    "product": "Shampoo",
    "price": 120,
    "image": "https://i.ibb.co/1MkS0Qx/shampoo.jpg"
  },
  {
    "id": 15,
    "product": "Tissue Paper",
    "price": 25,
    "image": "https://i.ibb.co/zG4NDwY/toilet-paper.jpg"
  },
  {
    "id": 16,
    "product": "Detergent",
    "price": 90,
    "image": "https://i.ibb.co/7Q6P8jJ/detergent.jpg"
  },
  {
    "id": 17,
    "product": "Biscuits",
    "price": 50,
    "image": "https://i.ibb.co/HB6gBd7/biscuits.jpg"
  },
  {
    "id": 18,
    "product": "Juice",
    "price": 100,
    "image": "https://i.ibb.co/YX8FHRR/juice.jpg"
  },
  {
    "id": 19,
    "product": "Noodles",
    "price": 45,
    "image": "https://i.ibb.co/vX15RGJ/noodles.jpg"
  },
  {
    "id": 20,
    "product": "Soft Drinks",
    "price": 35,
    "image": "https://i.ibb.co/3WCHqDt/soft-drinks.jpg"
},

{
  "id": 21,
  "product": "Chips",
  "price": 20,
  "image": "https://i.ibb.co/7g3x5qY/chips.jpg"
}


];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-green-600 mt-4 mb-4">Available Products</h2>
      <div className=" grid grid-cols-2 sm:grid-cols-3 gap-4 w-60%">
        {products.map((product) => (
          <div key={product.id} className="card bg-white shadow rounded-xl p-4">
            <div>
              <span className="">
                <img src={product.image} alt="" />
              </span>

            <h3 className="font-bold text-lg">{product.product}</h3>
            </div>
            <p>Price: {product.price}৳</p>
            <button
              className="btn btn-primary btn-sm mt-2 bg-green-600 text-white w-25 h-10 rounded-md"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
