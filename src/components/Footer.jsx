import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook, FaFacebookF, FaInstagram } from 'react-icons/fa6'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (

    <footer className=' bg-gray-100 text-black pt-20 mt-5 pb-5'>
      <div className='max-w-screen-2x1 container mx-auto px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 '>

        {/* logo and deatils*/}
        <div className=' md:col-span-2'>
          <h2 className='text-2xl font-bold text-sky-800 mb-4'> Raj Furniture<Link to="/"></Link> </h2>
          <p className=' md:mr-12'>Your Company is dedicated to providing the best quality products to enhance your home and lifestyle. We combine style and comfort to transform your living spaces into modern sanctuaries.</p>
        </div>
        {/* services div */}
        <div>
          <h3 className='text-xl font-semibold mb-4'>Services</h3>
          <ul className=' space-y-2'>
            <li>
              <Link to="/" className=' hover:text-amber-500'>Email Marketing</Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500'>Campaigns</Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500'>Branding</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl font-semibold mb-4'>Furniture</h3>
          <ul className=' space-y-2'>
            <li>
              <Link to="/" className=' hover:text-amber-500'>Beds</Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500'>Chair</Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500'>All</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl font-semibold mb-4'>Follow Us</h3>
          <ul className=' space-y-2'>
            <li>
              <Link to="/" className=' hover:text-amber-500 flex items-center space-x-2'>
                <FaFacebookF />   <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500 flex items-center space-x-2'>
                <FaTwitter /> <span>Twitter</span>
              </Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500 flex items-center space-x-2'>
                <FaInstagram /> <span>Instagram</span>
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* copyright */}
      <div className='max-w-screen-2x1 container mx-auto px-12 mt-12 flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black border-t border-gray-300 pt-4'>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <div className='flex items-center gap-4'>
          <Link to="/" className=' hover:text-amber-500'>Terms & Conditions</Link>
          <Link to="/" className=' hover:text-amber-500'>Privacy Policy</Link>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer
