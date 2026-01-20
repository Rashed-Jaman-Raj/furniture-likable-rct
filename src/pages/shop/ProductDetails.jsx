


import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../utils/Products";
import Rating from "../../components/navbar/Rating";
import detailBannerImg from "../../assets/products/productdetailimg.png"
import { getImgUrl } from "../../utils/getImageURL";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import { BsCartPlus } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";

// Replace this with your actual background image path or import
const backgroundImageUrl = "/assets/your-background-image.jpg"; // Update this path

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-10 text-center text-xl">Product not found.</div>;
  }

  const {addToCart} = useCart();

  return (
    <div
      className=" pt-20 h-screen relative bg-cover bg-center text-white bg-no-repeat"
      style={{ backgroundImage: `url(${detailBannerImg})` }}
    >
      <div className="bg-white/80 backdrop-blur-sm max-w-4xl mx-auto p-6 rounded-lg shadow-lg  ">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Product Image */}
          <div className="flex-1">
            <img
              src={getImgUrl(product.imageUrl)}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-1">Category: {product.category}</p>
            <Rating rating={product.rating} />
            <p className="text-2xl font-bold text-gray-900 mt-4">
              <sup>$</sup> {product.price}
            </p>
            <p className=" mt-4 text-gray-800">{product.Description}</p>
            <button 
            onClick={(e) => {
            addToCart(product);
            e.stopPropagation();
            e.preventDefault();
            toast.success(`${product.name} successfully added to your cart!`);
            }}
            className="flex justify-between items-center gap-3 mt-10 bg-gray-950 text-white hover:bg-green-800 px-35 py-2 rounded-md cursor-pointer ">
              <FaCartPlus />
              Add to Cart 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;