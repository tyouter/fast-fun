import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden font-strava-sans">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-700 text-base mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-strava-orange">${product.price}</span>
          <button className="bg-strava-orange hover:bg-strava-grenadier text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;