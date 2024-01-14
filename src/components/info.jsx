import React from 'react';
import CustomerS from "../customer-satisfaction.png";
import Creulty from "../creulty-free.png";

const info = () => {
  return (
    <>
        <div className='relative w-1/5 h-[200px] mt-[750px] -ml-[300px] bg-white drop-shadow-md'>
            <div className='flex flex-row mt-3'>
                <img src={CustomerS} className='h-[150px] w-[150px]'></img>
                <img src={Creulty} className='h-[150px] w-[150px]'></img>
                

            </div>
            <h1 className='text-xs text-end mr-5 mt-1'>All rights reserved</h1>
            <h1 className='text-xs text-end mr-5'>© Vixen- 2024</h1>

        </div>
    </>
  )
}

export default info