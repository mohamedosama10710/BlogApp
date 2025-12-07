import React from 'react'

const Pagenation = ({ blogs, currentBage, sizeBage,onHandleBageChange }) => {
    
    const totalPage = Math.ceil(blogs.length/sizeBage)
    


    const renderPagenationLinks = () => {

        return Array.from({length: totalPage }, (_, i) => i + 1).map((pageNumber) => (
             <li className={pageNumber === currentBage ? "activePagenation" : ""} key={pageNumber}>
                <a href="#" onClick={() => onHandleBageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
        
    }
  return (
    
      <ul className='pagination flex-wrap my-6 gap-3'>
          <li>
              <button  onClick={() => onHandleBageChange(currentBage - 1)} disabled={currentBage === 1} className={currentBage===1?"":"cursor-pointer"} >previous</button>
          </li>
          <div className='flex gap-1'>
               {renderPagenationLinks()}
          
          </div>
              
             
          
          <li>
              <button onClick={() => onHandleBageChange(currentBage + 1)} disabled={currentBage === totalPage} className={currentBage === totalPage ? "" : "cursor-pointer"}>Next</button>
          </li>

          
      </ul>

  )
}

export default Pagenation
