import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/ProductSlice';

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, image: product.img, name: product.name, price: product.price }));
  };

  return (
    <div
      key={product.id}
      className="inline-block max-w-xs rounded-lg overflow-hidden shadow-lg bg-white mx-2"
      style={{ minWidth: '280px' }}
    >
      <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <p className="font-bold text-lg">{product.name}</p>
        <p className="text-gray-500">Price: ${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
