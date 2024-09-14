import React from 'react'
import { assets } from '../../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500 '>
        <p>CONTACT <span className='text-gray-700 font-semibold '>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm '>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

        <div className='flex flex-col items-start justify-center gap-6' >
          <p className='font-semibold text-gray-600 text-lg'>OUR OFFICE</p>
          <p className='text-gray-500 '>58/26 B Block <br />Suite 350, Mumbai,India</p>

          <p className='text-gray-500 '>Tel: 9368xxxxxx <br />Email: docto24x7@gmail.com</p>
          <p className='font-semibold text-gray-600 text-lg '>Careers at DOCTO 24x7</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>

      </div>

    </div>
  )
}

export default Contact
