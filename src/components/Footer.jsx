import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
      return (
            <div className='md:mx-10'>
                  <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                        {/* ----------------Left----------------------- */}
                        <div>
                              <img className='mb-5 w-40' src={assets.logom} alt="" />
                              <p className='w-full md:w-2/3 text-gray-600 leading-6'>Get the right care, right away. <br /> Access  consultation with India’s top doctors on the DOCTO 24x7 app. Connect with doctors, available 24/7, from the comfort of your home.</p>
                        </div>

                        {/* ----------------Center----------------------- */}
                        <div >
                              <p className='text-xl font-medium mb-5 '>COMPANY</p>
                              <ul className='flex flex-col gap-2 text-gray-600'>
                                    <li>Home</li>
                                    <li>About us</li>
                                    <li>Contact us</li>
                                    <li>Privacy policy</li>
                              </ul>
                        </div>

                        {/* ----------------Right----------------------- */}
                        <div>
                              <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>

                              <ul className='flex flex-col gap-2 text-gray-600'>
                                    <li>+91 938XXXXX</li>
                                    <li>rkatara@gmail.com</li>
                              </ul>

                        </div>



                  </div>
                  {/* ----CopyRight Text */}
                  <div>
                        <hr />
                        <p className='py-5 text-sm text-center'>Copyright 2024@ DOCTO 24x7 - All Right Reserved</p>
                  </div>
            </div>
      )
}

export default Footer
