import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router';


const SideBar = () => {
    const [populerBlogs, setPopulerBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs").then(res => res.json()).then(data => setPopulerBlogs(data.slice(0, 15)))
    }, [])
    
    return (
        <div >
            <div>
                <h3 className=' text-amber-800 text-2xl font-semibold px-4'>
                    Latest Blogs
                </h3>
                <div>
                    {populerBlogs.slice(0,5).map((blog) => (
                        <div  key={blog.id} className=' py-4 border-b-1 border-spacing-y-4  px-4 '> 
                            <h4 className='font-medium mb-2  '>{blog.title}</h4>
                            <Link  to='/' className='text-base font-medium hover:text-orange-500'>
                                Read More
                                <FaArrowRight className='ml-2 inline' />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className='text-2xl font-semibold px-4 text-amber-800 mt-20'>
                    Populer Blogs
                </h3>
                <div>
                    {populerBlogs.slice(5,10).map((blog) => (
                        <div  key={blog.id} className=' my-4 border-b-1  px-4 '> 
                            <h4 className='font-medium mb-2'>{blog.title}</h4>
                            <Link  to='/' className='text-base pb-2 font-medium hover:text-orange-500'>
                                Read More
                                <FaArrowRight className='ml-2 inline' />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideBar
