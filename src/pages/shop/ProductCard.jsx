import React from "react";
import { getImgUrl } from "../../utils/getImageURL";
import Rating from "../../components/navbar/Rating";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../shop/CartContext";
import { toast } from "react-toastify";


const ProductCard = ({ product }) => {
  const {addToCart} = useCart();

  return (
    <div className="border border-gray-300 rounded-md hover:shadow-black/35 hover:shadow-lg duration-200 overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="hover:scale-104 duration-200 cursor-pointer">
          <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
        </div>
      </Link>
      {/* <div className='hover:scale-104 duration-200 cursor-pointer'>
        <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
      </div> */}
      <div className="p-6">
        <h4 className="text-base mb-1">{product.category}</h4>
        <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
        <Rating rating={product.rating} />
        <div className=" mt-5 flex justify-between items-center">
          <p className="text-gray-950 font-bold text-lg">
            <sup>$</sup> <span>{product.price}</span>
          </p>
          <button 
          onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              addToCart(product);
              toast.success(`${product.name} successfully added to your cart!`);
            }}

          className='bg-black/70 text-white p-2 rounded-full items-center cursor-pointer hover:bg-black'>
            <BsCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
