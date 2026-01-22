import React from 'react'
import detailBannerImg from "../../assets/about.png";
import { Link, NavLink} from 'react-router-dom'



const NewArrival = () => {
  return (
    <div className='min-h-screen max-w-screen-2x1 mx-auto'>
      <div className=' w-full  h-100 bg-cover bg-center flex items-center justify-center text-white' style={{backgroundImage: `Url(${detailBannerImg})`}}>                          
      </div>

      <h2 className=' text-3xl items-center mt-20 justify-center text-center ml-10 font-semibold mb-4 border-b border-gray-300 '> New Arrival</h2>
      <div>
      
      </div>
    </div>
  )
}

export default NewArrival
