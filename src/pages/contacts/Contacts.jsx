import React from 'react'
import detailBannerImg from "../../assets/contact.png";
import { TfiEmail } from "react-icons/tfi";
import contactusimage from "../../assets/contactus.png";
import { IoCall } from "react-icons/io5";



const Contacts = () => {
  return (

    <section className='min-h-screen max-w-screen-2x1 mx-auto '>
      <div className=' bg-center bg-cover  h-90 py-40 p-4 mt-0 bg-gray-500 text-gray-600 ' style={{backgroundImage: `Url(${detailBannerImg})`}}>       

      </div>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Left Side */}
        <div className="bg-gray-100 p-8 flex flex-col justify-center">
          <div className='h-auto mx-auto mt-0  '>
            <img src={contactusimage} alt="Contact" className='rounded-lg' />
          </div>
          <h2 className="text-3xl font-semibold items-center text-center justify-center mt-12 mb-3 ">Contact Us</h2>
          <p className="text-gray-600 mb-1  flex  gap-2 "><TfiEmail /> contact@rajfurniture.com</p>
          <p className="text-gray-600 mb-1 flex items-center gap-3"> <IoCall  className='text-xl text-green-600'/> +1 (666) 000-0000</p>
          <p className=' text-gray-600 mb-1 font-semibold'>Raj Furniture</p>
          <p className="text-gray-600 font-semibold mb-1">  A.F. Avenew, Gulisthan, Dhaka</p>
        </div>

        {/* Right Side - Form */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
          <p className="text-gray-600 mb-6">
            Our friendly team would love to hear from you.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="Your Subject"
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">First name</label>
              <input
                type="text"
                placeholder="First name"
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone number</label>
              <input
                type="tel"
                placeholder="US +1 (666) 000-0000"
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                placeholder="Leave us a message..."
                rows="4"
                className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                I agree to the friendly privacy policy.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>


    </section>
  );
}

export default Contacts
Contacts