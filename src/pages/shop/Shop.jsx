import React from 'react'
import bannerImg from "../../assets/banner.png"
import Products from './Products'

const Shop = () => {
  return (
    <section className='min-h-screen max-w-screen-2x1 mx-auto'>
      {/* banner */}
      <div className='w-full h-100 bg-cover bg-center flex items-center justify-center text-white' style={{backgroundImage: `url(${bannerImg})`}}>
        <h1 className='text-4xl font-bold'>Shop Our Products</h1>
      </div>
      <Products headline="What's Your Choice"/>
    </section>
  )
}

export default Shop
