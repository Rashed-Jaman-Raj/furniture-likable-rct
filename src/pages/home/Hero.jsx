import React from 'react'
import bannerImg from "../../assets/banner.png"
import { FaSearch } from 'react-icons/fa'
import TooltipButton from '../../components/TooltipButton'


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
        <div className= 'absolute inset-x-0 bottom-0 h-3/4 -mb-4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm '/>
        

        {/* Hover button for display tooltip box */}
        

        <div className='hidden xl:block absolute top-116 left-15 '>
          <TooltipButton  position="bottom"/> 
        </div>
        <div className='hidden xl:block absolute top-110 left-59'>
          <TooltipButton  position="bottom"/> 
        </div>
        <div className='hidden xl:block absolute top-127 left-176'>
          <TooltipButton  position="bottom"/> 
        </div>
        <div className='hidden xl:block absolute top-132 left-297'>
          <TooltipButton  position="bottom"/> 
        </div>
    </section>
  )
}

export default Hero
