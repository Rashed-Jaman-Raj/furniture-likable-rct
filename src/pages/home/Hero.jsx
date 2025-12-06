import React from 'react'
import bannerImg from "../../assets/banner.png"
import { FaSearch } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='h-screen relative bg-cover bg-center text-white' style={{backgroundImage: `url(${bannerImg})`}}>

      <div className='md:pt-26 px-2 pt-22 text-center space-y-4 md:w-1/2 lg:w-1/2 mx-auto'>
          <h1 className='text-3xl lg:text-4xl font-medium lg:leading-tight leading-snug '>Make your interior more minimalistic & modern</h1>
          <p className='text-xl font-normal'>Turn your room with panto into a lot more  minimalist and modern with ease and speed</p>

          {/* Search Field */}
          <div className=' relative inline-block z-30'>
            <input type="text" placeholder='Search furniture' className='w-full md:w-80 px-6 py-2 bg-white/25 placeholder:text-white rounded-full border border-gray-300 focus:outline-none ' />
            <div className='absolute right-3 top-1/2 transform -translate-y-1/2 p-1 bg-amber-500 rounded-full cursor-pointer '>
              <FaSearch />
            </div>
          </div>
      </div>

        {/* bottom blue effect */}
        <div className= 'absolute inset-x-0 bottom-0 h-2/3 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm blur-lg '>
        </div>

        {/* Hover button for display tooltip box */}
        <div className=' absolute top-116 left-15 group '>
          <button className=' relative p-3 bg-white/25 rounded-full border border-1 bg-white text-xl cursor-pointer  '>
            <div className=' hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-1 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex '>
              <div className=' size-4 bg-red-700 border-white rounded-full '/> 
              <div className=' size-4 bg-green-700 border-white rounded-full '/> 
              <div className=' size-4 bg-yellow-500 border-white rounded-full '/> 

              {/* {tooltip arrow} */}
              <div className=' absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-1-8 border-1-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35  ' >
                
              </div>
            </div>
          </button>
        </div>
    </section>
  )
}

export default Hero
