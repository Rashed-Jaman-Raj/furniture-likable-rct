import React from 'react'
import detailBannerImg from "../../assets/contact.png";


const Contacts = () => {
  return (

    <section className='min-h-screen max-w-screen-2x1 container mx-auto'>
      <div className=' bg-center bg-cover  h-50 py-40 p-4 mt-0 bg-gray-500 text-gray-600 ' style={{backgroundImage: `Url(${detailBannerImg})`}}>       

      </div>
      <form>
        
        <h2>Contact Us</h2>
        <div className=''>
          <label>Subject</label>
          <input type="text" className='field' placeholder='Subject Here' required />
        </div>
        <div>
          <label>Full Name</label>
          <input type="text" className='field' placeholder='Enter your name' required />
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" className='field' placeholder='Enter your email' required />
        </div>
        <div>
          <label>Mobile Number</label>
          <input type="number" className='field' placeholder='Enter your mobile number' required />
        </div>
        <div>
          <label>Your Message</label>
          <textarea name="" id="" placeholder='Enter your message' className='field message' required></textarea>
        </div>
        <button type=' submit'>Send Message</button>
      </form>
    </section>
  )
}

export default Contacts
Contacts