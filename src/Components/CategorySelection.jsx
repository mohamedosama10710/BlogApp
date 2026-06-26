import React from 'react'

const CategorySelection = ({ onHandleSelectCategory, activeCategory }) => {
    const categories = ["Health", "Fintech", "Startups", "AI", "Security","Enterprise","Growth","Work","Gadgets","Tech"];
    
    return (
        <div className='px-4 mb-8 py-7 border-b-1 flex  flex-wrap space-x-7  lg:space-x-16 text-gray-900 font-semibold items-center bg-stone-300 rounded-b-2xl'>

            <button className={`xl:ml-12 cursor-pointer ${activeCategory?"":"active-button"}`} onClick={()=>onHandleSelectCategory(null)}>All</button>

            {categories.map((category) => (

                <button key={category} onClick={()=>onHandleSelectCategory(category) } className={` space-x-16 cursor-pointer ${category===activeCategory?"active-button":""}`} >

                    {category}
                    
                </button>
                
            ))}
            
            
    </div>
  )
}

export default CategorySelection
