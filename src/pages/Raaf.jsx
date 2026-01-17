
import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaStar, FaCartPlus } from 'react-icons/fa';

import { products } from '../utils/Products'; // ✅ import your product array
import { useCart } from './../context/CartContext';
import { getImgUrl } from '../utils/getImageURL';
import bannerImg from '../assets/banner.png'

const Raaf = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Convert id to number since your product IDs are numeric
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-20 text-xl">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} successfully added to your cart!`);
  };

  return (
  //   <div className="bg-cover bg-center bg-no-repeat min-h-screen">
    <div className='w-full min-h-screen relative bg-cover bg-center text-white flex justify-center items-center backdrop-blur-3xl' style = {{backgroundImage: `url(${bannerImg})`}}>

      <div className=" mx-auto px-4 pt-30 pb-15 grid md:grid-cols-2 gap-10 text-white bg-black/50">
      {/* Product Image */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={getImgUrl(product.imageUrl)}
          alt={product.name}
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between">
        <div>
          <h4 className="text-sm mb-1">{product.category}</h4>
          <h2 className="text-3xl font-bold mb-3">{product.name}</h2>

          {/* Rating */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`mr-1 ${
                  i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm">({product.rating})</span>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold mb-4">
            <sup>$</sup>{product.price}
          </p>

          {/* Description (optional) */}
          <p className="leading-relaxed mb-6">
            {/* This {product.category.toLowerCase()} is designed for comfort and style. Perfect for any modern space. */}
            {product.desc}
          </p>
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={handleAddToCart}
          className="bg-black text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition cursor-pointer"
        >
          <FaCartPlus />
          Add to Cart
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default Raaf;