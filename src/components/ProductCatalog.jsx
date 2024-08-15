import React from "react";

const ProductCatalog = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 max-w-4xl mx-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
        >
          <img src={product.image} alt={product.name} className="w-32 h-32 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;