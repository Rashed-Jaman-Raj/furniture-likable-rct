import React from 'react'
import { getImgUrl } from '../../utils/getImageUrl'
import Rating from '../../components/navbar/Rating'
import { FiPlus } from "react-icons/fi";

const ProductCard = ({product}) => {
  return (
    <div className='border border-gray-300 rounded-md hover:shadow-lg duration-200 overflow-hidden'>
      <div className='hover:scale-104 duration-200 cursor-pointer'>
        <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
      </div>
      <div className='p-6'>
        <h4 className='text-base mb-1'>{product.category}</h4>
        <h3 className='font-semibold text-xl mb-2'>{product.name}</h3>
        <Rating rating={product.rating}/>
        <div className=' mt-5 flex justify-between items-center'>
          <p className='text-gray-950 font-bold text-lg'><sup>$</sup> <span>{product.price}</span></p>
            <button className='bg-gray-950 text-white hover:bg-black/55 p-2 rounded-full cursor-pointer'>
            <FiPlus />
            </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
