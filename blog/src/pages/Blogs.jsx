import React from 'react'
import BlogBage from '../Components/blogBage'


const Blogs = () => {
  return (
    <div>
      
      <div className='py-40 px-4 text-center bg-black text-white'>
         <h1 className='text-5xl lg:text-7xl font-bold  '>Blog Page</h1> 
      </div>
      
       <div className='max-w-7xl mx-auto'>
         <BlogBage/>
       </div>
    
    </div>
    
  )
}

export default Blogs
