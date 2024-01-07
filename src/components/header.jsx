import React from 'react';
import Logo from "../Fenty Assets/logo.png";
import { FaCaretDown } from "react-icons/fa6";


const header = () => {
  return (
    <>
        <div className='w-full h-[120px] bg-slate-100 shadow-lg'>
            <div className='flex flex-row'>

            <img src={Logo} className='h-24 ml-[50px] my-4 drop-shadow-xl'/>
            <h2 className='font-salsa text-7xl p-4 mt-4 drop-shadow-xl tracking-wider'>Vixen</h2>

            </div>

            <div className='flex flex-row justify-around ml-[750px] -mt-16'>
                <a className='text-xl font-semibold cursor-pointer hover:shadow-inner'>HOME</a>
                <a className='flex flex-row text-xl font-semibold cursor-pointer hover:shadow-inner'>PRODUCTS < FaCaretDown style={{marginTop:'4px',marginLeft:'4px'}}/></a>
                <a className='text-xl font-semibold cursor-pointer hover:shadow-inner'>STORES</a>
                <a className='text-xl font-semibold cursor-pointer hover:shadow-inner'>CONTACT-US</a>

            </div>
            

        </div>

    </>
  )
}

export default header