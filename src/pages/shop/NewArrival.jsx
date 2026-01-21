import React from 'react'
import detailBannerImg from "../../assets/about.png";
import { Link, NavLink} from 'react-router-dom'



const NewArrival = () => {
  return (
    <div className='min-h-screen max-w-screen-2x1 container mx-auto'>
      <div className=' bg-center bg-cover  h-50 py-40 p-4 mt-0 bg-gray-500 text-gray-600 ' style={{backgroundImage: `Url(${detailBannerImg})`}}>                          
      </div>

      <h2 className=' text-3xl items-center mt-20 justify-center text-center ml-10 font-semibold mb-4 border-b border-gray-300 '> About Us</h2>
      <div className=' flex flex-col md:flex-row px-10 mt-5 gap-40 mx-30'>
        <div className=' flex-2'>
            <p className='  mb-2 font-semibold  mt-2'>We start our journey from 2014.We are the first and top Furniture shop in Bangladesh. Raj Furniture offers a unique selection of stylish, contemporary, and chic furniture online. Our online furniture range includes sofas, beds, dining tables, Chair, Lamp, TV units, wardrobes, dressing tables, and lots more.</p>
            <p className=' font-semibold mt-4'>All our wooden furniture designs are available online at <NavLink to= "/" className=" text-blue-600 hover:text-red-400"> www.rajfurniture.com </NavLink> On our portal. you can browse as many furniture designs across categories as you like, sort and filter, compare options, easily select and buy the ones you like, and stay updated about new and contemporary designs.</p>
        </div>
        <div className=' flex-1'>
          <p className=' font-bold mt-3'>Our Mission</p>
          <p className=' mb-5'>Our main mission is to satisfy our customer through Providing the quality Products, at the Right Price, at the Right Time.</p>
          <p className=' font-bold mt-3'>Our Vision</p>
          <p className=' mb-5'>Our goal is to become number one furniture company in Bangladesh. We want to lead in this sector.</p>
          <p className=' font-bold '>Our Commitment</p>
          <p className=' mt-1'>Quality <br />
          Job Satisfaction <br className='mt-1' />
          Productivity <br className=' mt-1'/>
          Continuous Improvement <br  className=' mt-1 mb-1'/>
          Growth and Prosperity</p>
        </div>
      </div>
    </div>
  )
}

export default NewArrival
