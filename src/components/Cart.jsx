import React from "react";

const Cart = ({ cart, setCart }) => {
  // Handle quantity change
  const handleQuantityChange = (id, delta) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
    );
  };

  // Handle remove product
  const handleRemoveProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate total price for each item
  const getTotalPrice = (item) => item.price * item.quantity;

  // Calculate subtotal for all cart items
  const getSubtotal = () =>
    cart.reduce((total, item) => total + getTotalPrice(item), 0);

  // Set shipping cost
  const shippingCost = 5.99;

  // Calculate total with shipping
  const getTotalWithShipping = () => getSubtotal() + shippingCost;

  return (
    <div className="bg-white p-4 max-w-4xl mx-auto">
      {/* Back to Home Button */}
      <button className="mb-4 bg-red-500 text-white px-4 py-2 rounded">
        Back to Home
      </button>

      {/* Cart Items */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-4 gap-4 items-center mb-4 border-b pb-4"
        >
          {/* Product Image and Details */}
          <div className="flex items-center">
            <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          </div>

          {/* Quantity Adjustments */}
          <div className="flex items-center">
            <button
              onClick={() => handleQuantityChange(item.id, -1)}
              disabled={item.quantity === 1}
              className="bg-gray-300 text-black px-2 py-1 rounded"
            >
              -
            </button>
            <span className="mx-4 text-lg">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.id, 1)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              +
            </button>
          </div>

          {/* Total Price */}
          <div className="text-right">
            <span className="text-xl font-semibold">
              ${getTotalPrice(item).toFixed(2)}
            </span>
          </div>

          {/* Remove Product Button */}
          <div className="text-right">
            <button
              onClick={() => handleRemoveProduct(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Subtotal, Shipping, and Total Calculation */}
      <div className="flex justify-end flex-col items-end">
      <div className="bg-white border  p-4 w-1/2  rounded-lg mt-8">
        <div className="flex justify-between mb-2">
          <span className="text-lg font-semibold">Subtotal:</span>
          <span>${getSubtotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-lg font-semibold">Shipping:</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t pt-2">
          <span className="text-lg font-semibold">Total:</span>
          <span>${getTotalWithShipping().toFixed(2)}</span>
        </div>
              {/* Checkout Button */}
        <div className="text-right mt-4">
        <button className="bg-red-500 text-white px-6 py-2 rounded">
          Checkout
        </button>
      </div>
      </div>
      </div>


    </div>
  );
};

export default Cart;