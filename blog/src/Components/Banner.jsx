import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router';



const Banner = () => {
  return (
      <div className=' bg-black pt-32 pb-25 px-10 mx-auto'>
          <div className='text-white text-center'>
              <h1 className='text-5xl md:text-7xl font-bold  mb-5 leading-snug '>
                  welcome to our blog
              </h1>
              <p className='text-gray-100 mb-5 font-inter '>"Hello! 👋 We’re glad to have you with us. If you need any assistance, feel free to reach out—we’re here to help!"</p>
              <div>
                 <Link to='/' className='font-medium hover:text-orange-500  '> Learn More<FaArrowRight className=' ml-2 inline '/></Link>

              </div>
              
          </div>
      
    </div>
  )
}

export default Banner
 