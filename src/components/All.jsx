import React, {useState} from 'react';
import { TbFilterSearch } from "react-icons/tb";
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";


const All = () => {

  
  return (
    <>
    
        <div className='flex flex-row ml-8 mt-5 '> 

            <div className='w-1/5 h-[600px] bg-white'>
      
              <div className='p-10 ml-16'>
                <h1 className='flex flex-row text-xl tracking-wider'>Filter<TbFilterSearch style={{marginTop:'2',marginLeft:'3'}}/></h1>
              </div>
      
            </div>
  
      </div>
            
    
    </>
  )
}

export default All