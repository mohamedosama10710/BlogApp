import React from 'react'
import Banner from '../Components/banner'
import BlogBage from '../Components/blogBage'

const Home = () => {
  return (
    <div>
      <Banner />
      <div className='max-w-7xl mx-auto'>
         <BlogBage/>
       </div>
    
    </div>
  )
}

export default Home
