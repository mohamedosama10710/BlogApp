import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { FaFacebook ,FaGoogle ,FaTwitter ,FaBars, FaXmark} from "react-icons/fa6";
import Model from './Model';

const Navbar = () => {


    const navItems = [
        { path:"/",link:"Home"},
        { path:"/Blogs",link:"Blogs"},
        { path:"/Servises",link:"Servises"},
        { path:"/About",link:"About"},
        { path:"/Contact",link:"Contact"},
    ]

    const [isItemOpen, setIsItemOpen] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false);


    const toggleBtn = () => {
        setIsItemOpen(!isItemOpen)
    }

    const openModel = () => {
        setIsModelOpen(true)
    }
    const closeModel = () => {
        setIsModelOpen(false)
    }



  return (
      <header className='bg-black fixed left-0 right-0'>
          <nav className='px-4 py-4 flex justify-between max-w-7xl mx-auto items-center'>
              <a className='text-xl text-white' href="/"> <span className='text-orange-600 text-xl font-bold'>Blogify</span></a>

              <ul className='md:flex gap-12 text-lg text-white hidden'>
                  {navItems.map(({path,link}, index) => <li key={index} ><NavLink className={({ isActive }) =>
   
                       isActive ? "active" : ""}
                       to={path}>{link}</NavLink></li>)}
              </ul>

              <div className='text-white lg:flex gap-4 items-center hidden'>
                  <a href='/' className='hover:text-orange-500'><FaFacebook /></a >
                  <a href='/' className='hover:text-orange-500'><FaGoogle/></a >
                  <a href='/' className='hover:text-orange-500'><FaTwitter /></a>
                  <button onClick={openModel} className='py-1 px-7 rounded-lg bg-orange-500 hover:text-orange-500 hover:bg-white transition-all duration-200 text-lg' >Login</button>
              </div>
              {/* our Component model is here */}
              <Model isOpen={isModelOpen} onClose={closeModel} />

              <button onClick={toggleBtn} className='text-white md:hidden cursor-pointer '>
                  {isItemOpen?<FaXmark className='w-5 h-5'/>:<FaBars className='w-5 h-5'/>}
             </button>
          </nav>
        
               <div>
               <ul className={`md:hidden text-lg text-black space-y-4  px-4 py-5 mt-15 bg-white transition-all duration-200 ease-in   ${isItemOpen?"fixed left-0 top-0  w-full ":"hidden"}`}>
                  {navItems.map(({path,link}, index) => <li  key={index} ><NavLink onClick={toggleBtn}  to={path}>{link}</NavLink></li> )}
              </ul>
          </div>
          

         
      
    </header>
  )
}

export default Navbar
