import React, { useEffect, useState } from 'react'
import BlogsCards from './BlogsCards';
import Pagenation from './Pagenation';
import CategorySelection from './categorySelection';
import SideBar from './SideBar';






const BlogBage = () => {



    const [blogs, setBlogs] = useState([]);
    const [currentBage, setCurrentBage] = useState(1);
    const sizeBage = 12;
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [activeCategory, setActiveCategory] = useState(null)
    


    useEffect(() => {
        async function getBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentBage}&limit=${sizeBage}`
            if (selectedCategory) {
                url+=`&category=${selectedCategory}`
            }
            
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setBlogs(data);
        }
        getBlogs();
        
    }, [currentBage, sizeBage, selectedCategory])
    
    const handeleBageChange = (pageNumber) => {
        setCurrentBage(pageNumber)
    }
    const handelSelectedCategory = (selectedCategory) => {
        setSelectedCategory(selectedCategory)
        setCurrentBage(1);
        setActiveCategory(selectedCategory);

    }

    return (
      
        <div>
            <div >
                <CategorySelection onHandleSelectCategory={handelSelectedCategory } activeCategory={activeCategory} />
            </div>

            {/* BlogsCards */}

            <div className='flex flex-col lg:flex-row '>
                <BlogsCards blogs={blogs} currentBage={currentBage} sizeBage={sizeBage} selectedCategory={selectedCategory} />
                <div className='ml-10'>
                <SideBar/>
                </div>


            </div>

            <div>
                <Pagenation onHandleBageChange={handeleBageChange} blogs={ blogs} currentBage={currentBage} sizeBage={sizeBage}/>
            </div>
        </div>
       
  )
}

export default BlogBage
