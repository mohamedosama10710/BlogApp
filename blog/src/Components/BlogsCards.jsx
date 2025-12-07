import React from 'react'
import { Link } from 'react-router'
import { FaUser} from "react-icons/fa6";



const BlogsCards = ({ blogs,currentBage,sizeBage,selectedCategory }) => {
    
    const filterBlogs = blogs.filter((blog)=> !selectedCategory||blog.category===selectedCategory).slice((currentBage-1)*sizeBage,currentBage*sizeBage);
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
          {filterBlogs.map((blog) => <Link to={`/blog/${blog.id}`} key={blog.id} className='shadow-lg rounded p-5'>
              <div>
                  <img src={blog.image} alt="" className='w-full' />
              </div>
              <h3 className='mt-4 mb-2 text-bold hover:text-blue-600'>{blog.title}</h3>
              <p className=' text-gray-600 mb-2 '><FaUser className='inline-flex items-center mr-2' />{blog.author}</p>
              <p className='text-sm text-gray-500'>{blog.published_date}</p>

          </Link>)}
    </div>
  ) 
}

export default BlogsCards
