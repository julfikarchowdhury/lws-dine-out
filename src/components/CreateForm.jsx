import { useState } from "react";

import Product from "./Product";

const CreateForm = ({ changeOrderState }) => {
  const products = [
    {
      icon: "/src/assets/burger.svg",
      name: "Cheeseburger",
      price: 350,
    },
    {
      icon: "/src/assets/sushi.svg",
      name: "Sushi Roll",
      price: 600,
    },
    {
      icon: "/src/assets/taco.svg",
      name: "Taco",
      price: 300,
    },
    {
      icon: "/src/assets/spaghetti.svg",
      name: "Spaghetti",
      price: 450,
    },
    {
      icon: "/src/assets/ice-cream.svg",
      name: "Ice Cream",
      price: 250,
    },
  ];
  const [customerName, setCustomerName] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const toggleProduct = (product) => {
    const exists = selectedProducts.find((p) => p.name === product.name);
    if (exists) {
      setSelectedProducts((prev) =>
        prev.filter((p) => p.name !== product.name)
      );
    } else {
      setSelectedProducts((prev) => [...prev, product]);
    }
  };

  const placeOrder = () => {
    if (!customerName || selectedProducts.length === 0) {
      alert("Please Enter Customer Name.");
      return;
    }

    const totalAmount = selectedProducts.reduce(
      (acc, cur) => acc + cur.price,
      0
    );

    const newOrder = {
      id: Date.now(),
      name: customerName,
      items: selectedProducts.length,
      amount: totalAmount,
      status: "pending",
    };

    changeOrderState((prev) => [newOrder, ...prev]);
    setSelectedProducts([]);
    setCustomerName("");
  };
  const total = selectedProducts.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {products.map((product, index) => (
            <Product
              key={index}
              icon={product.icon}
              name={product.name}
              price={product.price}
              isSelected={
                !!selectedProducts.find((p) => p.name === product.name)
              }
              toggleProduct={() => toggleProduct(product)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={placeOrder}
        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      >
        Place Order (BDT {total})
      </button>
    </div>
  );
};

export default CreateForm;
