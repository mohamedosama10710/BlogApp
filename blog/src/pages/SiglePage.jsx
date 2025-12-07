import React from 'react'
import { useLoaderData } from 'react-router'
import{FaClock, FaUser} from "react-icons/fa6"
import SideBar from '../Components/SideBar';
const SiglePage = () => {
  const data = useLoaderData();
  const{title,image,category,author,published_date,reading_time,content}=data[0]
  return (
    <div>
      <div className='py-40 px-4 text-center bg-black text-white'>
       <h1 className='text-5xl lg:text-7xl font-bold mb-5 '>single blog bage</h1>
      </div>
      
      {/* blog details */}
      <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
          <div>
            <img src={image} alt="" className='w-full mx-auto rounded' />

          </div>
          <h2 className='text-3xl font-bold mb-4 text-blue-500'>
            {title}
          </h2>
          <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>
          <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2' />{reading_time}</p>
          <p className=' text-gray-500 mb-6 text-base'>{content}</p>
          <div className='text-base text-gray-500'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptate, minima provident soluta tempora nihil quibusdam quod quas eum laudantium deleniti qui consequuntur eaque dolores in debitis facilis a molestias.</p><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptate, minima provident soluta tempora nihil quibusdam quod quas eum laudantium deleniti qui consequuntur eaque dolores in debitis facilis a molestias.</p><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptate, minima provident soluta tempora nihil quibusdam quod quas eum laudantium deleniti qui consequuntur eaque dolores in debitis facilis a molestias.</p><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatem magni ut fugit quasi voluptatum dolore facilis quo, recusandae optio id officiis, nemo laboriosam totam. Quibusdam expedita eaque pariatur cupiditate. Alias architecto iste explicabo illo velit dicta perspiciatis est facere repellat voluptatem quisquam laborum quia praesentium, voluptatibus, laudantium dolores, quaerat dolorem ab debitis totam! Qui neque atque quod culpa laudantium nihil vitae perspiciatis. Ratione eaque consequatur repudiandae animi dicta magnam voluptate doloremque quo, doloribus cum iusto placeat cupiditate, omnis fuga!.</p><br />
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptate, minima provident soluta tempora nihil quibusdam quod quas eum laudantium deleniti qui consequuntur eaque dolores in debitis facilis a molestias.</p><br/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, pariatur. Quaerat fugiat blanditiis eos necessitatibus est excepturi saepe id neque illum nobis quidem et asperiores modi, soluta, nemo explicabo, iure ipsum officiis dolore sequi libero odit hic aliquam! Expedita, eaque. Dignissimos nihil doloremque magni provident ullam aliquam blanditiis aut ex.</p><br />
           
            
          </div>
          
        </div>
         <div className='lg:w-3/4'>
              <SideBar/>
            </div>
      </div>
    </div>
  )
}

export default SiglePage
