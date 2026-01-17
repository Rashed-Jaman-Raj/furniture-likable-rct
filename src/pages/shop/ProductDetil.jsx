import React from 'react'
import { getImgUrl } from '../../utils/getImageUrl'
import { useParams } from 'react-router-dom'
import { products } from '../../utils/Products'
import Rating from '../../components/navbar/Rating'
import detailBannerImg from "../../assets/products/productdetailimg.png"


const ProductDetil = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <div className=' min-h-screen bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${detailBannerImg})`}}>
      <div className=' bg-white/70 backdrop-blur-sm max-w-4xl mx-auto p-6 rounded-lg shadow-lg mt-12'>
        <div className=' flex flex-col md:flex-row gap-10'>
          {/* product image */}
          <div className=' flex-1'>
              <img src={getImgUrl(product.imageUrl)} alt="{product.name} Photo" />
          </div>

          {/* product info */}
          <div className='flex-1 '>
            <h2 className=' text-3xl font-bold mb-2'>{product.name}</h2>
            <p>Category: {product.category}</p>
            <Rating rating={product.rating} />
            <p className=' text-2xl font-bold text-gray-950 mt-4'><sup>$</sup>{product.price}</p>
            <p className=' mt-4'>{product.Description}</p>
            <button className=' mt-6 bg-gray-600 text-white hover:bg-black px-6 py-2 rounded-md cursor-pointer'>
              Add to Cart
            </button>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default ProductDetil
