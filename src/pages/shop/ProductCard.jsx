import React from 'react'
import { getImgUrl } from '../../utils/getImageUrl'

const ProductCard = ({product}) => {
  return (
    <div>
      <div className='bg-[#FAFAFA]'>
        <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
      </div>
    </div>
  )
}

export default ProductCard
