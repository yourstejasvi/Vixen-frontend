import React from 'react';
import { useState } from 'react';
import Logo from "../Fenty Assets/logo.png";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";


const Navigation = () => {

  const dropdown = ['LIPSTICK', 'BLUSH', 'HIGHLIGHTER', 'EYELINER', 'FOUNDATION', 'EYE-SHADOW'];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <div className='w-full h-[120px] bg-slate-100 shadow-lg'>
            <div className='flex flex-row'>

            <img src={Logo} className='h-24 ml-[50px] my-4 drop-shadow-xl'/>
            <h2 className='font-salsa text-7xl p-4 mt-4 drop-shadow-xl tracking-wider'>Vixen</h2>

            </div>

            <div className='flex flex-row justify-around ml-[800px] -mt-[80px]'>
                <a className='p-2 text-xl cursor-pointer tracking-widest hover:shadow-inner'>HOME</a>
                <div className='p-2 flex flex-row text-xl cursor-pointer hover:shadow-inner'>
                  <button className='flex flex-col tracking-wider' onClick={() => setIsOpen((prev) => !prev)}>
                    PRODUCTS
                    {!isOpen ? (
                      < AiOutlineCaretDown style={{marginLeft:'120px', marginTop:'-24px'}}  />
                    ) : (
                      < AiOutlineCaretUp style={{marginLeft:'120px', marginTop:'-24px'}}  />
                    )}

                  </button>
                  {isOpen && (
                    <div className='z-10 bg-slate-100 absolute p-10 shadow-lg mt-10 -ml-7 justify-around'>
                      {dropdown.map((item) => (
                        <div>
                          <a className='text-sm font-light tracking-widest p-1 hover:bg-slate-200'>{item}</a>
                          </div>
                      ))}

                    </div>
                  )}
                  </div>
                <a className='p-2 text-xl cursor-pointer tracking-wider hover:shadow-inner'>STORES</a>
                <a className='p-2 text-xl cursor-pointer tracking-wider hover:shadow-inner'>CONTACT-US</a>

            </div>
            

        </div>

    </>
  )
}

export default Navigation